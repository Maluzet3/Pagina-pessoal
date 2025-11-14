const defaultConfig = {
  background_color: 'hsl(45, 100%, 97%)', // Amarelo muito claro
  accent_color: 'hsl(45, 100%, 70%)', // Amarelo principal
  text_color: '#333333', // Texto principal
  secondary_text_color: '#666666', // Texto secundário
  font_family: 'Inter',
  font_size: 16,
  site_title: 'Meu Nome',
  site_subtitle: 'Corajosa e Chorona',
  
  instagram_link: 'https://www.instagram.com/malu.girelli?igsh=MjJreWtnc3JtaHpz',
  whatsapp_link: 'https://wa.me/qr/3U5O6Q4ARMHDJ1',
  linkedin_link: 'AQUI_VAI_O_LINK_DO_SEU_LINKEDIN', 
  github_link: 'https://github.com/Maluzet3',
  
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
  const accentColor = config.accent_color || defaultConfig.accent_color;

  document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;
  document.body.style.background = config.background_color || defaultConfig.background_color;
  document.body.style.color = config.text_color || defaultConfig.text_color;

  // Dentro da função onConfigChange:

// 1. Seu Nome (h1)
const h1 = document.querySelector('h1');
// Aumente o número 3.5 para algo como 4.5 ou 5.0
h1.style.fontSize = `${baseSize * 5.0 / 16}rem`; 
// ...

// 2. Seu Subtítulo (.subtitle)
const subtitle = document.querySelector('.subtitle');
// Aumente o número 1.5 para algo como 1.8 ou 2.0
subtitle.style.fontSize = `${baseSize * 1.5 / 16}rem`;

  const sectionTitles = document.querySelectorAll('.section-title');
  sectionTitles.forEach(title => {
    title.style.color = config.text_color || defaultConfig.text_color;
    title.style.borderLeftColor = accentColor;
    title.style.fontSize = `${baseSize * 2.2 / 16}rem`;
  });

  const contentTexts = document.querySelectorAll('.content-text');
  contentTexts.forEach(text => {
    text.style.color = config.secondary_text_color || defaultConfig.secondary_text_color;
    text.style.fontSize = `${baseSize * 1.1 / 16}rem`;
  });
  
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => {
    btn.style.borderColor = accentColor;
    btn.style.color = config.text_color || defaultConfig.text_color;
    btn.style.fontSize = `${baseSize / 16}rem`;
    if (btn.classList.contains('active')) {
      btn.style.background = accentColor;
      btn.style.color = config.secondary_text_color; // Cor de texto escuro para o botão ativo
    } else {
      btn.style.background = 'transparent';
    }
  });
  
  const socialIcons = document.querySelectorAll('.social-icon');
  socialIcons.forEach(icon => {
    icon.style.borderColor = accentColor; // Borda amarela
    icon.style.color = config.secondary_text_color || defaultConfig.secondary_text_color; // Ícone escuro
  });

  const header = document.querySelector('header');
  header.style.borderBottomColor = accentColor;

  const photoPlaceholders = document.querySelectorAll('.photo-placeholder');
  photoPlaceholders.forEach(ph => {
    ph.style.borderColor = accentColor;
    ph.style.background = 'white'; 
  });

  document.getElementById('site-title').textContent = config.site_title || defaultConfig.site_title;
  document.getElementById('site-subtitle').textContent = config.site_subtitle || defaultConfig.site_subtitle; 
  
  document.querySelector('.social-links a[aria-label="Instagram"]').href = config.instagram_link || defaultConfig.instagram_link;
  document.querySelector('.social-links a[aria-label="WhatsApp"]').href = config.whatsapp_link || defaultConfig.whatsapp_link;
  document.querySelector('.social-links a[aria-label="LinkedIn"]').href = config.linkedin_link || defaultConfig.linkedin_link;
  document.querySelector('.social-links a[aria-label="GitHub"]').href = config.github_link || defaultConfig.github_link;


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
    ['linkedin_link', config.linkedin_link || defaultConfig.linkedin_link], 
    ['github_link', config.github_link || defaultConfig.github_link],
    
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
      btn.style.color = window.elementSdk?.config?.text_color || defaultConfig.text_color;
      btn.style.borderColor = window.elementSdk?.config?.accent_color || defaultConfig.accent_color; // Garante a cor da borda
    });
    pages.forEach(page => {
      page.classList.remove('active');
    });

    button.classList.add('active');
    const accentColor = window.elementSdk?.config?.accent_color || defaultConfig.accent_color;
    const secondaryTextColor = window.elementSdk?.config?.secondary_text_color || defaultConfig.secondary_text_color;
    button.style.background = accentColor;
    button.style.color = secondaryTextColor; // Texto escuro no botão ativo
    button.style.borderColor = accentColor; // Borda também amarela
    document.getElementById(targetPage).classList.add('active');
  });
});