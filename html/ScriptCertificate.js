/* ==========================================================
   Transfer Certificate Printing System — ScriptCertificate.js
   A4 Landscape  |  Certificate area: 220 mm × 200 mm
   Origin (0,0) = top-left of certificate
   Print: values only, transparent background
========================================================== */

'use strict';

// ----------------------------------------------------------
// CONSTANTS
// ----------------------------------------------------------
const CERT_W_MM = 220;   // certificate width  in mm
const CERT_H_MM = 200;   // certificate height in mm

// Internal canvas resolution (300 DPI gives crisp print)
const PRINT_DPI  = 300;
const PX_PER_MM  = PRINT_DPI / 25.4;   // ≈ 11.811 px/mm

// Apply a global offset only during rendering.
// Use this when the printed certificate content area is shifted right from the page edge.
const GLOBAL_X_OFFSET = 0; // millimetres
const GLOBAL_Y_OFFSET = 0; // millimetres

let globalXOffset = 60;
let globalYOffset = 0;

// Preview screen resolution (96 DPI equivalent for display)
// We draw at PRINT_DPI internally and let CSS scale the canvas element.
// CSS size = CERT_W_MM mm × CERT_H_MM mm  ×  currentZoom
// so the preview matches real paper exactly at zoom=1.

const LS_POSITIONS       = 'tcPositions_v6';
const LS_STUDENT         = 'tcStudentData_v2';
const LS_IMAGE           = 'tcCertificateImage';
const LS_ZOOM            = 'tcZoom';
const LS_ROTATION        = 'tcRotation';
const LS_GLOBAL_X_OFFSET = 'tcGlobalXOffset_v2';
const LS_GLOBAL_Y_OFFSET = 'tcGlobalYOffset_v2';

const ROTATION_STEPS = [0, 90, 180, 270];

// ----------------------------------------------------------
// DEFAULT FIELD POSITIONS  (all units in mm)
// ----------------------------------------------------------
const DEFAULT_POSITIONS = {
    SerialNo:            { x: 30.0,  y: 62.0,  fontSize: 18, align: 'left',   fontFamily: 'Times New Roman', fontWeight: 'bold', fontStyle: 'normal', visible: true },
    StudentName:         { x: 110.8, y: 63.2,  fontSize: 20, align: 'center', fontFamily: 'Times New Roman', fontWeight: 'bold', fontStyle: 'normal', visible: true },
    FatherName:          { x: 20.0,  y: 71.7,  fontSize: 18, align: 'left',   fontFamily: 'Times New Roman', fontWeight: 'bold', fontStyle: 'normal', visible: true },
    MotherName:          { x: 118.7, y: 71.7,  fontSize: 18, align: 'left',   fontFamily: 'Times New Roman', fontWeight: 'bold', fontStyle: 'normal', visible: true },
    Municipality:        { x: 35.0,  y: 79.0,  fontSize: 18, align: 'left',   fontFamily: 'Times New Roman', fontWeight: 'bold', fontStyle: 'normal', visible: true },
    WardNumber:          { x: 155.0, y: 79.0,  fontSize: 18, align: 'center', fontFamily: 'Times New Roman', fontWeight: 'bold', fontStyle: 'normal', visible: true },
    District:            { x: 15.0,  y: 86.4,  fontSize: 18, align: 'left',   fontFamily: 'Times New Roman', fontWeight: 'bold', fontStyle: 'normal', visible: true },
    SchoolAdmissionDate: { x: 151.2, y: 86.4,  fontSize: 17, align: 'center', fontFamily: 'Times New Roman', fontWeight: 'bold', fontStyle: 'normal', visible: true },
    LeavingDate:         { x: 15.0,  y: 94.3,  fontSize: 17, align: 'center', fontFamily: 'Times New Roman', fontWeight: 'bold', fontStyle: 'normal', visible: true },
    SEEPassedYear:       { x: 157.6, y: 94.3,  fontSize: 17, align: 'center', fontFamily: 'Times New Roman', fontWeight: 'bold', fontStyle: 'normal', visible: true },
    DateOfBirthBS:       { x: 40.0,  y: 125.6, fontSize: 17, align: 'center', fontFamily: 'Times New Roman', fontWeight: 'bold', fontStyle: 'normal', visible: true },
    DateOfBirthAD:       { x: 90.0,  y: 125.6, fontSize: 17, align: 'center', fontFamily: 'Times New Roman', fontWeight: 'bold', fontStyle: 'normal', visible: true },
    RegistrationNo:      { x: 15.0,  y: 134.4, fontSize: 17, align: 'left',   fontFamily: 'Times New Roman', fontWeight: 'bold', fontStyle: 'normal', visible: true },
    SymbolNo:            { x: 20.0,  y: 142.2, fontSize: 17, align: 'left',   fontFamily: 'Times New Roman', fontWeight: 'bold', fontStyle: 'normal', visible: true },
    GPA:                 { x: 60.0,  y: 149.4, fontSize: 18, align: 'center', fontFamily: 'Times New Roman', fontWeight: 'bold', fontStyle: 'normal', visible: true },
    DateOfIssue:         { x: 20.0,  y: 165.8, fontSize: 18, align: 'left',   fontFamily: 'Times New Roman', fontWeight: 'bold', fontStyle: 'normal', visible: true }
};

// ----------------------------------------------------------
// SAMPLE DATA
// ----------------------------------------------------------
const SAMPLE_DATA = {
    SerialNo:          '001',
    StudentName:       'SANDHYA DHAKA',
    FatherName:        'KESHAWA DIPATHAK',
    MotherName:        'SANTHI DHAKA',
    Municipality:      'Nalpati Municipality',
    WardNumber:        '10',
    District:          'Nawalpur',
    SchoolAdmissionDate:'2070',
    LeavingDate:       '2080',
    SEEPassedYear:     '2080',
    DateOfBirthBS:     '2057-05-15',
    DateOfBirthAD:     '2000-08-28',
    RegistrationNo:    'REG/2070/1245',
    SymbolNo:          '1234567',
    GPA:               '3.85',
    DateOfIssue:       '2081-04-20'
};

// ----------------------------------------------------------
// APPLICATION STATE
// ----------------------------------------------------------
let positions          = deepClone(DEFAULT_POSITIONS);
let studentData        = {};
let certImageDataUrl   = null;
let currentZoom        = 1.0;
let currentRotation    = 0;       // 0 | 90 | 180 | 270
let showCrosshair      = false;
let showRuler          = false;
let selectedField      = null;
let isDragging         = false;
let dragOffset         = { x: 0, y: 0 };

// canvas element references (created once in initCanvas)
let previewCanvas      = null;
let rulerHCanvas       = null;
let rulerVCanvas       = null;
let crosshairH         = null;
let crosshairV         = null;

// ----------------------------------------------------------
// UTILITIES
// ----------------------------------------------------------
function deepClone(obj) { return JSON.parse(JSON.stringify(obj)); }

function clamp(val, min, max) { return Math.min(max, Math.max(min, val)); }

function $(id) { return document.getElementById(id); }

// ----------------------------------------------------------
// LOCAL STORAGE
// ----------------------------------------------------------
function savePositions() {
    try { localStorage.setItem(LS_POSITIONS, JSON.stringify(positions)); } catch(e) {}
}

function loadPositions() {
    try {
        const raw = localStorage.getItem(LS_POSITIONS);
        if (raw) {
            const parsed = JSON.parse(raw);
            // merge: keep defaults for any missing keys
            positions = deepClone(DEFAULT_POSITIONS);
            Object.keys(parsed).forEach(k => {
                if (positions[k]) {
                    const merged = Object.assign({}, positions[k], parsed[k]);
                    merged.x = clamp(Number(merged.x) || 0, 0, CERT_W_MM);
                    merged.y = clamp(Number(merged.y) || 0, 0, CERT_H_MM);
                    merged.fontSize = Math.max(6, Number(merged.fontSize) || 14);
                    positions[k] = merged;
                }
            });
            savePositions();
        }
    } catch(e) { positions = deepClone(DEFAULT_POSITIONS); }
}

function saveStudentData() {
    try { localStorage.setItem(LS_STUDENT, JSON.stringify(studentData)); } catch(e) {}
}

function loadStudentData() {
    try {
        const raw = localStorage.getItem(LS_STUDENT);
        if (raw) {
            studentData = JSON.parse(raw);
            Object.keys(studentData).forEach(k => {
                const el = $(k);
                if (el) el.value = studentData[k] || '';
            });
        }
    } catch(e) {}
    try {
        const img = localStorage.getItem(LS_IMAGE);
        if (img) certImageDataUrl = img;
    } catch(e) {}
    try {
        const z = parseFloat(localStorage.getItem(LS_ZOOM));
        if (!isNaN(z) && z >= 0.25 && z <= 4) currentZoom = z;
    } catch(e) {}
}

function saveZoom() {
    try { localStorage.setItem(LS_ZOOM, String(currentZoom)); } catch(e) {}
}

function saveRotation() {
    try { localStorage.setItem(LS_ROTATION, String(currentRotation)); } catch(e) {}
}

function saveGlobalOffsets() {
    try {
        localStorage.setItem(LS_GLOBAL_X_OFFSET, String(globalXOffset));
        localStorage.setItem(LS_GLOBAL_Y_OFFSET, String(globalYOffset));
    } catch(e) {}
}

function loadGlobalOffsets() {
    try {
        const x = parseFloat(localStorage.getItem(LS_GLOBAL_X_OFFSET));
        if (!isNaN(x)) globalXOffset = x;
        const y = parseFloat(localStorage.getItem(LS_GLOBAL_Y_OFFSET));
        if (!isNaN(y)) globalYOffset = y;
    } catch(e) {}
    updateGlobalOffsetInputs();
}

function updateGlobalOffsetInputs() {
    const xInput = $('globalXOffset');
    const yInput = $('globalYOffset');
    if (xInput) xInput.value = globalXOffset;
    if (yInput) yInput.value = globalYOffset;
}

function loadRotation() {
    try {
        const r = parseInt(localStorage.getItem(LS_ROTATION), 10);
        if (ROTATION_STEPS.includes(r)) currentRotation = r;
    } catch(e) {}
}

// ----------------------------------------------------------
// STATUS MESSAGE
// ----------------------------------------------------------
function showStatus(message, type = 'info') {
    const el = $('statusMessage');
    if (!el) return;
    el.textContent = message;
    el.className = `status-message show ${type}`;
    clearTimeout(el._t);
    el._t = setTimeout(() => { el.className = 'status-message'; el.textContent = ''; }, 3500);
}

// ----------------------------------------------------------
// CANVAS SETUP  (called once on DOMContentLoaded)
// ----------------------------------------------------------
function initCanvas() {
    const container = $('previewContainer');
    if (!container) return;

    // wrapper div — holds canvas + ruler overlays + crosshairs
    const wrapper = document.createElement('div');
    wrapper.id = 'certWrapper';
    container.appendChild(wrapper);

    // main preview canvas
    previewCanvas = document.createElement('canvas');
    previewCanvas.id = 'previewCanvas';
    wrapper.appendChild(previewCanvas);

    // horizontal ruler canvas
    rulerHCanvas = document.createElement('canvas');
    rulerHCanvas.id = 'rulerH';
    wrapper.appendChild(rulerHCanvas);

    // vertical ruler canvas
    rulerVCanvas = document.createElement('canvas');
    rulerVCanvas.id = 'rulerV';
    wrapper.appendChild(rulerVCanvas);

    // crosshair lines
    crosshairH = document.createElement('div');
    crosshairH.className = 'crosshair-h';
    wrapper.appendChild(crosshairH);

    crosshairV = document.createElement('div');
    crosshairV.className = 'crosshair-v';
    wrapper.appendChild(crosshairV);

    // canvas mouse events
    previewCanvas.addEventListener('mousemove',  onCanvasMouseMove);
    previewCanvas.addEventListener('mousedown',  onCanvasMouseDown);
    previewCanvas.addEventListener('mouseup',    onCanvasMouseUp);
    previewCanvas.addEventListener('mouseleave', onCanvasMouseLeave);
}

// ----------------------------------------------------------
// SIZE THE CANVAS TO CURRENT ZOOM
// Canvas is always CERT_W_MM × CERT_H_MM regardless of rotation.
// Rotation is a CSS transform applied to the wrapper, not the canvas.
// ----------------------------------------------------------
function sizeCanvas() {
    if (!previewCanvas) return;

    // Internal pixel size — always 220 × 200 mm at 300 DPI
    previewCanvas.width  = Math.round(CERT_W_MM * PX_PER_MM);
    previewCanvas.height = Math.round(CERT_H_MM * PX_PER_MM);

    // CSS display size — 220 mm × 200 mm × zoom (in screen px)
    const cssPerMm = 96 / 25.4;
    const cssW = CERT_W_MM * cssPerMm * currentZoom;
    const cssH = CERT_H_MM * cssPerMm * currentZoom;
    previewCanvas.style.width  = cssW + 'px';
    previewCanvas.style.height = cssH + 'px';

    // The wrapper must be exactly the same visual size as the canvas
    // so that transform-origin:center center rotates around the
    // certificate centre, not the A4 page centre.
    const wrapper = document.getElementById('certWrapper');
    if (wrapper) {
        wrapper.style.width  = cssW + 'px';
        wrapper.style.height = cssH + 'px';
        // Apply CSS rotation — origin is automatically the wrapper's centre
        wrapper.style.transformOrigin = 'center center';
        wrapper.style.transform = currentRotation !== 0
            ? `rotate(${currentRotation}deg)`
            : 'none';
    }

    // Ruler sizes track the unrotated canvas dimensions
    if (rulerHCanvas) { rulerHCanvas.style.width  = cssW + 'px'; }
    if (rulerVCanvas) { rulerVCanvas.style.height = cssH + 'px'; }
}

// ----------------------------------------------------------
// DRAW TEXT LAYER  (shared by preview & print canvas)
// Coordinates are ALWAYS the master 0° values.
// Rotation is applied via CSS transform on the wrapper (preview)
// or on the img (print) — never by remapping coordinates.
// ----------------------------------------------------------
function drawTextLayer(ctx, pxPerMm) {
    const canvasW = Math.round(CERT_W_MM * pxPerMm);
    const canvasH = Math.round(CERT_H_MM * pxPerMm);

    ctx.save();
    ctx.beginPath();
    ctx.rect(0, 0, canvasW, canvasH);
    ctx.clip();

    ctx.fillStyle    = '#000000';
    ctx.textBaseline = 'alphabetic';

    Object.keys(positions).forEach(key => {
        const p = positions[key];
        if (p.visible === false) return;

        const text = (studentData[key] || '').toString().trim();
        if (!text) return;

        const xPx  = (p.x + GLOBAL_X_OFFSET + globalXOffset) * pxPerMm;
        const yPx  = (p.y + GLOBAL_Y_OFFSET + globalYOffset) * pxPerMm;
        const fs   = Math.max(6, Number(p.fontSize) || 14);
        const fStyle = (p.fontStyle  === 'italic') ? 'italic' : 'normal';
        const fWt    = (p.fontWeight === 'bold')   ? '700'    : '400';
        const fFam   = p.fontFamily || 'Times New Roman';
        const fontPx = fs * pxPerMm / (96 / 25.4);

        ctx.font      = `${fStyle} ${fWt} ${fontPx}px "${fFam}", serif`;
        ctx.textBaseline = 'alphabetic';
        ctx.textAlign = (p.align === 'center') ? 'center' : (p.align === 'right') ? 'right' : 'left';

        const textWidth = ctx.measureText(text).width;
        let drawX = xPx;
        if (p.align === 'center') {
            const halfWidth = textWidth / 2;
            if (drawX - halfWidth < 0) drawX = halfWidth;
            if (drawX + halfWidth > canvasW) drawX = canvasW - halfWidth;
        } else if (p.align === 'right') {
            if (drawX < textWidth) drawX = textWidth;
            if (drawX > canvasW) drawX = canvasW;
        } else {
            if (drawX + textWidth > canvasW) drawX = Math.max(0, canvasW - textWidth);
        }

        ctx.fillText(text, drawX, yPx);
    });

    ctx.textAlign    = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.restore();
}

// ----------------------------------------------------------
// DRAW RULERS
// ----------------------------------------------------------
function drawRulers() {
    if (!showRuler || !rulerHCanvas || !rulerVCanvas) return;

    const cssPerMm = 96 / 25.4;
    const tickColor = '#667eea';
    const textColor = '#333';
    const RULER_SIZE = 18;  // px (height of H ruler, width of V ruler)
    const W = CERT_W_MM * cssPerMm * currentZoom;
    const H = CERT_H_MM * cssPerMm * currentZoom;

    // -- Horizontal ruler --
    rulerHCanvas.width  = Math.round(W);
    rulerHCanvas.height = RULER_SIZE;
    rulerHCanvas.style.width  = W + 'px';
    rulerHCanvas.style.height = RULER_SIZE + 'px';
    const hCtx = rulerHCanvas.getContext('2d');
    hCtx.clearRect(0, 0, rulerHCanvas.width, rulerHCanvas.height);
    hCtx.fillStyle = 'rgba(224,231,255,.92)';
    hCtx.fillRect(0, 0, rulerHCanvas.width, rulerHCanvas.height);
    hCtx.strokeStyle = tickColor;
    hCtx.fillStyle   = textColor;
    hCtx.font = '9px sans-serif';
    hCtx.textAlign = 'center';
    const pxPerMmCSS = cssPerMm * currentZoom;
    for (let mm = 0; mm <= CERT_W_MM; mm += 5) {
        const x = mm * pxPerMmCSS;
        const isMajor = mm % 10 === 0;
        hCtx.beginPath();
        hCtx.moveTo(x, isMajor ? 0 : 8);
        hCtx.lineTo(x, RULER_SIZE);
        hCtx.strokeStyle = tickColor;
        hCtx.lineWidth = isMajor ? 1.2 : 0.7;
        hCtx.stroke();
        if (isMajor && mm > 0) hCtx.fillText(mm, x, 9);
    }

    // -- Vertical ruler --
    rulerVCanvas.width  = RULER_SIZE;
    rulerVCanvas.height = Math.round(H);
    rulerVCanvas.style.width  = RULER_SIZE + 'px';
    rulerVCanvas.style.height = H + 'px';
    const vCtx = rulerVCanvas.getContext('2d');
    vCtx.clearRect(0, 0, rulerVCanvas.width, rulerVCanvas.height);
    vCtx.fillStyle = 'rgba(224,231,255,.92)';
    vCtx.fillRect(0, 0, rulerVCanvas.width, rulerVCanvas.height);
    vCtx.strokeStyle = tickColor;
    vCtx.fillStyle   = textColor;
    vCtx.font = '9px sans-serif';
    vCtx.textAlign = 'right';
    for (let mm = 0; mm <= CERT_H_MM; mm += 5) {
        const y = mm * pxPerMmCSS;
        const isMajor = mm % 10 === 0;
        vCtx.beginPath();
        vCtx.moveTo(isMajor ? 0 : 8, y);
        vCtx.lineTo(RULER_SIZE, y);
        vCtx.strokeStyle = tickColor;
        vCtx.lineWidth = isMajor ? 1.2 : 0.7;
        vCtx.stroke();
        if (isMajor && mm > 0) {
            vCtx.save();
            vCtx.translate(10, y - 2);
            vCtx.rotate(-Math.PI / 2);
            vCtx.fillText(mm, 0, 0);
            vCtx.restore();
        }
    }
}

// ----------------------------------------------------------
// MAIN PREVIEW RENDER
// ----------------------------------------------------------
function updatePreview() {
    if (!previewCanvas) return;

    sizeCanvas();

    const ctx = previewCanvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // clear to transparent (so background image shows through as-is)
    ctx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);

    if (certImageDataUrl) {
        const img = new Image();
        img.onload = () => {
            ctx.drawImage(img, 0, 0, previewCanvas.width, previewCanvas.height);
            drawTextLayer(ctx, PX_PER_MM);
            drawSelectedFieldHighlight(ctx);
        };
        img.onerror = () => {
            ctx.fillStyle = '#fff';
            ctx.fillRect(0, 0, previewCanvas.width, previewCanvas.height);
            drawTextLayer(ctx, PX_PER_MM);
            drawSelectedFieldHighlight(ctx);
        };
        img.src = certImageDataUrl;
    } else {
        // white background for preview without image
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, previewCanvas.width, previewCanvas.height);
        drawTextLayer(ctx, PX_PER_MM);
        drawSelectedFieldHighlight(ctx);
    }

    // Rulers
    if (showRuler) {
        rulerHCanvas.style.display = 'block';
        rulerVCanvas.style.display = 'block';
        drawRulers();
    } else {
        rulerHCanvas.style.display = 'none';
        rulerVCanvas.style.display = 'none';
    }

    // Crosshair (position updated on mousemove; just toggle visibility here)
    if (!showCrosshair) {
        crosshairH.style.display = 'none';
        crosshairV.style.display = 'none';
    }

    // Zoom badge
    const zl = $('zoomLevel');
    if (zl) zl.textContent = Math.round(currentZoom * 100) + '%';

    // Rotation badge
    updateRotationBadge();
}

// Draw a subtle dashed outline around the selected field's approximate position
function drawSelectedFieldHighlight(ctx) {
    if (!selectedField || !positions[selectedField]) return;
    const p = positions[selectedField];
    if (p.visible === false) return;

    const fs     = Math.max(6, Number(p.fontSize) || 14);
    const fontPx = fs * PX_PER_MM / (96 / 25.4);
    const fStyle = (p.fontStyle  === 'italic') ? 'italic' : 'normal';
    const fWt    = (p.fontWeight === 'bold')   ? '700'    : '400';

    // Always use original (0°) coordinates — canvas is never remapped
    const xPx = (p.x + GLOBAL_X_OFFSET) * PX_PER_MM;
    const yPx = (p.y + GLOBAL_Y_OFFSET) * PX_PER_MM;

    ctx.save();
    ctx.font = `${fStyle} ${fWt} ${fontPx}px "${p.fontFamily || 'Times New Roman'}", serif`;

    const sampleText = (studentData[selectedField] || selectedField).toString();
    const tw = ctx.measureText(sampleText).width;

    let bx = xPx;
    if (p.align === 'center') bx = xPx - tw / 2;
    if (p.align === 'right')  bx = xPx - tw;

    ctx.strokeStyle = 'rgba(233,69,96,.8)';
    ctx.lineWidth   = 2;
    ctx.setLineDash([6, 4]);
    ctx.strokeRect(bx - 3, yPx - fontPx - 2, tw + 6, fontPx + 6);
    ctx.setLineDash([]);
    ctx.restore();
}

// ----------------------------------------------------------
// CANVAS MOUSE EVENTS
// ----------------------------------------------------------
function canvasEventToMM(e) {
    const rect = previewCanvas.getBoundingClientRect();
    const cssPerMm = 96 / 25.4;
    const x = (e.clientX - rect.left)  / (cssPerMm * currentZoom);
    const y = (e.clientY - rect.top)   / (cssPerMm * currentZoom);
    return { x, y };
}

function onCanvasMouseMove(e) {
    const { x, y } = canvasEventToMM(e);
    const xEl = $('coordX'); if (xEl) xEl.textContent = x.toFixed(1);
    const yEl = $('coordY'); if (yEl) yEl.textContent = y.toFixed(1);

    // crosshair position
    if (showCrosshair) {
        const rect = previewCanvas.getBoundingClientRect();
        const cx = e.clientX - rect.left;
        const cy = e.clientY - rect.top;
        crosshairH.style.display = 'block';
        crosshairV.style.display = 'block';
        crosshairH.style.top   = cy + 'px';
        crosshairV.style.left  = cx + 'px';
    }

    // dragging
    if (isDragging && selectedField) {
        positions[selectedField].x = clamp(x - dragOffset.x, 0, CERT_W_MM);
        positions[selectedField].y = clamp(y - dragOffset.y, 0, CERT_H_MM);
        savePositions();
        refreshPositionControlsValues();
        updatePreview();
    }
}

function onCanvasMouseDown(e) {
    const { x, y } = canvasEventToMM(e);

    // Try to auto-select the nearest field
    let closest = null, closestDist = 12; // 12mm pick radius
    Object.keys(positions).forEach(key => {
        const p = positions[key];
        if (p.visible === false) return;
        const d = Math.hypot(x - p.x, y - p.y);
        if (d < closestDist) { closestDist = d; closest = key; }
    });
    if (closest) selectField(closest);

    if (selectedField) {
        isDragging = true;
        document.getElementById('certWrapper').classList.add('dragging');
        dragOffset.x = x - positions[selectedField].x;
        dragOffset.y = y - positions[selectedField].y;
    }
}

function onCanvasMouseUp() {
    isDragging = false;
    const w = document.getElementById('certWrapper');
    if (w) w.classList.remove('dragging');
    if (selectedField) savePositions();
}

function onCanvasMouseLeave() {
    isDragging = false;
    const w = document.getElementById('certWrapper');
    if (w) w.classList.remove('dragging');
    if (crosshairH) crosshairH.style.display = 'none';
    if (crosshairV) crosshairV.style.display = 'none';
}

// ----------------------------------------------------------
// FIELD SELECTION
// ----------------------------------------------------------
function selectField(name) {
    selectedField = name;
    const el = $('selectedFieldDisplay');
    if (el) el.textContent = 'Selected: ' + name;

    // highlight the position-item card
    document.querySelectorAll('.position-item').forEach(item => {
        item.classList.toggle('active', item.dataset.field === name);
    });
    updatePreview();
}

// ----------------------------------------------------------
// KEYBOARD SHORTCUTS
// ----------------------------------------------------------
document.addEventListener('keydown', function(e) {
    // Arrow key movement for selected field
    if (selectedField && ['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key)) {
        // Don't hijack when typing in inputs
        if (document.activeElement.tagName === 'INPUT' ||
            document.activeElement.tagName === 'SELECT') return;

        e.preventDefault();
        const step = e.ctrlKey ? 0.1 : e.shiftKey ? 1.0 : 0.2;
        const p = positions[selectedField];
        if (e.key === 'ArrowUp')    p.y = clamp(p.y - step, 0, CERT_H_MM);
        if (e.key === 'ArrowDown')  p.y = clamp(p.y + step, 0, CERT_H_MM);
        if (e.key === 'ArrowLeft')  p.x = clamp(p.x - step, 0, CERT_W_MM);
        if (e.key === 'ArrowRight') p.x = clamp(p.x + step, 0, CERT_W_MM);
        savePositions();
        refreshPositionControlsValues();
        updatePreview();
    }

    // Ctrl+P → print
    if (e.ctrlKey && e.key === 'p') { e.preventDefault(); printCertificate(); }
    // Ctrl+Enter → preview
    if (e.ctrlKey && e.key === 'Enter') { e.preventDefault(); updatePreview(); }
});

// ----------------------------------------------------------
// POSITION CONTROLS — render full panel
// ----------------------------------------------------------
function renderPositionControls() {
    const container = $('positionControls');
    if (!container) return;

    let html = '';
    Object.keys(DEFAULT_POSITIONS).forEach(key => {
        const p = positions[key] || DEFAULT_POSITIONS[key];
        const isVisible = p.visible !== false;
        html += `
<div class="position-item" data-field="${key}" onclick="selectField('${key}')">
  <div class="pi-header">
    <span class="field-name">${key}</span>
    <label class="pi-vis-label">
      <input type="checkbox" ${isVisible ? 'checked' : ''}
             onclick="event.stopPropagation()"
             onchange="updatePos('${key}','visible',this.checked)">
      Visible
    </label>
  </div>
  <div class="pi-row">
    <label>X&nbsp;mm</label>
    <input type="number" step="0.1" value="${p.x}" style="width:60px"
           onchange="updatePos('${key}','x',this.value)" onclick="event.stopPropagation()">
    <label>Y&nbsp;mm</label>
    <input type="number" step="0.1" value="${p.y}" style="width:60px"
           onchange="updatePos('${key}','y',this.value)" onclick="event.stopPropagation()">
    <label>Size</label>
    <input type="number" step="0.5" min="6" max="72" value="${p.fontSize || 14}" style="width:50px"
           onchange="updatePos('${key}','fontSize',this.value)" onclick="event.stopPropagation()">
  </div>
  <div class="pi-row" style="margin-top:5px">
    <label>Font</label>
    <select style="width:130px" onchange="updatePos('${key}','fontFamily',this.value)" onclick="event.stopPropagation()">
      <option value="Times New Roman" ${(p.fontFamily||'Times New Roman')==='Times New Roman'?'selected':''}>Times New Roman</option>
      <option value="Arial"           ${p.fontFamily==='Arial'?'selected':''}>Arial</option>
      <option value="Georgia"         ${p.fontFamily==='Georgia'?'selected':''}>Georgia</option>
      <option value="Courier New"     ${p.fontFamily==='Courier New'?'selected':''}>Courier New</option>
      <option value="serif"           ${p.fontFamily==='serif'?'selected':''}>Serif</option>
    </select>
    <label>Style</label>
    <select style="width:80px" onchange="updatePos('${key}','fontStyle',this.value)" onclick="event.stopPropagation()">
      <option value="normal" ${(p.fontStyle||'normal')==='normal'?'selected':''}>Normal</option>
      <option value="italic" ${p.fontStyle==='italic'?'selected':''}>Italic</option>
    </select>
    <label>Bold</label>
    <input type="checkbox" ${p.fontWeight==='bold'?'checked':''}
           onclick="event.stopPropagation()"
           onchange="updatePos('${key}','fontWeight',this.checked?'bold':'normal')">
    <label>Align</label>
    <select style="width:75px" onchange="updatePos('${key}','align',this.value)" onclick="event.stopPropagation()">
      <option value="left"   ${(p.align||'left')==='left'?'selected':''}>Left</option>
      <option value="center" ${p.align==='center'?'selected':''}>Center</option>
      <option value="right"  ${p.align==='right'?'selected':''}>Right</option>
    </select>
  </div>
</div>`;
    });

    container.innerHTML = html;

    // Re-highlight currently selected field
    if (selectedField) {
        const el = container.querySelector(`[data-field="${selectedField}"]`);
        if (el) el.classList.add('active');
    }
}

// Refresh only numeric input values without re-rendering the whole panel (used during drag/keyboard)
function refreshPositionControlsValues() {
    Object.keys(positions).forEach(key => {
        const p = positions[key];
        const item = document.querySelector(`.position-item[data-field="${key}"]`);
        if (!item) return;
        const inputs = item.querySelectorAll('input[type="number"]');
        // X, Y, Size order
        if (inputs[0]) inputs[0].value = p.x.toFixed(1);
        if (inputs[1]) inputs[1].value = p.y.toFixed(1);
    });
}

// ----------------------------------------------------------
// UPDATE SINGLE FIELD PROPERTY
// ----------------------------------------------------------
function updatePos(key, prop, value) {
    if (!positions[key]) return;
    if (['x','y','fontSize'].includes(prop)) {
        const n = parseFloat(value);
        if (isNaN(n)) return;
        if (prop === 'x') positions[key].x = clamp(n, 0, CERT_W_MM);
        else if (prop === 'y') positions[key].y = clamp(n, 0, CERT_H_MM);
        else positions[key].fontSize = Math.max(6, n);
    } else if (prop === 'visible') {
        positions[key].visible = Boolean(value);
    } else {
        positions[key][prop] = value;
    }
    savePositions();
    updatePreview();
}
window.updatePos = updatePos;

function setAllFontWeight(fontWeight) {
    Object.keys(positions).forEach(key => {
        positions[key].fontWeight = fontWeight;
    });
    savePositions();
    renderPositionControls();
    updatePreview();
    showStatus(fontWeight === 'bold' ? '✅ All fields set to bold' : '✅ All fields set to normal', 'success');
}

// ----------------------------------------------------------
// EXPORT / IMPORT POSITIONS
// ----------------------------------------------------------
function exportPositions() {
    const data = JSON.stringify(positions, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = 'tc_positions.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showStatus('💾 Positions exported', 'success');
}

function importPositions(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
        try {
            const parsed = JSON.parse(ev.target.result);
            // merge on top of defaults so no keys go missing
            positions = deepClone(DEFAULT_POSITIONS);
            Object.keys(parsed).forEach(k => {
                if (positions[k]) positions[k] = Object.assign({}, positions[k], parsed[k]);
            });
            savePositions();
            renderPositionControls();
            updatePreview();
            showStatus('📂 Positions imported', 'success');
        } catch(err) {
            showStatus('❌ Invalid JSON file', 'error');
        }
    };
    reader.readAsText(file);
    e.target.value = ''; // allow re-import of same file
}

// ----------------------------------------------------------
// FORM ACTIONS
// ----------------------------------------------------------
function loadSampleData() {
    Object.keys(SAMPLE_DATA).forEach(k => {
        const el = $(k);
        if (el) el.value = SAMPLE_DATA[k];
    });
    studentData = deepClone(SAMPLE_DATA);
    saveStudentData();
    updatePreview();
    showStatus('📋 Sample data loaded', 'success');
}

function clearForm() {
    document.querySelectorAll('#certificateForm input:not([type="file"])').forEach(el => el.value = '');
    studentData = {};
    saveStudentData();
    updatePreview();
    showStatus('🗑 Form cleared', 'info');
}

function resetSelectedField() {
    if (!selectedField) { showStatus('⚠ No field selected', 'info'); return; }
    positions[selectedField] = deepClone(DEFAULT_POSITIONS[selectedField]);
    savePositions();
    renderPositionControls();
    updatePreview();
    showStatus(`↩ Reset ${selectedField}`, 'success');
}

function resetAllPositions() {
    positions = deepClone(DEFAULT_POSITIONS);
    savePositions();
    renderPositionControls();
    updatePreview();
    showStatus('🔄 All positions reset', 'success');
}

function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
        certImageDataUrl = ev.target.result;
        try { localStorage.setItem(LS_IMAGE, certImageDataUrl); } catch(err) {}
        updatePreview();
        showStatus('✅ Background image loaded', 'success');
    };
    reader.readAsDataURL(file);
}

// ----------------------------------------------------------
// PRINT  — renders VALUES ONLY on a transparent 220×200 mm canvas.
// Rotation is applied as CSS transform on the <img> in the print window,
// anchored at the certificate's own centre (transform-origin: center center).
// The @page stays A4 landscape. The img is always 220mm × 200mm.
// Rotating the img around its own centre means a 180° flip lands every
// value exactly where it should be on the pre-printed certificate.
// ----------------------------------------------------------
function printCertificate() {
    const pw = Math.round(CERT_W_MM * PX_PER_MM);   // always 220mm wide
    const ph = Math.round(CERT_H_MM * PX_PER_MM);   // always 200mm tall

    const offscreen = document.createElement('canvas');
    offscreen.width  = pw;
    offscreen.height = ph;
    const ctx = offscreen.getContext('2d');

    ctx.clearRect(0, 0, pw, ph);        // transparent — no bg, no border
    drawTextLayer(ctx, PX_PER_MM);      // draw values with global render offset

    const dataUrl = offscreen.toDataURL('image/png');
    openPrintWindow(dataUrl);
}

function openPrintWindow(dataUrl) {
    const pw = window.open('', '_blank');
    if (!pw) { showStatus('❌ Popup blocked — allow popups to print', 'error'); return; }

    const A4_W_MM = 297;
    const A4_H_MM = 210;
    const pageOffsetX = ((A4_W_MM - CERT_W_MM) / 2).toFixed(2);
    const pageOffsetY = ((A4_H_MM - CERT_H_MM) / 2).toFixed(2);

    // CSS rotation on the img, anchored at its own centre.
    // This is identical to what the preview does on #certWrapper.
    const rotateCss = currentRotation !== 0
        ? `transform: rotate(${currentRotation}deg); transform-origin: center center;`
        : '';

    pw.document.write(`<!DOCTYPE html>
<html>
<head>
<title>Print Certificate</title>
<style>
@page { size: A4 landscape; margin: 0; }
html, body {
  margin: 0; padding: 0;
  width: 297mm; height: 210mm;
  background: transparent;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
  overflow: hidden;
}
body {
  position: relative;
}
#printFrame {
  position: absolute;
  left: ${pageOffsetX}mm;
  top: ${pageOffsetY}mm;
  width: 220mm;
  height: 200mm;
}
/* The img is always 220mm × 200mm.
   It is placed inside a fixed certificate frame so the whole print area
   lands in the correct A4 position before any fine-tuning offsets. */
img {
  width: 220mm;
  height: 200mm;
  display: block;
  margin: 0; padding: 0; border: none;
  background: transparent;
  flex-shrink: 0;
  ${rotateCss}
}
</style>
</head>
<body>
<div id="printFrame">
  <img id="_p" src="${dataUrl}">
</div>
<script>
document.getElementById('_p').onload = function() {
  setTimeout(function(){ window.focus(); window.print(); }, 200);
};
<\/script>
</body>
</html>`);
    pw.document.close();
    showStatus('🖨 Print dialog opening…', 'success');
}

// ----------------------------------------------------------
// CALIBRATION GUIDE
// ----------------------------------------------------------
function showCalibrationGuide() {
    alert(`📐 CALIBRATION GUIDE

All coordinates are in millimetres from the TOP-LEFT corner of the certificate area.

ORIGIN:  (0, 0) = top-left of the 220 mm × 200 mm certificate
X = distance from the LEFT edge (horizontal)
Y = distance from the TOP edge  (vertical)

KEYBOARD MOVEMENT (click a field card first):
  Arrow keys          → move 0.2 mm
  Shift + Arrow       → move 1.0 mm
  Ctrl  + Arrow       → move 0.1 mm

DRAG:   Click anywhere on the preview — nearest field is auto-selected, then drag.

WORKFLOW:
  1. Load your background image using "Certificate Background Image".
  2. Load Sample data (📋 Sample) to see all fields.
  3. Click a field card in Position Settings to select it.
  4. Drag the field or use arrow keys to fine-tune.
  5. Export positions for backup (💾 Export JSON).
  6. Print on plain paper and test against the pre-printed certificate.

TIP:  Enable Ruler and Crosshair for precision placement.`);
}

// ----------------------------------------------------------
// ZOOM HELPERS
// ----------------------------------------------------------
function zoomIn()    { currentZoom = Math.min(4.0,  currentZoom + 0.1); saveZoom(); updatePreview(); }
function zoomOut()   { currentZoom = Math.max(0.25, currentZoom - 0.1); saveZoom(); updatePreview(); }
function zoomReset() { currentZoom = 1.0; saveZoom(); updatePreview(); }

// ----------------------------------------------------------
// ROTATION HELPERS
// ----------------------------------------------------------
function cycleRotation() {
    const idx = ROTATION_STEPS.indexOf(currentRotation);
    currentRotation = ROTATION_STEPS[(idx + 1) % ROTATION_STEPS.length];
    saveRotation();
    updateRotationBadge();
    updatePreview();
}

function rotateLeft() {
    const idx = ROTATION_STEPS.indexOf(currentRotation);
    currentRotation = ROTATION_STEPS[(idx + ROTATION_STEPS.length - 1) % ROTATION_STEPS.length];
    saveRotation();
    updateRotationBadge();
    updatePreview();
}

function rotateRight() {
    cycleRotation();
}

function updateRotationBadge() {
    const badge = $('rotationBadge');
    if (badge) badge.textContent = 'Rotation: ' + currentRotation + '°';
}

// ----------------------------------------------------------
// INITIALIZATION
// ----------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {

    // 1. Set up the canvas in the preview container
    initCanvas();

    // 2. Load persisted data
    loadPositions();
    loadStudentData();
    loadRotation();
    loadGlobalOffsets();

    // 3. Render position settings panel
    renderPositionControls();

    // 4. Wire up all buttons
    $('loadSampleBtn').addEventListener('click', loadSampleData);
    $('previewBtn')   .addEventListener('click', updatePreview);
    $('printBtn')     .addEventListener('click', printCertificate);
    $('clearBtn')     .addEventListener('click', clearForm);

    $('calibrationBtn').addEventListener('click', showCalibrationGuide);
    $('resetFieldBtn') .addEventListener('click', resetSelectedField);
    $('resetAllBtn')   .addEventListener('click', resetAllPositions);
    $('boldAllBtn')    .addEventListener('click', () => setAllFontWeight('bold'));
    $('exportBtn')     .addEventListener('click', exportPositions);
    $('importBtn')     .addEventListener('click', () => $('importPositionsInput').click());
    $('importPositionsInput').addEventListener('change', importPositions);

    $('zoomOutBtn')       .addEventListener('click', zoomOut);
    $('resetZoomBtn')     .addEventListener('click', zoomReset);
    $('zoomInBtn')        .addEventListener('click', zoomIn);

    $('rotateLeftBtn') .addEventListener('click', rotateLeft);
    $('rotateRightBtn').addEventListener('click', rotateRight);
    $('rotateCycleBtn').addEventListener('click', cycleRotation);

    $('toggleCrosshairBtn').addEventListener('click', () => {
        showCrosshair = !showCrosshair;
        $('toggleCrosshairBtn').classList.toggle('btn-primary', showCrosshair);
        $('toggleCrosshairBtn').classList.toggle('btn-sm', true);
        if (!showCrosshair && crosshairH) {
            crosshairH.style.display = 'none';
            crosshairV.style.display = 'none';
        }
    });

    $('toggleRulerBtn').addEventListener('click', () => {
        showRuler = !showRuler;
        $('toggleRulerBtn').classList.toggle('btn-primary', showRuler);
        $('toggleRulerBtn').classList.toggle('btn-sm', true);
        updatePreview();
    });

    $('certificateImage').addEventListener('change', handleImageUpload);

    const xOffsetInput = $('globalXOffset');
    const yOffsetInput = $('globalYOffset');
    if (xOffsetInput) xOffsetInput.addEventListener('input', () => {
        const value = parseFloat(xOffsetInput.value);
        if (!isNaN(value)) {
            globalXOffset = value;
            saveGlobalOffsets();
            updatePreview();
        }
    });
    if (yOffsetInput) yOffsetInput.addEventListener('input', () => {
        const value = parseFloat(yOffsetInput.value);
        if (!isNaN(value)) {
            globalYOffset = value;
            saveGlobalOffsets();
            updatePreview();
        }
    });
    $('resetGlobalOffsetBtn').addEventListener('click', function () {
        globalXOffset = 60;
        globalYOffset = 0;
        saveGlobalOffsets();
        updateGlobalOffsetInputs();
        updatePreview();
        showStatus('↩ Global offset reset', 'success');
    });

    // 5. Auto-save form inputs + live preview
    document.querySelectorAll('#certificateForm input:not([type="file"])').forEach(input => {
        input.addEventListener('input', function () {
            studentData[this.id] = this.value;
            saveStudentData();
            clearTimeout(this._t);
            this._t = setTimeout(updatePreview, 300);
        });
    });

    // 6. Initial draw
    updatePreview();

    console.log('✅ Transfer Certificate System ready');
    console.log('   Ctrl+P = print  |  Ctrl+Enter = preview  |  Arrow keys = move field');
});

// ----------------------------------------------------------
// EXPOSE to window (for inline onclick handlers in position panel)
// ----------------------------------------------------------
window.selectField  = selectField;
window.updatePos    = updatePos;
