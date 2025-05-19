const translations = {
    en: {
      about_title: "About Me",
      about_text: "I'm a UX/UI Designer with 3+ years of experience and aspiring Front-End Developer creating intuitive, user-friendly digital experiences across web and mobile platforms. My skill set includes Figma, Adobe Creative Suite, HTML/CSS, and basic JavaScript. I'm currently deepening my knowledge of front-end development and actively learning new technologies to grow in this field. I focus on clean design, accessible interfaces, and seamless user journeys, aiming to build not just beautiful, but also functional and efficient digital products.",
      skills_title: "Skills",
      projects_title: "Projects",
      project1_desc: "A personal site to showcase my work as a designer and developer.",
      project2_desc: "Responsive landing page with smooth scroll and dark mode.",
      project3_desc: "A JavaScript-based task tracker with local storage support.",
      contact_title: "Contact",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
    },
    ru: {
      about_title: "Обо мне",
      about_text: "Я UX/UI-дизайнер с более чем 3-летним опытом и начинающий Front-End-разработчик, создающий интуитивно понятные, удобные для пользователя цифровые интерфейсы на веб- и мобильных платформах. В мой набор навыков входят Figma, Adobe Creative Suite, HTML/CSS и базовый JavaScript. В настоящее время я углубляю свои знания в области front-end-разработки и активно изучаю новые технологии для роста в этой области. Я сосредоточен на чистом дизайне, доступных интерфейсах и бесшовных пользовательских путях, стремясь создавать не только красивые, но и функциональные и эффективные цифровые продукты.",
      skills_title: "Навыки",
      projects_title: "Проекты",
      project1_desc: "Личный сайт для демонстрации моих работ как дизайнера и разработчика.",
      project2_desc: "Адаптивная целевая страница с плавной прокруткой и темным режимом.",
        project3_desc: "Трекер задач на JavaScript с поддержкой локального хранилища.",
      contact_title: "Контакты",
      name: "Имя",
    email: "Электронная почта",
        message: "Сообщение",
        send: "Отправить",
    },
    ko: {
      about_title: "자기 소개",
      about_text: "저는 3년 이상의 경력을 가진 UX/UI 디자이너이자, 웹 및 모바일 플랫폼에서 직관적이고 사용자 친화적인 디지털 경험을 제작하는 프런트엔드 개발자를 꿈꾸고 있습니다. Figma, Adobe Creative Suite, HTML/CSS, 그리고 기본적인 JavaScript 활용 능력을 갖추고 있습니다. 현재 프런트엔드 개발에 대한 지식을 심화하고 있으며, 이 분야에서 성장하기 위해 새로운 기술을 적극적으로 배우고 있습니다. 깔끔한 디자인, 접근성 높은 인터페이스, 그리고 매끄러운 사용자 경험에 집중하여 아름다울 뿐만 아니라 기능적이고 효율적인 디지털 제품을 개발하고자 합니다.",
      skills_title: "기술",
      projects_title: "프로젝트",
      project1_desc: "디자이너 및 개발자로서의 작업을 보여주는 개인 사이트.",
      project2_desc: "반응형 랜딩 페이지로 부드러운 스크롤과 다크 모드 기능을 갖추고 있습니다.",
        project3_desc: "로컬 스토리지 지원이 포함된 JavaScript 기반의 작업 추적기.",
      contact_title: "연락처",
      name: "이름",
        email: "이메일",
        message: "메시지",
        send: "보내기",
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
  