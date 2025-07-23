document.addEventListener('DOMContentLoaded', function() {
    const langBtns = document.querySelectorAll('.lang-btn');
    const elementsWithLang = document.querySelectorAll('[data-en]');
    
    // Get saved language or default to English
    let currentLang = localStorage.getItem('selectedLanguage') || 'en';
    
    // Set initial language
    setLanguage(currentLang);
    updateActiveButton(currentLang);
    
    // Add click handlers to language buttons
    langBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            updateActiveButton(lang);
            localStorage.setItem('selectedLanguage', lang);
        });
    });
    
    function setLanguage(lang) {
        elementsWithLang.forEach(element => {
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                element.textContent = text;
            }
        });
        
        // Update document language
        document.documentElement.lang = lang === 'kz' ? 'kk' : lang;
        
        // Update page title
        const titles = {
            en: 'Olga Syzdykova - Individual Entrepreneur',
            kz: 'Ольга Сыздыкова - Жеке кәсіпкер',
            ru: 'Ольга Сыздыкова - Индивидуальный предприниматель'
        };
        document.title = titles[lang];
    }
    
    function updateActiveButton(lang) {
        langBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
    }
});