
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
  
  
  //Class 8A
  { name: "Anshu Rai", class: "8'A'", address: "Devchuli-13", studentPhone: "9843910043" },
  { name: "Asbina Rana Magar", class: "8'A'", address: "Devchuli-11", studentPhone: "9765397890" },
  { name: "Asim Bista Magar", class: "8'A'", address: "Devchuli-11", studentPhone: "9843203802" },
  { name: "Bibisa Ghimire", class: "8'A'", address: "Devchuli-13", studentPhone: "9867693541" },
  { name: "Bishal Sunar", class: "8'A'", address: "Devchuli-14", studentPhone: "9812962521" },
  { name: "Bishnu Sing Konwar", class: "8'A'", address: "Devchuli-14", studentPhone: "9827563612" },
  { name: "Himal Gurung", class: "8'A'", address: "Devchuli-14", studentPhone: "9716057419" },
  { name: "Icchya Barawal", class: "8'A'", address: "Devchuli-14", studentPhone: "9820277613" },
  { name: "Icchya Bayambu Magar", class: "8'A'", address: "Devchuli-11", studentPhone: "9844781584" },
  { name: "Jyoti Nepali", class: "8'A'", address: "Devchuli-11", studentPhone: "9825482928" },
  { name: "Khum Maya Gaha Magar", class: "8'A'", address: "Devchuli-14", studentPhone: "9811474867" },
  { name: "Kismat Tamang", class: "8'A'", address: "Devchuli-14", studentPhone: "9866379956" },
  { name: "Kripa Thapa", class: "8'A'", address: "Devchuli-14", studentPhone: "9860775502" },
  { name: "Krishna Narayan Shrestha", class: "8'A'", address: "Devchuli-14", studentPhone: "9845197435" },
  { name: "Manisha Rana Magar", class: "8'A'", address: "Devchuli-14", studentPhone: "9815401856" },
  { name: "Mission Ale", class: "8'A'", address: "Devchuli-12", studentPhone: "9811358324" },
  { name: "Nagma Thapa", class: "8'A'", address: "Devchuli-14", studentPhone: "9815146017" },
  { name: "Paras Sigdel", class: "8'A'", address: "Devchuli-13", studentPhone: "9817499708" },
  { name: "Rohit Shrestha", class: "8'A'", address: "Devchuli-14", studentPhone: "9806988094" },
  { name: "Rosni Sigdel", class: "8'A'", address: "Devchuli-13", studentPhone: "9817499708" },
  { name: "Samir Soti Magar", class: "8'A'", address: "Devchuli-1", studentPhone: "9821004372" },
  { name: "Samjana Thapa", class: "8'A'", address: "Devchuli-11", studentPhone: "9821441017" },
  { name: "Santosh Gharti Magar", class: "8'A'", address: "Devchuli-13", studentPhone: "9821908273" },
  { name: "Shilisa Gaha Magar", class: "8'A'", address: "Devchuli-13", studentPhone: "9867492906" },
  { name: "Sonisha Pariyar", class: "8'A'", address: "Devchuli-14", studentPhone: "9867522002" },
  { name: "Srijana Saru", class: "8'A'", address: "Devchuli-11", studentPhone: "9866472494" },
  { name: "Sagarika Dhakal", class: "8'A'", address: "Devchuli-11", studentPhone: "9819436190" },
  { name: "Susmita Gurung", class: "8'A'", address: "Devchuli-11", studentPhone: "9860299147" },
  { name: "Tara Parsad Wantaki", class: "8'A'", address: "Devchuli-14", studentPhone: "9768857595" },
  { name: "Tek Bahadur Magar", class: "8'A'", address: "Devchuli-14", studentPhone: "9825493546" },
  { name: "Yanisha Bk", class: "8'A'", address: "Devchuli-13", studentPhone: "9867568764" },

  //class 7B
  { name: "Aashika Gurung", class: "7’B’", address: "Devchuli-", studentPhone: "" },
  { name: "Anil B.K.", class: "7’B’", address: "Devchuli-", studentPhone: "9811545787" },
  { name: "Anjal Magar", class: "7’B’", address: "Devchuli-", studentPhone: "078575011" },
  { name: "Bipin Gurung", class: "7’B’", address: "Devchuli-", studentPhone: "9864406592" },
  { name: "Debika Tamang", class: "7’B’", address: "Devchuli-", studentPhone: "9764356088" },
  { name: "Dipesh Magar", class: "7’B’", address: "Devchuli-", studentPhone: "9805405953" },
  { name: "Drishti Saru Magar", class: "7’B’", address: "Devchuli-", studentPhone: "9804471829" },
  { name: "Karuna Pulami Magar", class: "7’B’", address: "Devchuli-", studentPhone: "9845409030" },
  { name: "Laxmi Sunar", class: "7’B’", address: "Devchuli-", studentPhone: "9821577337" },
  { name: "Mandip Chitaure", class: "7’B’", address: "Devchuli-", studentPhone: "9804408140" },
  { name: "Mira Praja", class: "7’B’", address: "Devchuli-", studentPhone: "9847059417" },
  { name: "Motisara Ale Magar", class: "7’B’", address: "Devchuli-", studentPhone: "9815474945" },
  { name: "Nabin Sunar", class: "7’B’", address: "Devchuli-", studentPhone: "" },
  { name: "Om B.K.", class: "7’B’", address: "Devchuli-", studentPhone: "9843704270" },
  { name: "Prijina Mugmi", class: "7’B’", address: "Devchuli-", studentPhone: "9826442118" },
  { name: "Prisma Ale Magar", class: "7’B’", address: "Devchuli-", studentPhone: "9821004161" },
  { name: "Pujaniya Ale Magar", class: "7’B’", address: "Devchuli-", studentPhone: "9816284410" },
  { name: "Richa Pariyar", class: "7’B’", address: "Devchuli-", studentPhone: "" },
  { name: "Romi B.K.", class: "7’B’", address: "Devchuli-", studentPhone: "9806150829" },
  { name: "Sabina Saru Magar", class: "7’B’", address: "Devchuli-", studentPhone: "9811931965" },
  { name: "Sachina Bishwokarma", class: "7’B’", address: "Devchuli-", studentPhone: "9826414702" },
  { name: "Sanjila Chitaure Magar", class: "7’B’", address: "Devchuli-", studentPhone: "078575011" },
  { name: "Sapana Thapa", class: "7’B’", address: "Devchuli-", studentPhone: "9806511344" },
  { name: "Shishir Thapa Magar", class: "7’B’", address: "Devchuli-", studentPhone: "9821992664" },



  //class 2
  { "name": "Aaditya Khanal", "class": "2", "address": "Devchuli-14", "studentPhone": "9867859757" },
  { "name": "Aashma Rana", "class": "2", "address": "Devchuli-11", "studentPhone": "9815400289" },
  { "name": "Aayanshu Sigdel", "class": "2", "address": "Devchuli-10", "studentPhone": "9815286135" },
  { "name": "Ajaya Ale Magar", "class": "2", "address": "Devchuli-14", "studentPhone": "9827481655" },
  { "name": "Alisha Thapa", "class": "2", "address": "Devchuli-14", "studentPhone": "9813386132" },
  { "name": "Amrit Bhusal", "class": "2", "address": "Devchuli-11", "studentPhone": "9847144383" },
  { "name": "Amrit Tharu", "class": "2", "address": "Devchuli-13", "studentPhone": "9813148843" },
  { "name": "Anjila Chitaure Magar", "class": "2", "address": "Devchuli-14", "studentPhone": "9827574701" },
  { "name": "Anjila Disuwa", "class": "2", "address": "Devchuli-11", "studentPhone": "9821059836" },
  { "name": "Asika Lungeli", "class": "2", "address": "Devchuli-14", "studentPhone": "9743690390" },
  { "name": "Asim Rana", "class": "2", "address": "Devchuli-11", "studentPhone": "9814022529" },
  { "name": "Asmita Rana", "class": "2", "address": "Devchuli-12", "studentPhone": "9864452875" },
  { "name": "Barish Pandey", "class": "2", "address": "Devchuli-11", "studentPhone": "9704209800" },
  { "name": "Bipinsha Chepanag", "class": "2", "address": "Devchuli-11", "studentPhone": "9700678287" },
  { "name": "Biraj Mahato", "class": "2", "address": "Devchuli-13", "studentPhone": "982546374" },
  { "name": "Biswash Tamang", "class": "2", "address": "Devchuli-13", "studentPhone": "9826434321" },
  { "name": "Dipsan Rana", "class": "2", "address": "Devchuli-11", "studentPhone": "9821004714" },
  { "name": "Diwan Saru", "class": "2", "address": "Devchuli-11", "studentPhone": "9766633360" },
  { "name": "Diwani Dumre", "class": "2", "address": "Devchuli-11", "studentPhone": "9846225550" },
  { "name": "Jenisara Rana", "class": "2", "address": "Devchuli-13", "studentPhone": "9864452875" },
  { "name": "Khuman Sunari", "class": "2", "address": "Devchuli-14", "studentPhone": "9764356115" },
  { "name": "Laxmi Pulami", "class": "2", "address": "Devchuli-11", "studentPhone": "9847495137" },
  { "name": "Nikesh Pandit", "class": "2", "address": "Devchuli-13", "studentPhone": "97134147344" },
  { "name": "Prinsika Disha Magar", "class": "2", "address": "Devchuli-11", "studentPhone": "9819412921" },
  { "name": "Puspa Pandit", "class": "2", "address": "Devchuli-13", "studentPhone": "9713414734" },
  { "name": "Puspa Kamal Aacharya", "class": "2", "address": "Devchuli-", "studentPhone": "" },
  { "name": "Rabishma Achhama", "class": "2", "address": "Devchuli-13", "studentPhone": "9769318366" },
  { "name": "Renuka Makim", "class": "2", "address": "Devchuli-14", "studentPhone": "98064667865" },
  { "name": "Ridisha Bk", "class": "2", "address": "Devchuli-13", "studentPhone": "9826416931" },
  { "name": "Satya Thakur", "class": "2", "address": "Devchuli-13", "studentPhone": "9807526346" },
  { "name": "Srijan Bakawal", "class": "2", "address": "Devchuli-11", "studentPhone": "9842369881" },
  { "name": "Sushant Tharu", "class": "2", "address": "Devchuli-13", "studentPhone": "9804177656" },
  { "name": "Sujina Rana (N)", "class": "2", "address": "Devchuli-11", "studentPhone": "" },
  { "name": "Aayush Kharu (N)", "class": "2", "address": "Devchuli-14", "studentPhone": "9811556213" },
  
  
  //Class 7A
    { "name": "Aashish Pulami", "class": "7A", "address": "Devchuli-3", "studentPhone": "9804404452" },
    { "name": "Anish Tamang", "class": "7A", "address": "Devchuli-13", "studentPhone": "9743418704" },
    { "name": "Ashok Sinjali Magar", "class": "7A", "address": "Devchuli-14", "studentPhone": "9707909311" },
    { "name": "Barsha Thapa Magar", "class": "7A", "address": "Devchuli-11", "studentPhone": "9863579631" },
    { "name": "Bipana Pariyar", "class": "7A", "address": "Devchuli-14", "studentPhone": "9826429751" },
    { "name": "Dewa Rakim Magar", "class": "7A", "address": "Devchuli-14", "studentPhone": "9807432232" },
    { "name": "Dipika Pulami", "class": "7A", "address": "Devchuli-11", "studentPhone": "9840959411" },
    { "name": "Gayatri Sapkota", "class": "7A", "address": "Devchuli-12", "studentPhone": "9867111176" },
    { "name": "Koshish Bahadur Chettri", "class": "7A", "address": "Devchuli-11", "studentPhone": "9877009890" },
    { "name": "Manu Mahato Nuniya", "class": "7A", "address": "Devchuli-13", "studentPhone": "9821059228" },
    { "name": "Mebika Gurung", "class": "7A", "address": "Devchuli-11", "studentPhone": "9819406000" },
    { "name": "Milisk Pata", "class": "7A", "address": "Devchuli-11", "studentPhone": "9824433993" },
    { "name": "Pappu Mahato Nuniya", "class": "7A", "address": "Devchuli-13", "studentPhone": "9821059228" },
    { "name": "Puja Kumal", "class": "7A", "address": "Devchuli-13", "studentPhone": "9821430738" },
    { "name": "Pushpa Sarki", "class": "7A", "address": "Devchuli-11", "studentPhone": "970428738" },
    { "name": "Rejin Thapa", "class": "7A", "address": "Devchuli-11", "studentPhone": "9816424210" },
    { "name": "Roshan Thapa Magar", "class": "7A", "address": "Devchuli-11", "studentPhone": "9827417780" },
    { "name": "Shashi Rijal", "class": "7A", "address": "Devchuli-11", "studentPhone": "9700680109" },
    { "name": "Sita Saru Magar", "class": "7A", "address": "Devchuli-13", "studentPhone": "9767006471" },
    { "name": "Sonam Saru Magar", "class": "7A", "address": "Devchuli-11", "studentPhone": "9808570693" },
    { "name": "Sonisha Bache Magar", "class": "7A", "address": "Devchuli-11", "studentPhone": "9814483999" },
    { "name": "Srijan Rana", "class": "7A", "address": "Devchuli-13", "studentPhone": "9706597158" },
    { "name": "Sweta Gahatraj", "class": "7A", "address": "Devchuli-14", "studentPhone": "9767629365" },
    { "name": "Tikaram Sapkota", "class": "7A", "address": "Devchuli-13", "studentPhone": "9867836951" }
  



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
    name: "Shreedhar Gywali",
    subject: "Principle",
    phone: "9847079070",
    password: "9847079070",
    role: "admin"
  },
  {
    name: "Paras Poudel",
    subject: "vice-principle",
    phone: "9861217060",
    password: "9861217060"
  },
  {
    name: "OM sunar",
    subject: "Class teacher-8A",
    phone: "981193351",
    password: "981193351"
  },
  {
    name: "Kalpana Bhandari",
    subject: "Class teacher-3",
    phone: "9847094742",
    password: "9847094742"
  },
  {
    name: "Kabita Ghemire",
    subject: "Class teacher",
    phone: "9844710700",
    password: "9844710700"
  },
  {
    name: " Chabikala Bhandari",
    subject: "Subject Teacher",
    phone: "9860295724",
    password: "9860295724"
  },
  {
    name: "Ghanshya Bhusal",
    subject: "Class teacher-8B",
    phone: "9867130155",
    password: "9867130155"
  },
  {
    name: "Jack Sir",
    subject: "Class teacher-7A",
    phone: "9847515747",
    password: "9847515747"
  },
  
  
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
const searchClearBtn = document.getElementById("searchClearBtn");
const searchHint = document.getElementById("searchHint");
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
  teacherGreeting.textContent = teacherName ? `Welcome, ${teacherName} (${roleLabel})` : `Welcome, ${roleLabel}`;
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

function updateSearchUI(section, resultTotal) {
  if (!searchInput) return;

  const query = searchInput.value.trim();
  const isTeachersSection = section === "teachers";
  const placeholder = isTeachersSection
    ? "Search teachers by name, subject, or ID"
    : "Search students by name, class, or ID";

  searchInput.placeholder = placeholder;
  searchInput.setAttribute("aria-label", placeholder);

  if (searchClearBtn) {
    searchClearBtn.hidden = !query;
  }

  const searchBox = searchInput.closest(".search-box.modern");
  if (searchBox) {
    searchBox.classList.toggle("is-empty", !query);
  }

  if (searchHint) {
    if (query) {
      const noun = resultTotal === 1 ? "match" : "matches";
      searchHint.textContent = `${resultTotal} ${noun} for "${query}"`;
    } else {
      searchHint.textContent = isTeachersSection
        ? "Search teachers by name, subject, or ID."
        : "Search students by name, class, or ID.";
    }
  }
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
  updateSearchUI(section, filtered.length);
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

if (searchClearBtn) {
  searchClearBtn.addEventListener("click", () => {
    searchTerm = "";
    searchInput.value = "";
    renderDirectory();
    searchInput.focus();
  });
}

// Handle both logout buttons
document.addEventListener("click", event => {
  const logoutButton = event.target.closest(".logout-btn") || event.target.closest(".logout-btn-mobile");
  if (logoutButton) {
    handleLogout();
  }
});

if (searchInput) {
  searchInput.addEventListener("input", event => {
    searchTerm = event.target.value.trim();
    renderDirectory();
  });
}

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
