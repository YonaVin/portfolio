const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".project-gallery img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }});

  const translations = {
    en: {
      projectTitle: "TEACH-IN",
      projectDescription: "Online lecture hall, which contains more than 540 educational courses from the natural science faculties of Moscow State University. M. V. Lomonosov.",
      projectGoalTitle: "Project goal",
      projectGoalText: "Develop a design for a mobile application that would provide convenient access to lecture courses from mobile devices and provide the ability to view materials offline.",
      designHighlightsTitle: "Design Highlights",
      designHighlightsText: "Was part of this stage, an analysis of the Customer’s existing web service was carried out. During design development, the existing visual style of the site was transferred to the mobile application to maintain continuity. A design for the iPad was designed and developed separately to make using the application on the tablet even more convenient.",
      linksTitle: "Links",
      downloadText: "Download on:"
    },
    ru: {
      projectTitle: "TEACH-IN",
      projectDescription: "Онлайн-лекторий, содержащий более 540 образовательных курсов естественных факультетов Московского государственного университета им. М. В. Ломоносова.",
      projectGoalTitle: "Цель проекта",
      projectGoalText: "Разработать дизайн мобильного приложения, обеспечивающего удобный доступ к лекциям с мобильных устройств и возможность просмотра материалов офлайн.",
      designHighlightsTitle: "Основные моменты дизайна",
      designHighlightsText: "На этом этапе проводился анализ существующего веб-сервиса заказчика. При разработке дизайна существующий визуальный стиль сайта был перенесён в мобильное приложение для сохранения целостности. Отдельно был разработан дизайн для iPad для удобства использования на планшете.",
      linksTitle: "Ссылки",
      downloadText: "Скачать:"
    },
    ko: {
      projectTitle: "TEACH-IN",
      projectDescription: "모스크바 국립대학교 자연과학부에서 제공하는 540개 이상의 교육 과정을 포함하는 온라인 강의실입니다.",
      projectGoalTitle: "프로젝트 목표",
      projectGoalText: "모바일 기기에서 강의에 편리하게 접근하고 오프라인으로 자료를 볼 수 있는 모바일 앱 디자인을 개발했습니다.",
      designHighlightsTitle: "디자인 주요 내용",
      designHighlightsText: "이 단계에서는 고객의 기존 웹 서비스를 분석했습니다. 디자인 개발 중 기존 사이트의 시각 스타일을 모바일 앱에 적용하여 일관성을 유지했습니다. 태블릿 사용을 위해 아이패드용 디자인도 별도로 개발했습니다.",
      linksTitle: "링크",
      downloadText: "다운로드:"
    }
  };
  
  function setLanguage(lang) {
    document.querySelector("h1").textContent = translations[lang].projectTitle;
    document.querySelector(".project-description").textContent = translations[lang].projectDescription;
    document.querySelector("h2:nth-of-type(1)").textContent = translations[lang].projectGoalTitle;
    document.querySelector("h2:nth-of-type(1)").nextElementSibling.textContent = translations[lang].projectGoalText;
    document.querySelector("h2:nth-of-type(2)").textContent = translations[lang].designHighlightsTitle;
    document.querySelector("h2:nth-of-type(2)").nextElementSibling.textContent = translations[lang].designHighlightsText;
    document.querySelector("h2:nth-of-type(3)").textContent = translations[lang].linksTitle;
  
    // Текст в li с ссылками (если у тебя там один li, он первый после заголовка Links)
    const linksLi = document.querySelector("h2:nth-of-type(3)").nextElementSibling;
    // меняем только текст "Download on:" или "Скачать:" и оставляем ссылки
    linksLi.childNodes[0].nodeValue = translations[lang].downloadText + " ";
  }
  
  // Навесим слушатели на кнопки переключения языка
  document.querySelectorAll(".language-switcher button").forEach(button => {
    button.addEventListener("click", () => {
      setLanguage(button.getAttribute("data-lang"));
    });
  });
  
  // По умолчанию английский
  setLanguage("en");
  