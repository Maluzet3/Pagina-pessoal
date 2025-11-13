const defaultConfig = {
    background_color: '#f7f7f7',
    accent_color: '#FF5733',
    primary_color: '#2c3e50', // Nova variável para cor principal do texto
    secondary_color: '#7f8c8d', // Nova variável para cor secundária do texto
    font_family: 'Segoe UI',
    font_size: 16,
    site_title: 'Malu Girelli',
    about_title: 'Sobre Mim',
    about_text: 'Olá! Bem-vindo à minha página pessoal. Aqui você pode conhecer um pouco mais sobre mim, minha jornada, minhas paixões e o que me inspira todos os dias.',
    course_title: 'Meu Curso',
    course_text: 'Estou cursando uma área que me apaixona e que me permite crescer profissionalmente. Aqui compartilho momentos e experiências da minha vida acadêmica.',
    friends_title: 'Meus Amigos',
    friends_text: 'Amigos são a família que escolhemos. Aqui estão as pessoas especiais que fazem parte da minha vida e tornam cada momento mais especial.',
    family_title: 'Minha Família',
    family_text: 'A família é a base de tudo. Aqui compartilho um pouco sobre as pessoas que me apoiam, me inspiram e estão sempre ao meu lado.',
    dreams_title: 'Meus Sonhos',
    dreams_text: 'Sonhar é essencial para crescer. Aqui compartilho minhas aspirações, objetivos e tudo aquilo que me motiva a seguir em frente todos os dias.'
};

async function onConfigChange(config) {
    const customFont = config.font_family || defaultConfig.font_family;
    const baseFontStack = 'Tahoma, Geneva, Verdana, sans-serif';
    const baseSize = config.font_size || defaultConfig.font_size;
    
    const root = document.documentElement;

    // Aplica as variáveis CSS
    root.style.setProperty('--background-color', config.background_color || defaultConfig.background_color);
    root.style.setProperty('--accent-color', config.accent_color || defaultConfig.accent_color);
    root.style.setProperty('--primary-color', config.primary_color || defaultConfig.primary_color);
    root.style.setProperty('--secondary-color', config.secondary_color || defaultConfig.secondary_color);

    // Aplica as fontes e tamanhos base
    document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;
    
    // Títulos e Textos
    const h1 = document.querySelector('h1');
    h1.style.fontSize = `${baseSize * 2.2}px`; // Ajustado para o novo design

    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.style.fontSize = `${baseSize * 1.8}px`; // Ajustado para o novo design
    });

    const contentTexts = document.querySelectorAll('.content-text');
    contentTexts.forEach(text => {
        text.style.fontSize = `${baseSize * 1.1}px`;
    });
    
    // Botões de Navegação
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.style.fontSize = `${baseSize * 0.9}px`;
        // Atualiza a cor de fundo do botão ativo ao mudar a cor de destaque
        if (btn.classList.contains('active')) {
            btn.style.background = config.accent_color || defaultConfig.accent_color;
            btn.style.borderColor = config.accent_color || defaultConfig.accent_color;
            btn.style.color = '#ffffff'; // Cor do texto do botão ativo
        } else {
            btn.style.color = config.primary_color || defaultConfig.primary_color;
        }
    });
    
    // Atualização de Conteúdo
    document.getElementById('site-title').textContent = config.site_title || defaultConfig.site_title;
    document.getElementById('about-title').textContent = config.about_title || defaultConfig.about_title;
    document.getElementById('about-text').textContent = config.about_text || defaultConfig.about_text;
    document.getElementById('course-title').textContent = config.course_title || defaultConfig.course_title;
    document.getElementById('course-text').textContent = config.course_text || defaultConfig.course_text;
    document.getElementById('friends-title').textContent = config.friends_title || defaultConfig.friends_title;
    document.getElementById('friends-text').textContent = config.friends_text || defaultConfig.friends_text;
    document.getElementById('family-title').textContent = config.family_title || defaultConfig.family_title;
    document.getElementById('family-text').textContent = config.family_text || defaultConfig.family_text;
    document.getElementById('dreams-title').textContent = config.dreams_title || defaultConfig.dreams_title;
    document.getElementById('dreams-text').textContent = config.dreams_text || defaultConfig.dreams_text;
}

function mapToCapabilities(config) {
    return {
        recolorables: [
            {
                get: () => config.background_color || defaultConfig.background_color,
                set: (value) => {
                    config.background_color = value;
                    window.elementSdk.setConfig({ background_color: value });
                }
            },
            {
                get: () => config.accent_color || defaultConfig.accent_color,
                set: (value) => {
                    config.accent_color = value;
                    window.elementSdk.setConfig({ accent_color: value });
                }
            },
            {
                get: () => config.primary_color || defaultConfig.primary_color,
                set: (value) => {
                    config.primary_color = value;
                    window.elementSdk.setConfig({ primary_color: value });
                }
            },
            {
                get: () => config.secondary_color || defaultConfig.secondary_color,
                set: (value) => {
                    config.secondary_color = value;
                    window.elementSdk.setConfig({ secondary_text_color: value }); // Mantendo secondary_text_color para compatibilidade com o painel original
                }
            }
        ],
        borderables: [],
        fontEditable: {
            get: () => config.font_family || defaultConfig.font_family,
            set: (value) => {
                config.font_family = value;
                window.elementSdk.setConfig({ font_family: value });
            }
        },
        fontSizeable: {
            get: () => config.font_size || defaultConfig.font_size,
            set: (value) => {
                config.font_size = value;
                window.elementSdk.setConfig({ font_size: value });
            }
        }
    };
}

function mapToEditPanelValues(config) {
    return new Map([
        ['site_title', config.site_title || defaultConfig.site_title],
        ['about_title', config.about_title || defaultConfig.about_title],
        ['about_text', config.about_text || defaultConfig.about_text],
        ['course_title', config.course_title || defaultConfig.course_title],
        ['course_text', config.course_text || defaultConfig.course_text],
        ['friends_title', config.friends_title || defaultConfig.friends_title],
        ['friends_text', config.friends_text || defaultConfig.friends_text],
        ['family_title', config.family_title || defaultConfig.family_title],
        ['family_text', config.family_text || defaultConfig.family_text],
        ['dreams_title', config.dreams_title || defaultConfig.dreams_title],
        ['dreams_text', config.dreams_text || defaultConfig.dreams_text]
    ]);
}

// Inicialização do SDK
if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig: { ...defaultConfig, text_color: defaultConfig.primary_color, secondary_text_color: defaultConfig.secondary_color },
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
    });
}

// Lógica de Navegação da Página (Mostrar/Esconder Seções)
const navButtons = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetPage = button.getAttribute('data-page');
        const config = window.elementSdk ? window.elementSdk.config : defaultConfig;
        const accentColor = config.accent_color || defaultConfig.accent_color;
        const primaryColor = config.primary_color || defaultConfig.primary_color;
        
        // Remove 'active' de todos os botões e reseta o estilo
        navButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.style.background = 'transparent';
            btn.style.color = primaryColor;
            btn.style.borderColor = config.secondary_color || defaultConfig.secondary_color;
        });

        // Adiciona 'active' ao botão clicado e define o estilo de destaque
        button.classList.add('active');
        button.style.background = accentColor;
        button.style.borderColor = accentColor;
        button.style.color = '#ffffff';
        
        // Esconde todas as páginas
        pages.forEach(page => {
            page.classList.remove('active');
        });
        
        // Mostra a página alvo
        document.getElementById(targetPage).classList.add('active');
    });
});