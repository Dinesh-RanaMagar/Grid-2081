
const students = [
  { name: "Amir Bishwokarma", class: "5", address: "Devchuli-10", studentPhone: "9811954067" },
  { name: "Amrit Gurung", class: "5", address: "Devchuli-14", studentPhone: "9821957790" },
  { name: "Bhumika Sunari Magar", class: "5", address: "Devchuli-14", studentPhone: "9876435611" }, // Corrected to 10 digits
  { name: "Bijaya Kafle", class: "5", address: "Devchuli-11", studentPhone: "9815439495" },
  { name: "Bipsana Thapa", class: "5", address: "Devchuli-11", studentPhone: "9841413062" },
  { name: "Ghanishta Sunar", class: "5", address: "Devchuli-14", studentPhone: "9804436745" },
  { name: "Kushal Ranabhat", class: "5", address: "Devchuli-14", studentPhone: "9825762299" },
  { name: "Manisha Tumsing", class: "5", address: "Devchuli-11", studentPhone: "9768375112" },
  { name: "Mausam Maski Magar", class: "5", address: "Devchuli-14", studentPhone: "9743480615" },
  { name: "Nikesh Kanhug Magar", class: "5", address: "Devchuli-14", studentPhone: "9821059262" },
  { name: "Parbati Kumal", class: "5", address: "Devchuli-14", studentPhone: "9821440979" },
  { name: "Prakash Sapkota", class: "5", address: "Devchuli-13", studentPhone: "9867836951" },
  { name: "Prayas Gurung", class: "5", address: "Devchuli-13", studentPhone: "9860299147" },
  { name: "Puja Thapa Magar", class: "5", address: "Devchuli-14", studentPhone: "9811556213" },
  { name: "Sabin B.K", class: "5", address: "Devchuli-14", studentPhone: "9764537090" },
  { name: "Samjhana Gharti Magar", class: "5", address: "Devchuli-14", studentPhone: "9704208541" },
  { name: "Smile Nepali", class: "5", address: "Devchuli-14", studentPhone: "9867111056" },
  { name: "Soniya Sherstha", class: "5", address: "Devchuli-11", studentPhone: "9805108943" },
  { name: "Sophia Sunar", class: "5", address: "Devchuli-11", studentPhone: "9805455751" },
  { name: "Subin Tamang", class: "5", address: "Devchuli-11", studentPhone: "9825493490" },
  { name: "Sulav B.K", class: "5", address: "Devchuli-13", studentPhone: "9855055505" },
  { name: "Sushila Ranabhat", class: "5", address: "Devchuli-14", studentPhone: "9867043303" },
  { name: "Sushma Tamang", class: "5", address: "Devchuli-14", studentPhone: "9806549440" },
  { name: "Umanga Thada", class: "5", address: "Devchuli-11", studentPhone: "9825483438" },
  { name: "Unisha Bk", class: "5", address: "Devchuli-14", studentPhone: "9708570683" },
  { name: "Aashika Gurung", class: "Class-7'B'", address: "Devchuli-", studentPhone: "" },
  { name: "Anil B.K.", class: "Class-7'B'", address: "Devchuli-", studentPhone: "9811545787" },
  { name: "Anjal Magar", class: "Class-7'B'", address: "Devchuli-", studentPhone: "078575011" },
  { name: "Bipin Gurung", class: "Class-7'B'", address: "Devchuli-", studentPhone: "9864406592" },
  { name: "Debika Tamang", class: "Class-7'B'", address: "Devchuli-", studentPhone: "9764356088" },
  { name: "Dipesh Magar", class: "Class-7'B'", address: "Devchuli-", studentPhone: "9805405953" },
  { name: "Drishti Saru Magar", class: "Class-7'B'", address: "Devchuli-", studentPhone: "9804471829" },
  { name: "Karuna Pulami Magar", class: "Class-7'B'", address: "Devchuli-", studentPhone: "9845409030" },
  { name: "Laxmi Sunar", class: "Class-7'B'", address: "Devchuli-", studentPhone: "9821577337" },
  { name: "Mandip Chitaure", class: "Class-7'B'", address: "Devchuli-", studentPhone: "9804408140" },
  { name: "Mira Praja", class: "Class-7'B'", address: "Devchuli-", studentPhone: "9847059417" },
  { name: "Motisara Ale Magar", class: "Class-7'B'", address: "Devchuli-", studentPhone: "9815474945" },
  { name: "Nabin Sunar", class: "Class-7'B'", address: "Devchuli-", studentPhone: "" },
  { name: "Om B.K.", class: "Class-7'B'", address: "Devchuli-", studentPhone: "9843704270" },
  { name: "Prijina Mugmi", class: "Class-7'B'", address: "Devchuli-", studentPhone: "9826442118" },
  { name: "Prisma Ale Magar", class: "Class-7'B'", address: "Devchuli-", studentPhone: "9821004161" },
  { name: "Pujaniya Ale Magar", class: "Class-7'B'", address: "Devchuli-", studentPhone: "9816284410" },
  { name: "Richa Pariyar", class: "Class-7'B'", address: "Devchuli-", studentPhone: "" },
  { name: "Romi B.K.", class: "Class-7'B'", address: "Devchuli-", studentPhone: "9806150829" },
  { name: "Sabina Saru Magar", class: "Class-7'B'", address: "Devchuli-", studentPhone: "9811931965" },
  { name: "Sachina Bishwokarma", class: "Class-7'B'", address: "Devchuli-", studentPhone: "9826414702" },
  { name: "Sanjila Chitaure Magar", class: "Class-7'B'", address: "Devchuli-", studentPhone: "078575011" },
  { name: "Sapana Thapa", class: "Class-7'B'", address: "Devchuli-", studentPhone: "9806511344" },
  { name: "Shishir Thapa Magar", class: "Class-7'B'", address: "Devchuli-", studentPhone: "9821992664" }
];


const teachers = [
  {
    name: "Dinesh Rana Magar",
    subject: "Math",
    phone: "9814462637",
    password: "admin123",
    role: "admin"
  },
  {
    name: "Hari Prasad Sharma",
    subject: "Science",
    phone: "9812345678",
    password: "teacher123"
  },
  {
    name: "Mina Gurung",
    subject: "English",
    phone: "9823456789",
    password: "staff123"
  },
  {
    name: "Ramesh Thapa",
    subject: "Nepali",
    phone: "9844567890",
    password: "guest123"
  },
  {
    name: "Kabita Adhikari",
    subject: "Social Studies",
    phone: "9855678901",
    password: "social123"
  }
];

// Allowed users are teachers; derive credentials from the teachers list
const allowedUsers = teachers.map(t => ({ phone: t.phone, password: t.password }));
const allowedUserCount = allowedUsers.length;

const authKey = "grid2081-contact-auth";
const teacherNameKey = "grid2081-contact-teacher-name";
const roleKey = "grid2081-contact-role";
let activeSection = "students";
let searchTerm = "";

const loginView = document.getElementById("loginView");
const dashboardView = document.getElementById("dashboardView");
const loginForm = document.getElementById("loginForm");
const phoneInput = document.getElementById("phoneInput");
const passwordInput = document.getElementById("passwordInput");
const loginMessage = document.getElementById("loginMessage");
const logoutBtn = document.getElementById("logoutBtn");
const searchInput = document.getElementById("searchInput");
const directoryGrid = document.getElementById("directoryGrid");
const emptyState = document.getElementById("emptyState");
const resultCount = document.getElementById("resultCount");
const sectionTitle = document.getElementById("sectionTitle");
const activeEyebrow = document.getElementById("activeEyebrow");
const toast = document.getElementById("toast");
const classFilter = document.getElementById("classFilter");
const teacherGreeting = document.getElementById("teacherGreeting");
const sectionTabs = document.getElementById("sectionTabs");
let activeClassFilter = "";
let currentUserRole = localStorage.getItem(roleKey) || "teacher";

function showLoader() {
  // Loader removed from new design
}

function hideLoader() {
  // Loader removed from new design
}

function isLoggedIn() {
  return localStorage.getItem(authKey) === "true";
}

function showLogin() {
  if (dashboardView && dashboardView.classList) dashboardView.classList.add("hidden");
  if (loginView && loginView.classList) {
    loginView.classList.remove("hidden");
    document.body.style.overflow = "";
  }
}

function showDashboard() {
  if (loginView && loginView.classList) loginView.classList.add("hidden");
  if (dashboardView && dashboardView.classList) {
    dashboardView.classList.remove("hidden");
    dashboardView.classList.toggle("teacher-mode", currentUserRole !== "admin");
    applyRolePermissions();
    updateTeacherGreeting();
    populateClassFilter();
    renderDirectory();
  }
}

function applyRolePermissions() {
  const isAdmin = currentUserRole === "admin";
  if (dashboardView && dashboardView.classList) {
    dashboardView.classList.toggle("teacher-mode", !isAdmin);
  }
  if (sectionTabs) {
    sectionTabs.classList.toggle("hidden", !isAdmin);
  }
  if (!isAdmin) {
    activeSection = "students";
  }
}

function updateTeacherGreeting() {
  if (!teacherGreeting) return;
  const teacherName = localStorage.getItem(teacherNameKey);
  const roleLabel = currentUserRole === "admin" ? "Admin" : "Teacher";
  teacherGreeting.textContent = teacherName ? `Hi, ${teacherName} (${roleLabel})` : `Hi, ${roleLabel}`;
}

function setMessage(message, type = "error") {
  loginMessage.textContent = message;
  loginMessage.style.color = type === "success" ? "#16A34A" : "#DC2626";
}

function normalizePhone(phone) {
  return phone.replace(/\D/g, "");
}

function handleLogin(event) {
  event.preventDefault();
  const phone = normalizePhone(phoneInput.value.trim());
  const password = passwordInput.value.trim();

  if (!phone || !password) {
    setMessage("Please enter both phone number and password.");
    return;
  }

  const validTeacher = teachers.find(teacher => teacher.phone === phone && teacher.password === password);

  if (!validTeacher) {
    setMessage("Incorrect phone number or password. Please try again.");
    passwordInput.value = "";
    passwordInput.focus();
    return;
  }

  setMessage("Login successful. Loading dashboard...", "success");
  localStorage.setItem(authKey, "true");
  localStorage.setItem(teacherNameKey, validTeacher.name);
  currentUserRole = validTeacher.role || "teacher";
  localStorage.setItem(roleKey, currentUserRole);
  setTimeout(() => {
    showDashboard();
    loginForm.reset();
  }, 450);
}

function handleLogout() {
  localStorage.removeItem(authKey);
  localStorage.removeItem(teacherNameKey);
  localStorage.removeItem(roleKey);
  currentUserRole = "teacher";
  activeSection = "students";
  if (dashboardView && dashboardView.classList) {
    dashboardView.classList.remove("teacher-mode");
  }
  setTimeout(() => {
    showLogin();
  }, 350);
}

function matchesSearch(item) {
  const value = Object.values(item).join(" ").toLowerCase();
  return value.includes(searchTerm.toLowerCase());
}

function createPhoneActions(phone, label) {
  return `
    <div class="contact-actions">
      <a class="icon-btn call" href="tel:${phone}" title="Call ${label}"><i class="fas fa-phone"></i></a>
      <a class="icon-btn wa" href="https://wa.me/${phone}" target="_blank" rel="noopener" title="WhatsApp ${label}"><i class="fab fa-whatsapp"></i></a>
      <button class="icon-btn copy" type="button" data-phone="${phone}" title="Copy ${label} number"><i class="fas fa-copy"></i></button>
    </div>
  `;
}

function studentCard(student) {
  const initials = student.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  return `
    <article class="contact-card" data-name="${student.name}">
      <div class="avatar" aria-hidden="true">${initials}</div>
      <div class="card-body">
        <div class="card-title">${student.name}</div>
        <div class="card-meta">Class <strong>${student.class}</strong></div>
        <div class="card-address"><small class="muted">Address</small><div class="address-value">${student.address}</div></div>
        <div class="card-row">
          <div class="card-phones">
            <div class="phone-item"><small class="muted">Student</small><div class="phone-value">${student.studentPhone}</div></div>
          </div>
          <div class="card-actions">
            ${createPhoneActions(student.studentPhone, `${student.name} student`)}
          </div>
        </div>
      </div>
    </article>
  `;
}

function teacherCard(teacher) {
  const initials = teacher.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  return `
    <article class="contact-card" data-name="${teacher.name}">
      <div class="avatar" aria-hidden="true">${initials}</div>
      <div class="card-body">
        <div class="card-title">${teacher.name}</div>
        <div class="card-meta">${teacher.subject} <strong>Teacher</strong></div>
        <div class="card-row">
          <div class="card-phones">
            <div class="phone-item"><small class="muted">Phone</small><div class="phone-value">${teacher.phone}</div></div>
          </div>
          <div class="card-actions">
            ${createPhoneActions(teacher.phone, teacher.name)}
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderDirectory() {
  const isAdmin = currentUserRole === "admin";
  const section = isAdmin ? activeSection : "students";
  const source = section === "students" ? students : teachers;
  const badgeLabel = section === "students" ? "Students" : "Teachers";
  const filtered = source.filter(item => {
    // text search match
    if (!matchesSearch(item)) return false;
    // class filter (only for students)
    if (section === 'students' && activeClassFilter) {
      return item.class === activeClassFilter;
    }
    return true;
  });
  const title = section === "students" ? "Students" : "Teachers";
  const eyebrow = section === "students" ? "Student List" : "Teacher List";

  sectionTitle.textContent = title;
  activeEyebrow.textContent = eyebrow;
  resultCount.textContent = `${filtered.length} result${filtered.length === 1 ? "" : "s"}`;
  const badgeLabelElement = document.querySelector(".badge-label");
  if (badgeLabelElement) {
    badgeLabelElement.textContent = badgeLabel;
  }
  directoryGrid.innerHTML = filtered.map(item => section === "students" ? studentCard(item) : teacherCard(item)).join("");
  emptyState.classList.toggle("hidden", filtered.length !== 0);
  directoryGrid.classList.toggle("hidden", filtered.length === 0);
  // show/hide class filter depending on active section
  if (classFilter) {
    classFilter.style.display = section === 'students' ? '' : 'none';
  }
}

function populateClassFilter() {
  if (!classFilter) return;
  const classes = Array.from(new Set(students.map(s => s.class))).sort((a, b) => Number(a) - Number(b));
  classFilter.innerHTML = '<option value="">All classes</option>' + classes.map(c => `<option value="${c}">Class ${c}</option>`).join('');
  classFilter.value = activeClassFilter || '';
}

function setActiveSection(section) {
  if (currentUserRole !== "admin") {
    activeSection = "students";
    renderDirectory();
    return;
  }
  activeSection = section;
  document.querySelectorAll("[data-section]").forEach(button => {
    button.classList.toggle("active", button.dataset.section === section);
  });
  renderDirectory();
}

async function copyPhone(phone) {
  try {
    await navigator.clipboard.writeText(phone);
    showToast(`Copied ${phone}`);
  } catch (error) {
    const tempInput = document.createElement("input");
    tempInput.value = phone;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    tempInput.remove();
    showToast(`Copied ${phone}`);
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

// Mobile menu toggle for login view
const menuToggle1 = document.getElementById('menuToggle');
const mobileMenu1 = document.getElementById('mobileMenu');
const menuOverlay1 = document.getElementById('menuOverlay');

function toggleMenu1() {
  if (menuToggle1 && mobileMenu1 && menuOverlay1) {
    menuToggle1.classList.toggle('active');
    mobileMenu1.classList.toggle('active');
    menuOverlay1.classList.toggle('active');
  }
}

// Mobile menu toggle for dashboard view
const menuToggle2 = document.getElementById('menuToggle2');
const mobileMenu2 = document.getElementById('mobileMenu2');
const menuOverlay2 = document.getElementById('menuOverlay2');

function toggleMenu2() {
  if (menuToggle2 && mobileMenu2 && menuOverlay2) {
    menuToggle2.classList.toggle('active');
    mobileMenu2.classList.toggle('active');
    menuOverlay2.classList.toggle('active');
  }
}

function toggleSection(sectionId) {
  const sectionContent = document.getElementById(sectionId);
  if (sectionContent) {
    const section = sectionContent.parentElement;

    // Close all other sections first (accordion behavior)
    document.querySelectorAll('.menu-section').forEach(otherSection => {
      if (otherSection !== section) {
        otherSection.classList.remove('expanded');
      }
    });

    // Toggle current section
    section.classList.toggle('expanded');
  }
}

if (menuToggle1) menuToggle1.addEventListener('click', toggleMenu1);
if (menuOverlay1) menuOverlay1.addEventListener('click', toggleMenu1);
if (mobileMenu1) {
  mobileMenu1.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      toggleMenu1();
    }
  });
}

if (menuToggle2) menuToggle2.addEventListener('click', toggleMenu2);
if (menuOverlay2) menuOverlay2.addEventListener('click', toggleMenu2);
if (mobileMenu2) {
  mobileMenu2.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      toggleMenu2();
    }
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", handleLogin);
} else {
  console.warn('Login form not found: #loginForm');
}

// class filter change
if (classFilter) {
  classFilter.addEventListener('change', (e) => {
    activeClassFilter = e.target.value;
    renderDirectory();
  });
}

// Handle both logout buttons
document.addEventListener("click", event => {
  const logoutButton = event.target.closest(".logout-btn") || event.target.closest(".logout-btn-mobile");
  if (logoutButton) {
    handleLogout();
  }
});

searchInput.addEventListener("input", event => {
  searchTerm = event.target.value.trim();
  renderDirectory();
});

document.addEventListener("click", event => {
  const sectionButton = event.target.closest("[data-section]");
  const copyButton = event.target.closest("[data-phone]");

  if (sectionButton) {
    setActiveSection(sectionButton.dataset.section);
  }

  if (copyButton) {
    copyPhone(copyButton.dataset.phone);
  }

  // edit/delete removed — actions handled elsewhere if needed
});

showLoader();
// small UX: show loading overlay then dashboard
if (isLoggedIn()) {
  document.getElementById('loadingOverlay')?.classList.remove('hidden');
  setTimeout(() => {
    document.getElementById('loadingOverlay')?.classList.add('hidden');
    currentUserRole = localStorage.getItem(roleKey) || "teacher";
    showDashboard();
  }, 450);
} else {
  showLogin();
}
hideLoader();

/* Theme toggling (sync with main site) */
const themeToggleBtn = document.getElementById('themeToggle');
const rootEl = document.documentElement;
const storedTheme = localStorage.getItem('grid2081-theme');

const applyTheme = (theme) => {
  rootEl.setAttribute('data-theme', theme);
  localStorage.setItem('grid2081-theme', theme);
  if (themeToggleBtn) {
    const icon = themeToggleBtn.querySelector('i');
    const text = themeToggleBtn.querySelector('.theme-toggle-text');
    if (theme === 'dark') {
      icon.className = 'fas fa-sun';
      if (text) text.textContent = 'Light Mode';
      themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
    } else {
      icon.className = 'fas fa-moon';
      if (text) text.textContent = 'Dark Mode';
      themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
    }
  }
};

const toggleTheme = () => {
  const nextTheme = rootEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
};

applyTheme(storedTheme || 'light');

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', toggleTheme);
}

// populate class filter when dashboard becomes visible
document.addEventListener('DOMContentLoaded', () => {
  populateClassFilter();
});
