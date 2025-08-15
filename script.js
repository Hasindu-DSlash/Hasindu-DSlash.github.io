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
    'job-title-1': 'Worker - Transport, Logistics and Shipping',
    'job-date-1': 'ManHandWork s.r.l – Tortona | 2024 - 2025',
    'job-task-1-1': 'Sorting and stacking goods.',
    'job-task-1-2': 'Packaging and organizing for distribution.',
    'job-title-2': 'Technician - Mechanic',
    'job-date-2': 'Mowasalat Transport Company - Doha, Qatar | 2019 - 2023',
    'job-task-2-1': 'Performed routine vehicle maintenance.',
    'job-task-2-2': 'Identified and resolved mechanical issues.',
    'job-task-2-3': 'Used diagnostic tools for troubleshooting.',
    'job-task-2-4': 'Kept accurate repair records.',
    'job-task-2-5': 'Collaborated effectively with team members.',
    'job-task-2-6': 'Strictly followed safety protocols.',
    'job-task-2-7': 'Engaged in continuous training.',
    'job-task-2-8': 'Managed spare parts inventory.',
    'job-task-2-9': 'Provided timely customer assistance.',
    'job-task-2-10': 'Consistently adhered to company policies.',
    'job-title-3': 'Automotive Technician',
    'job-date-3': 'Lakshan Motors - Sri Lanka | 2015 - 2017',
    'job-task-3-1': 'Performed vehicle maintenance and repairs.',
    'job-task-3-2': 'Resolved mechanical issues efficiently.',
    'job-task-3-3': 'Operated diagnostic tools effectively.',
    'job-task-3-4': 'Collaborated with maintenance team members.',
    'job-task-3-5': 'Ensured adherence to safety protocols.',
    'job-task-3-6': 'Managed spare parts inventory.',
    'job-task-3-7': 'Provided customer support services.',
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
    'nav-about': 'Obbiettivo',
    'nav-skills': 'Competenze',
    'nav-experience': 'Esperienza',
    'nav-education': 'Istruzione',
    'nav-languages': 'Lingue',
    'nav-email': 'Email',
    'hero-title': 'Tecnico Automotive & Meccanico',
    'social-email-link': 'Email: hasindudilanka@gmail.com',
    'social-phone': 'Tel: +39 351 757 1677',
    'social-address': 'Indirizzo: Via Aldo Moro, 07, 15057 Tortona, Alessandria',
    'section-about-title': 'Obbiettivo',
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
    'job-title-1': 'Operaio - Trasporto logistica e spedizioni',
    'job-date-1': 'ManHandWork s.r.l – Tortona | 2024 - 2025',
    'job-task-1-1': 'Ordinamento e accatastamento delle merci.',
    'job-task-1-2': 'Imballaggio e sistemazione per la distribuzione.',
    'job-title-2': 'Tecnico - Meccanico',
    'job-date-2': 'Mowasalat Transport Company - Doha, Qatar | 2019 - 2023',
    'job-task-2-1': 'Eseguiva la manutenzione ordinaria dei veicoli.',
    'job-task-2-2': 'Identificare e risolvere problemi meccanici.',
    'job-task-2-3': 'Utilizzare strumenti diagnostici per la risoluzione dei problemi.',
    'job-task-2-4': 'Conservare registri accurati delle riparazioni.',
    'job-task-2-5': 'Collaborare efficacemente con i membri del team.',
    'job-task-2-6': 'Seguire rigorosamente i protocolli di sicurezza.',
    'job-task-2-7': 'Partecipare alla formazione continua.',
    'job-task-2-8': 'Gestiva l\'inventario dei pezzi di ricambio.',
    'job-task-2-9': 'Fornire assistenza tempestiva al cliente.',
    'job-task-2-10': 'Aderire coerentemente alle politiche aziendali.',
    'job-title-3': 'Tecnico Automotive',
    'job-date-3': 'Lakshan Motors - Sri Lanka | 2015 - 2017',
    'job-task-3-1': 'Eseguire attività di manutenzione del veicolo.',
    'job-task-3-2': 'Effettuare riparazioni e risolvere i problemi.',
    'job-task-3-3': 'Utilizzare gli strumenti diagnostici in modo efficace.',
    'job-task-3-4': 'Collaborare all\'interno del team di manutenzione.',
    'job-task-3-5': 'Garantire il rispetto del protocollo di sicurezza.',
    'job-task-3-6': 'Gestire l\'inventario dei pezzi di ricambio.',
    'job-task-3-7': 'Fornire supporto al servizio clienti.',
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
    'lang-italian': 'Italiano - Buono',
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
