// O JAVASCRIPT NÃO PRECISA DE MUDANÇAS
const defaultConfig = {
  background_color: '#FFF9E6',
  accent_color: '#FFD93D',
  text_color: '#5C4A1F',
  secondary_text_color: '#6B5A2E',
  font_family: 'Segoe UI',
  font_size: 16,
  site_title: 'Meu Nome',
  site_subtitle: 'Corajosa e Chorona',
  instagram_link: 'https://www.instagram.com/',
  whatsapp_link: 'https://wa.me/',
  github_link: 'https://github.com/',
  tiktok_link: 'https://www.tiktok.com/',
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

  document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;
  document.body.style.background = config.background_color || defaultConfig.background_color;
  document.body.style.color = config.text_color || defaultConfig.text_color;

  const h1 = document.querySelector('h1');
  h1.style.color = config.text_color || defaultConfig.text_color;
  h1.style.fontSize = `${baseSize * 4}px`;
  
  const subtitle = document.querySelector('.subtitle');
  subtitle.style.color = config.text_color || defaultConfig.text_color;
  subtitle.style.fontSize = `${baseSize * 1.5}px`;


  const sectionTitles = document.querySelectorAll('.section-title');
  sectionTitles.forEach(title => {
    title.style.color = config.text_color || defaultConfig.text_color;
    title.style.borderLeftColor = config.accent_color || defaultConfig.accent_color;
    title.style.fontSize = `${baseSize * 2.25}px`;
  });

  const contentTexts = document.querySelectorAll('.content-text');
  contentTexts.forEach(text => {
    text.style.color = config.secondary_text_color || defaultConfig.secondary_text_color;
    text.style.fontSize = `${baseSize * 1.125}px`;
  });

  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => {
    btn.style.borderColor = config.accent_color || defaultConfig.accent_color;
    btn.style.color = config.text_color || defaultConfig.text_color;
    btn.style.fontSize = `${baseSize}px`;
    if (btn.classList.contains('active')) {
      btn.style.background = config.accent_color || defaultConfig.accent_color;
    } else {
      btn.style.background = 'transparent';
    }
  });
  
  const socialIcons = document.querySelectorAll('.social-icon');
  socialIcons.forEach(icon => {
    icon.style.borderColor = config.accent_color || defaultConfig.accent_color;
    icon.style.color = config.secondary_text_color || defaultConfig.secondary_text_color;
  });

  const header = document.querySelector('header');
  header.style.borderBottomColor = config.accent_color || defaultConfig.accent_color;

  const photoPlaceholders = document.querySelectorAll('.photo-placeholder');
  photoPlaceholders.forEach(ph => {
    ph.style.borderColor = config.accent_color || defaultConfig.accent_color;
  });

  document.getElementById('site-title').textContent = config.site_title || defaultConfig.site_title;
  document.getElementById('site-subtitle').textContent = config.site_subtitle || defaultConfig.site_subtitle; 
  
  document.getElementById('instagram-link').href = config.instagram_link || defaultConfig.instagram_link;
  document.getElementById('whatsapp-link').href = config.whatsapp_link || defaultConfig.whatsapp_link;
  document.getElementById('github-link').href = config.github_link || defaultConfig.github_link;
  document.getElementById('tiktok-link').href = config.tiktok_link || defaultConfig.tiktok_link;

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
        get: () => config.text_color || defaultConfig.text_color,
        set: (value) => {
          config.text_color = value;
          window.elementSdk.setConfig({ text_color: value });
        }
      },
      {
        get: () => config.secondary_text_color || defaultConfig.secondary_text_color,
        set: (value) => {
          config.secondary_text_color = value;
          window.elementSdk.setConfig({ secondary_text_color: value });
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
    ['site_subtitle', config.site_subtitle || defaultConfig.site_subtitle], 
    ['instagram_link', config.instagram_link || defaultConfig.instagram_link],
    ['whatsapp_link', config.whatsapp_link || defaultConfig.whatsapp_link],
    ['github_link', config.github_link || defaultConfig.github_link],
    ['tiktok_link', config.tiktok_link || defaultConfig.tiktok_link],
    
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

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues
  });
}

const navButtons = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');

navButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetPage = button.getAttribute('data-page');

    navButtons.forEach(btn => {
      btn.classList.remove('active');
      btn.style.background = 'transparent';
    });
    pages.forEach(page => {
      page.classList.remove('active');
    });

    button.classList.add('active');
    const config = window.elementSdk ? window.elementSdk.config : defaultConfig;
    button.style.background = config.accent_color || defaultConfig.accent_color;
    document.getElementById(targetPage).classList.add('active');
  });
});