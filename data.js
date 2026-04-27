const DEPTS = {
  cs: {
    name: "Intelligent Systems",
    nameAr: "هندسة الحاسبات",
    icon: "💻",
    levels: [1,2,3,4]
  },
  cyber: {
    name: "Cybersecurity",
    nameAr: "الأمن السيبراني",
    icon: "🛡️",
    levels: [0,1,2,3]
  },
  mec: {
    name: "Mechatronics",
    nameAr: "الميكاترونيكس",
    icon: "⚙️",
    levels: [0,1,2,3]
  }
};

const COURSES = {
  cyber: {
    0: {
      1: [
        { code:"GEN111", name:"Mathematics (1)", ch:3, price:50, instructor:"د. أحمد محمد" },
        { code:"GEN121", name:"Physics (1)", ch:3, price:45, instructor:"د. سارة علي" },
        { code:"POW111", name:"Electrical Circuits", ch:3, price:55, instructor:"د. محمد حسن" },
        { code:"MEC131", name:"Engineering Drawing", ch:3, price:40, instructor:"د. نور إبراهيم" },
        { code:"CSE111", name:"Computer Techniques", ch:2, price:45, instructor:"د. أحمد محمد" },
        { code:"GEN151", name:"English Language", ch:2, price:30, instructor:"د. ليلى عمر" },
        { code:"GEN152", name:"Communication and Presentation Skills", ch:2, price:30, instructor:"د. ليلى عمر" }
      ],
      2: [
        { code:"GEN112", name:"Mathematics (2)", ch:3, price:50, instructor:"د. أحمد محمد" },
        { code:"GEN122", name:"Physics (2)", ch:3, price:45, instructor:"د. سارة علي" },
        { code:"GEN113", name:"Statistics and Probability Theory", ch:2, price:45, instructor:"د. محمد حسن" },
        { code:"CSE121", name:"Computer Programming", ch:3, price:55, instructor:"د. أحمد محمد" },
        { code:"ECE181", name:"Fundamentals of Cybersecurity", ch:3, price:60, instructor:"د. نور إبراهيم" }
      ]
    },
    1: {
      1: [
        { code:"GEN211", name:"Discrete Mathematics", ch:3, price:50, instructor:"د. أحمد محمد" },
        { code:"ECE211", name:"Electronic Devices and Circuits", ch:3, price:55, instructor:"د. سارة علي" },
        { code:"ECE221", name:"Signals and Systems", ch:3, price:50, instructor:"د. محمد حسن" },
        { code:"CSE221", name:"Data Structures and Algorithms", ch:3, price:60, instructor:"د. أحمد محمد" },
        { code:"CSE222", name:"Information Systems and Databases", ch:2, price:55, instructor:"د. نور إبراهيم" },
        { code:"ECE281", name:"Cyber Laws, Ethics and Privacy", ch:2, price:35, instructor:"د. ليلى عمر" }
      ],
      2: [
        { code:"GEN212", name:"Numerical Methods", ch:3, price:50, instructor:"د. أحمد محمد" },
        { code:"CSE223", name:"Software Engineering", ch:3, price:55, instructor:"د. سارة علي" },
        { code:"ECE212", name:"Logic Circuits Design", ch:3, price:50, instructor:"د. محمد حسن" },
        { code:"ECE222", name:"Communication Systems", ch:3, price:55, instructor:"د. نور إبراهيم" },
        { code:"CSE211", name:"Computer Architecture and Organization", ch:2, price:50, instructor:"د. أحمد محمد" }
      ]
    },
    2: {
      1: [
        { code:"ECE321", name:"Information Theory and Coding", ch:2, price:55, instructor:"د. أحمد محمد" },
        { code:"ECE371", name:"Data Communication Networks", ch:3, price:65, instructor:"د. سارة علي" },
        { code:"ECE331", name:"Micro-Processors and Micro-Controllers", ch:3, price:60, instructor:"د. محمد حسن" },
        { code:"CSE321", name:"Operating Systems", ch:3, price:55, instructor:"د. نور إبراهيم" },
        { code:"CSE322", name:"Web Design and Development", ch:3, price:60, instructor:"د. أحمد محمد" },
        { code:"CSE323", name:"Mobile Software Development", ch:2, price:55, instructor:"د. ليلى عمر" }
      ],
      2: [
        { code:"ECE381", name:"Cryptography and Information Security", ch:3, price:70, instructor:"د. أحمد محمد" },
        { code:"ECE372", name:"Computer Networks", ch:3, price:65, instructor:"د. سارة علي" },
        { code:"ECE332", name:"Embedded Systems", ch:3, price:60, instructor:"د. محمد حسن" },
        { code:"CSE331", name:"Artificial Intelligence", ch:3, price:65, instructor:"د. نور إبراهيم" },
        { code:"CSE351", name:"Cloud and Fog Computing", ch:3, price:60, instructor:"د. أحمد محمد" },
        { code:"CSE341", name:"Secure Software Design", ch:3, price:65, instructor:"د. ليلى عمر" }
      ]
    },
    3: {
      1: [
        { code:"ECE471", name:"Wireless Communication Networks", ch:3, price:75, instructor:"د. أحمد محمد" },
        { code:"ECE481", name:"Security Operations and Incident Response", ch:3, price:80, instructor:"د. سارة علي" },
        { code:"ECE482", name:"Digital Forensics", ch:3, price:75, instructor:"د. محمد حسن" },
        { code:"ECE491", name:"Graduation Project (1)", ch:3, price:0, instructor:"د. نور إبراهيم" }
      ],
      2: [
        { code:"ECE483", name:"Vulnerability Assessment and Penetration Analysis", ch:3, price:85, instructor:"د. أحمد محمد" },
        { code:"ECE484", name:"Cyber Security Risk Management", ch:3, price:80, instructor:"د. سارة علي" },
        { code:"ECE485", name:"Secure Networks Design", ch:3, price:75, instructor:"د. محمد حسن" },
        { code:"ECE492", name:"Graduation Project (2)", ch:3, price:0, instructor:"د. نور إبراهيم" }
      ]
    }
  },
  mec: {
    0: {
      1: [
        { code:"MEC0001", name:"Production Engineering", ch:3, price:45, instructor:"د. أحمد محمد" },
        { code:"GEN0002", name:"Mathematics (1)", ch:3, price:45, instructor:"د. سارة علي" },
        { code:"GEN0003", name:"Physics (1)", ch:3, price:40, instructor:"د. محمد حسن" },
        { code:"GEN0004", name:"Mechanics", ch:3, price:40, instructor:"د. نور إبراهيم" },
        { code:"GEN0005", name:"Academic Reading & Writing (1)", ch:2, price:30, instructor:"د. ليلى عمر" },
        { code:"GEN0006", name:"Computer Skills", ch:2, price:35, instructor:"د. أحمد محمد" }
      ],
      2: [
        { code:"GEN0007", name:"Mathematics (2)", ch:3, price:45, instructor:"د. أحمد محمد" },
        { code:"GEN0008", name:"Physics (2)", ch:3, price:40, instructor:"د. سارة علي" },
        { code:"GEN0009", name:"Industrial Chemistry", ch:3, price:40, instructor:"د. محمد حسن" },
        { code:"MEC0010", name:"Engineering Drawing", ch:3, price:40, instructor:"د. نور إبراهيم" },
        { code:"GEN0011", name:"Academic Reading & Writing (2)", ch:2, price:30, instructor:"د. ليلى عمر" },
        { code:"GEN0012", name:"Critical Thinking", ch:2, price:30, instructor:"د. أحمد محمد" }
      ]
    },
    1: {
      1: [
        { code:"MEC1301", name:"Manufacturing Engineering", ch:2, price:50, instructor:"د. أحمد محمد" },
        { code:"MEC1302", name:"Computer Aided Drawing", ch:2, price:45, instructor:"د. سارة علي" },
        { code:"POW1303", name:"Electrical Engineering", ch:3, price:55, instructor:"د. محمد حسن" },
        { code:"MEC1304", name:"Theory of Machines (1)", ch:3, price:50, instructor:"د. نور إبراهيم" },
        { code:"ECE1305", name:"Electronics & Logic Gates", ch:3, price:50, instructor:"د. أحمد محمد" },
        { code:"GEN1006", name:"Foundations of Digital Technology", ch:2, price:35, instructor:"د. ليلى عمر" },
        { code:"GEN1007", name:"Professional Ethics", ch:2, price:30, instructor:"د. ليلى عمر" }
      ],
      2: [
        { code:"MEC1306", name:"Materials Engineering", ch:2, price:50, instructor:"د. أحمد محمد" },
        { code:"MEC1307", name:"Theory of Machines (2)", ch:3, price:50, instructor:"د. سارة علي" },
        { code:"MEC1308", name:"Thermodynamics", ch:2, price:50, instructor:"د. محمد حسن" },
        { code:"MEC1309", name:"Measurements & Instrumentation", ch:3, price:55, instructor:"د. نور إبراهيم" },
        { code:"POW1310", name:"Power Electronics", ch:3, price:55, instructor:"د. أحمد محمد" }
      ]
    },
    2: {
      1: [
        { code:"MEC2301", name:"Introduction to Mechatronics", ch:3, price:55, instructor:"د. أحمد محمد" },
        { code:"MEC2302", name:"Automatic Control", ch:3, price:60, instructor:"د. سارة علي" },
        { code:"MEC2303", name:"Mechanical Design", ch:3, price:55, instructor:"د. محمد حسن" },
        { code:"MEC2304", name:"Fluid Mechanics", ch:2, price:50, instructor:"د. نور إبراهيم" },
        { code:"POW2305", name:"Electromechanical Machines", ch:3, price:55, instructor:"د. أحمد محمد" }
      ],
      2: [
        { code:"MEC2306", name:"Robotics", ch:3, price:65, instructor:"د. أحمد محمد" },
        { code:"MEC2307", name:"Hydraulic & Pneumatic Control", ch:3, price:60, instructor:"د. سارة علي" },
        { code:"CSC2308", name:"Machine Learning", ch:2, price:65, instructor:"د. محمد حسن" },
        { code:"POW2309", name:"Electrical Drives", ch:3, price:60, instructor:"د. نور إبراهيم" },
        { code:"MEC2310", name:"Intelligent Control", ch:3, price:65, instructor:"د. أحمد محمد" }
      ]
    },
    3: {
      1: [
        { code:"MEC3301", name:"Advanced Robotics", ch:3, price:70, instructor:"د. أحمد محمد" },
        { code:"ECE3302", name:"Embedded Systems", ch:3, price:65, instructor:"د. سارة علي" },
        { code:"MEC3303", name:"CAD/CAM", ch:3, price:65, instructor:"د. محمد حسن" },
        { code:"MEC3304", name:"Vibration & Balancing", ch:3, price:60, instructor:"د. نور إبراهيم" },
        { code:"MEC3305", name:"Design of Mechatronic Systems", ch:3, price:70, instructor:"د. أحمد محمد" },
        { code:"MEC3306", name:"Graduation Project (1)", ch:2, price:0, instructor:"د. ليلى عمر" }
      ],
      2: [
        { code:"MEC3307", name:"Robotics & Manufacturing Automation", ch:3, price:70, instructor:"د. أحمد محمد" },
        { code:"ECE3308", name:"Programmable Logic Controller", ch:3, price:65, instructor:"د. سارة علي" },
        { code:"MEC3309", name:"Monitoring & Fault Diagnosis", ch:2, price:60, instructor:"د. محمد حسن" },
        { code:"MEC3310", name:"Robot Control", ch:3, price:70, instructor:"د. نور إبراهيم" },
        { code:"MEC3311", name:"Graduation Project (2)", ch:2, price:0, instructor:"د. ليلى عمر" }
      ]
    }
  },
  cs: {
    1: {
      1: [
        { code:"CSE101", name:"Introduction to Computing", ch:3, price:50, instructor:"د. أحمد محمد" },
        { code:"GEN1001", name:"Calculus I", ch:3, price:45, instructor:"د. سارة علي" },
        { code:"CSE102", name:"Programming in C++", ch:3, price:60, instructor:"د. محمد حسن" },
        { code:"GEN1002", name:"Physics I", ch:3, price:40, instructor:"د. نور إبراهيم" },
        { code:"ENG1001", name:"Technical English", ch:2, price:30, instructor:"د. ليلى عمر" }
      ],
      2: [
        { code:"CSE103", name:"Data Structures", ch:3, price:60, instructor:"د. أحمد محمد" },
        { code:"GEN1003", name:"Calculus II", ch:3, price:45, instructor:"د. سارة علي" },
        { code:"CSE104", name:"Digital Logic Design", ch:3, price:55, instructor:"د. محمد حسن" },
        { code:"GEN1004", name:"Physics II", ch:3, price:40, instructor:"د. نور إبراهيم" }
      ]
    },
    2: {
      1: [
        { code:"CSE201", name:"Algorithms", ch:3, price:60, instructor:"د. أحمد محمد" },
        { code:"CSE202", name:"Computer Organization", ch:3, price:55, instructor:"د. سارة علي" },
        { code:"CSE203", name:"Object Oriented Programming", ch:3, price:60, instructor:"د. محمد حسن" },
        { code:"MAT201", name:"Discrete Mathematics", ch:3, price:50, instructor:"د. نور إبراهيم" },
        { code:"CSE204", name:"Database Systems", ch:3, price:60, instructor:"د. أحمد محمد" }
      ],
      2: [
        { code:"CSE205", name:"Operating Systems", ch:3, price:60, instructor:"د. أحمد محمد" },
        { code:"CSE206", name:"Computer Networks", ch:3, price:60, instructor:"د. سارة علي" },
        { code:"CSE207", name:"Software Engineering", ch:3, price:55, instructor:"د. محمد حسن" },
        { code:"MAT202", name:"Linear Algebra", ch:3, price:50, instructor:"د. نور إبراهيم" }
      ]
    },
    3: {
      1: [
        { code:"CSE301", name:"Compiler Design", ch:3, price:65, instructor:"د. أحمد محمد" },
        { code:"CSE302", name:"Artificial Intelligence", ch:3, price:70, instructor:"د. سارة علي" },
        { code:"CSE303", name:"Computer Graphics", ch:3, price:65, instructor:"د. محمد حسن" },
        { code:"CSE304", name:"Distributed Systems", ch:3, price:65, instructor:"د. نور إبراهيم" }
      ],
      2: [
        { code:"CSE305", name:"Machine Learning", ch:3, price:75, instructor:"د. أحمد محمد" },
        { code:"CSE306", name:"Cloud Computing", ch:3, price:70, instructor:"د. سارة علي" },
        { code:"CSE307", name:"Mobile Application Development", ch:3, price:65, instructor:"د. محمد حسن" },
        { code:"CSE308", name:"Senior Project (1)", ch:3, price:0, instructor:"د. نور إبراهيم" }
      ]
    },
    4: {
      1: [
        { code:"CSE401", name:"Deep Learning", ch:3, price:80, instructor:"د. أحمد محمد" },
        { code:"CSE402", name:"Cybersecurity Fundamentals", ch:3, price:75, instructor:"د. سارة علي" },
        { code:"CSE403", name:"Internet of Things", ch:3, price:70, instructor:"د. محمد حسن" },
        { code:"CSE404", name:"Senior Project (2)", ch:3, price:0, instructor:"د. نور إبراهيم" }
      ],
      2: [
        { code:"CSE405", name:"Blockchain Technology", ch:3, price:80, instructor:"د. أحمد محمد" },
        { code:"CSE406", name:"Natural Language Processing", ch:3, price:80, instructor:"د. سارة علي" },
        { code:"CSE407", name:"Advanced Software Architecture", ch:3, price:75, instructor:"د. محمد حسن" },
        { code:"CSE408", name:"Senior Project (3)", ch:3, price:0, instructor:"د. نور إبراهيم" }
      ]
    }
  }
};

const ICONS = ["💻","📐","⚡","🔬","📊","🛡️","🤖","🔧","📡","🧮","🖥️","🔐"];

function getIcon(i) { return ICONS[i % ICONS.length]; }

function getParam(k) {
  return new URLSearchParams(window.location.search).get(k);
}

function setParams(obj) {
  const p = new URLSearchParams(window.location.search);
  for (const [k,v] of Object.entries(obj)) p.set(k,v);
  return p.toString();
}

function navHtml(active) {
  return `<nav>
    <a class="logo" href="index.html">Student<span>4</span>Student</a>
    <ul>
      <li><a href="index.html">الرئيسية</a></li>
      <li><a href="departments.html">المواد</a></li>
      <li><a href="#">عنا</a></li>
      <li><a href="departments.html" class="btn-nav">ابدأ الآن</a></li>
    </ul>
  </nav>`;
}

function footerHtml() {
  return `<footer>© 2025 Student4Student — منصة تعليمية من طلاب لطلاب</footer>`;
}

function showModal(title, msg) {
  const ov = document.getElementById('modal-overlay');
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-msg').textContent = msg;
  ov.classList.add('open');
}

function initModal() {
  const ov = document.getElementById('modal-overlay');
  document.getElementById('modal-close').onclick = () => ov.classList.remove('open');
  ov.addEventListener('click', e => { if(e.target === ov) ov.classList.remove('open'); });
}

function modalHtml() {
  return `<div class="modal-overlay" id="modal-overlay">
    <div class="modal">
      <div class="icon">✅</div>
      <h2 id="modal-title">تم التسجيل بنجاح!</h2>
      <p id="modal-msg">سيتم التواصل معك قريباً لإتمام عملية الدفع.</p>
      <button class="btn-close-modal" id="modal-close">حسناً</button>
    </div>
  </div>`;
}
