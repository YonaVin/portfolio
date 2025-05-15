const translations = {
    en: {
      about_title: "About Me",
      about_text: "I'm a UX/UI Designer with 3+ years of experience and aspiring Front-End Developer creating intuitive, user-friendly digital experiences across web and mobile platforms. My skill set includes Figma, Adobe Creative Suite, HTML/CSS, and basic JavaScript. I'm currently deepening my knowledge of front-end development and actively learning new technologies to grow in this field. I focus on clean design, accessible interfaces, and seamless user journeys, aiming to build not just beautiful, but also functional and efficient digital products.",
      skills_title: "Skills",
      projects_title: "Projects",
      project1_desc: "Figma-based UI/UX design project.",
      project2_desc: "Responsive site using HTML/CSS/JS.",
      contact_title: "Contact",
      contact_text: "Feel free to reach out!",
    },
    ru: {
      about_title: "Обо мне",
      about_text: "Я UX/UI-дизайнер с более чем 3-летним опытом и начинающий Front-End-разработчик, создающий интуитивно понятные, удобные для пользователя цифровые интерфейсы на веб- и мобильных платформах. В мой набор навыков входят Figma, Adobe Creative Suite, HTML/CSS и базовый JavaScript. В настоящее время я углубляю свои знания в области front-end-разработки и активно изучаю новые технологии для роста в этой области. Я сосредоточен на чистом дизайне, доступных интерфейсах и бесшовных пользовательских путях, стремясь создавать не только красивые, но и функциональные и эффективные цифровые продукты.",
      skills_title: "Навыки",
      projects_title: "Проекты",
      project1_desc: "UI/UX проект, созданный в Figma.",
      project2_desc: "Адаптивный сайт на HTML/CSS/JS.",
      contact_title: "Контакты",
      contact_text: "Не стесняйтесь связаться со мной!",
    },
    ko: {
      about_title: "자기 소개",
      about_text: "저는 3년 이상의 경력을 가진 UX/UI 디자이너이자, 웹 및 모바일 플랫폼에서 직관적이고 사용자 친화적인 디지털 경험을 제작하는 프런트엔드 개발자를 꿈꾸고 있습니다. Figma, Adobe Creative Suite, HTML/CSS, 그리고 기본적인 JavaScript 활용 능력을 갖추고 있습니다. 현재 프런트엔드 개발에 대한 지식을 심화하고 있으며, 이 분야에서 성장하기 위해 새로운 기술을 적극적으로 배우고 있습니다. 깔끔한 디자인, 접근성 높은 인터페이스, 그리고 매끄러운 사용자 경험에 집중하여 아름다울 뿐만 아니라 기능적이고 효율적인 디지털 제품을 개발하고자 합니다.",
      skills_title: "기술",
      projects_title: "프로젝트",
      project1_desc: "피그마로 제작된 UI/UX 디자인 프로젝트.",
      project2_desc: "HTML/CSS/JS로 만든 반응형 웹사이트.",
      contact_title: "연락처",
      contact_text: "언제든지 연락 주세요!",
    }
  };
  
  function setLanguage(lang) {
    // Сохраняем выбранный язык в localStorage
    localStorage.setItem('selectedLanguage', lang);
  
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = translations[lang][key] || key;
    });
  }
  
  // При загрузке страницы устанавливаем язык из localStorage или ставим по умолчанию 'en'
  window.onload = () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    setLanguage(savedLang);
  };
  