const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('#mobile-menu');
const themeToggleDesktop = document.querySelector('#theme-toggle-desktop');
const themeToggleMobile = document.querySelector('#theme-toggle-mobile');

function applyTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
  // Update icons for both buttons
  const darkIcons = document.querySelectorAll('.dark-icon');
  const lightIcons = document.querySelectorAll('.light-icon');
  if (theme === 'dark') {
    darkIcons.forEach(icon => icon.classList.add('hidden'));
    lightIcons.forEach(icon => icon.classList.remove('hidden'));
  } else {
    darkIcons.forEach(icon => icon.classList.remove('hidden'));
    lightIcons.forEach(icon => icon.classList.add('hidden'));
  }
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const isDark = document.body.classList.contains('dark');
  applyTheme(isDark ? 'light' : 'dark');
}

// Attach event listeners to both theme toggle buttons
if (themeToggleDesktop) {
  themeToggleDesktop.addEventListener('click', toggleTheme);
}
if (themeToggleMobile) {
  themeToggleMobile.addEventListener('click', toggleTheme);
}

// Initialize theme on page load
const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(savedTheme);

// Hamburger menu toggle
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('hidden');
  });
}

// Close mobile menu when a nav link is clicked
document.querySelectorAll('#mobile-menu .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.add('hidden');
  });
});

// --- Language Toggle Functionality ---
const langToggleDesktop = document.getElementById('language-toggle');
const langToggleMobile = document.getElementById('language-toggle-mobile');
const langTextIt = document.getElementById('lang-text-it');
const langTextEn = document.getElementById('lang-text-en');
const langTextItMobile = document.getElementById('lang-text-it-mobile');
const langTextEnMobile = document.getElementById('lang-text-en-mobile');
const htmlElement = document.querySelector('html');

const translations = {
  en: {
    'title': 'Hasindu Dilanka - Automotive Technician',
    'nav-about': 'About',
    'nav-skills': 'Skills',
    'nav-experience': 'Experience',
    'nav-education': 'Education',
    'nav-languages': 'Languages',
    'nav-email': 'Email',
    'hero-title': 'Automotive & Mechanical Technician',
    'social-email-link': 'Email: hasindudilanka@gmail.com',
    'social-phone': 'Tel: +39 351 757 1677',
    'social-address': 'Address: Via Aldo Moro, 07, 15057 Tortona, Alessandria',
    'section-about-title': 'About Me',
    'section-about-text': 'A 28-year-old professional with the ability to quickly learn new skills and confidently adapt to various environments. Skilled in teamwork and supporting colleagues to achieve common goals, with hands-on expertise in vehicle maintenance, diagnostics, and repair, alongside excellent safety protocol adherence and customer service.',
    'section-skills-title': 'Skills',
    'skill-teamwork': 'Teamwork',
    'skill-communication': 'Effective Communication',
    'skill-problemsolving': 'Problem Solving',
    'skill-timemanagement': 'Time Management',
    'skill-diagnostics': 'Vehicle Diagnostics',
    'skill-maintenance': 'Maintenance & Repair',
    'skill-inventory': 'Inventory Management',
    'skill-customersupport': 'Customer Support',
    'section-experience-title': 'Work Experience',
    'job-title-1': 'Technician - Mechanic',
    'job-date-1': 'Mowasalat Transport Company - Doha, Qatar | 2019 - 2023',
    'job-task-1-1': 'Performed routine vehicle maintenance.',
    'job-task-1-2': 'Identified and resolved mechanical issues.',
    'job-task-1-3': 'Used diagnostic tools for troubleshooting.',
    'job-task-1-4': 'Kept accurate repair records.',
    'job-task-1-5': 'Collaborated effectively with team members.',
    'job-task-1-6': 'Strictly followed safety protocols.',
    'job-task-1-7': 'Engaged in continuous training.',
    'job-task-1-8': 'Managed spare parts inventory.',
    'job-task-1-9': 'Provided timely customer assistance.',
    'job-task-1-10': 'Consistently adhered to company policies.',
    'job-title-2': 'Automotive Technician',
    'job-date-2': 'Lakshan Motors - Sri Lanka | 2015 - 2017',
    'job-task-2-1': 'Performed vehicle maintenance and repairs.',
    'job-task-2-2': 'Resolved mechanical issues efficiently.',
    'job-task-2-3': 'Operated diagnostic tools effectively.',
    'job-task-2-4': 'Collaborated with maintenance team members.',
    'job-task-2-5': 'Ensured adherence to safety protocols.',
    'job-task-2-6': 'Managed spare parts inventory.',
    'job-task-2-7': 'Provided customer support services.',
    'section-education-title': 'Education & Training',
    'edu-institute-1': 'German-Ceylon Technical Institute, Moratuwa',
    'edu-course-1-1': 'Motor Vehicle Technology (M1, M2, M3) - 07.2015 - 11.2016',
    'edu-course-1-2': 'Automobile Electricity - 11.2016 - 03.2017',
    'edu-course-1-3': 'Modern Motor Vehicle Technology - 03.2017 - 07.2017',
    'edu-course-1-4': 'Hybrid Technology - 07.2017 - 09.2017',
    'edu-course-1-5': 'Air Conditioning & Refrigeration - 03.2015 - 09.2015',
    'edu-institute-2': 'Electro Technical Training Institute, Negombo',
    'edu-course-2-1': 'Full-time Annual Course in Air Conditioning & Refrigeration - 05.2013 - 04.2014',
    'edu-cert-title': 'NVQ Level 3 Certifications',
    'edu-cert-1': 'Automobile Mechanic - 09.2017',
    'edu-cert-2': 'Air Conditioning Mechanic - 07.2016',
    'edu-cert-3': 'Refrigeration Mechanic - 07.2016',
    'section-languages-title': 'Languages',
    'lang-italian': 'Italian - Basic',
    'lang-english': 'English - Good',
    'lang-sinhala': 'Sinhala - Excellent',
    'footer-text': '© 2025 <a href="mailto:k3akalanka@gmail.com" target="_blank">SightseR</a>. Crafted with modern web technologies.',
  },
  it: {
    'title': 'Hasindu Dilanka - Tecnico Automotive',
    'nav-about': 'Chi sono',
    'nav-skills': 'Competenze',
    'nav-experience': 'Esperienza',
    'nav-education': 'Istruzione',
    'nav-languages': 'Lingue',
    'nav-email': 'Email',
    'hero-title': 'Tecnico Automotive & Meccanico',
    'social-email-link': 'Email: hasindudilanka@gmail.com',
    'social-phone': 'Tel: +39 351 757 1677',
    'social-address': 'Indirizzo: Via Aldo Moro, 07, 15057 Tortona, Alessandria',
    'section-about-title': 'Chi sono',
    'section-about-text': 'Un professionista di 28 anni con la capacità di imparare rapidamente nuove competenze e di adattarsi con sicurezza a vari ambienti. Abile nel lavoro di squadra e nel supportare i colleghi per raggiungere obiettivi comuni, con esperienza pratica nella manutenzione, diagnostica e riparazione dei veicoli, oltre a un\'ottima aderenza ai protocolli di sicurezza e un eccellente servizio clienti.',
    'section-skills-title': 'Competenze',
    'skill-teamwork': 'Lavoro di squadra',
    'skill-communication': 'Comunicazione efficace',
    'skill-problemsolving': 'Risoluzione dei problemi',
    'skill-timemanagement': 'Gestione del tempo',
    'skill-diagnostics': 'Diagnostica del veicolo',
    'skill-maintenance': 'Manutenzione e riparazione',
    'skill-inventory': 'Gestione dell\'inventario',
    'skill-customersupport': 'Supporto clienti',
    'section-experience-title': 'Esperienza lavorativa',
    'job-title-1': 'Tecnico - Meccanico',
    'job-date-1': 'Mowasalat Transport Company - Doha, Qatar | 2019 - 2023',
    'job-task-1-1': 'Eseguiva la manutenzione ordinaria dei veicoli.',
    'job-task-1-2': 'Identificava e risolveva problemi meccanici.',
    'job-task-1-3': 'Utilizzava strumenti diagnostici per la risoluzione dei problemi.',
    'job-task-1-4': 'Tenuta di registri di riparazione accurati.',
    'job-task-1-5': 'Collaborava in modo efficace con i membri del team.',
    'job-task-1-6': 'Seguiva rigorosamente i protocolli di sicurezza.',
    'job-task-1-7': 'Partecipava a formazione continua.',
    'job-task-1-8': 'Gestiva l\'inventario dei pezzi di ricambio.',
    'job-task-1-9': 'Forniva assistenza tempestiva ai clienti.',
    'job-task-1-10': 'Aderiva costantemente alle politiche aziendali.',
    'job-title-2': 'Tecnico Automotive',
    'job-date-2': 'Lakshan Motors - Sri Lanka | 2015 - 2017',
    'job-task-2-1': 'Eseguiva manutenzioni e riparazioni sui veicoli.',
    'job-task-2-2': 'Risolveva i problemi meccanici in modo efficiente.',
    'job-task-2-3': 'Utilizzava efficacemente strumenti diagnostici.',
    'job-task-2-4': 'Collaborava con i membri del team di manutenzione.',
    'job-task-2-5': 'Garantiva l\'adesione ai protocolli di sicurezza.',
    'job-task-2-6': 'Gestiva l\'inventario dei pezzi di ricambio.',
    'job-task-2-7': 'Forniva servizi di supporto ai clienti.',
    'section-education-title': 'Istruzione e formazione',
    'edu-institute-1': 'German-Ceylon Technical Institute, Moratuwa',
    'edu-course-1-1': 'Tecnologia dei veicoli a motore (M1, M2, M3) - 07.2015 - 11.2016',
    'edu-course-1-2': 'Elettricità automobilistica - 11.2016 - 03.2017',
    'edu-course-1-3': 'Tecnologia moderna dei veicoli a motore - 03.2017 - 07.2017',
    'edu-course-1-4': 'Tecnologia ibrida - 07.2017 - 09.2017',
    'edu-course-1-5': 'Aria condizionata e refrigerazione - 03.2015 - 09.2015',
    'edu-institute-2': 'Electro Technical Training Institute, Negombo',
    'edu-course-2-1': 'Corso annuale a tempo pieno in aria condizionata e refrigerazione - 05.2013 - 04.2014',
    'edu-cert-title': 'Certificazioni NVQ Livello 3',
    'edu-cert-1': 'Meccanico automobilistico - 09.2017',
    'edu-cert-2': 'Meccanico di aria condizionata - 07.2016',
    'edu-cert-3': 'Meccanico di refrigerazione - 07.2016',
    'section-languages-title': 'Lingue',
    'lang-italian': 'Italiano - Base',
    'lang-english': 'Inglese - Buono',
    'lang-sinhala': 'Singalese - Eccellente',
    'footer-text': '© 2025 <a href="mailto:mailto:k3akalanka@gmail.com" target="_blank">SightseR</a>. Realizzato con moderne tecnologie web.',
  }
};

function switchLanguage(lang) {
  document.querySelectorAll('[data-lang-key]').forEach(element => {
    const key = element.getAttribute('data-lang-key');
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  // Update the page title
  const pageTitle = document.querySelector('title');
  if (pageTitle && translations[lang]['title']) {
    pageTitle.textContent = translations[lang]['title'];
  }

  htmlElement.lang = lang;
  localStorage.setItem('lang', lang);
}

function toggleLanguage() {
  const currentLang = htmlElement.lang === 'it' ? 'en' : 'it';
  
  // Toggle the active language button text visibility
  langTextIt.classList.toggle('hidden');
  langTextEn.classList.toggle('hidden');
  langTextItMobile.classList.toggle('hidden');
  langTextEnMobile.classList.toggle('hidden');

  switchLanguage(currentLang);
}

if (langToggleDesktop) {
  langToggleDesktop.addEventListener('click', toggleLanguage);
}
if (langToggleMobile) {
  langToggleMobile.addEventListener('click', toggleLanguage);
}

// Initialize language on page load
const savedLang = localStorage.getItem('lang') || 'it';
switchLanguage(savedLang);

// Set initial state of language buttons
if (savedLang === 'en') {
    langTextIt.classList.add('hidden');
    langTextEn.classList.remove('hidden');
    langTextItMobile.classList.add('hidden');
    langTextEnMobile.classList.remove('hidden');
} else {
    langTextIt.classList.remove('hidden');
    langTextEn.classList.add('hidden');
    langTextItMobile.classList.remove('hidden');
    langTextEnMobile.classList.add('hidden');
}