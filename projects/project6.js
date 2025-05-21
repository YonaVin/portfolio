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
      projectTitle: "Datamon",
      projectDescription: "Data extraction, analysis, visualization, quality control, ML modeling, data clustering, etc. Provide data environment construction solutions.",
      buildingTitle: "Building a data environment",
      buildingList: [
        "Data Quality Management",
        "UI/UX optimization",
        "Data analysis",
        "Data Clustering",
        "ML modeling",
        "Data visualization",
        "Data extraction"
      ],
      designHighlightsTitle: "Design Highlights",
      designHighlightsText: "Clean, minimal dashboard design in warm blues and whites. Soft blue accents, clear typography, spacious layout. Modern, calm, and user-friendly.",
      linksTitle: "Links",
      websiteText: "Website:",
      websiteLinkText: "Datamon",
      galleryTitle: "Gallery",
      footerText: "© 2025 Alyona | All rights reserved"
    },
    ru: {
      projectTitle: "Datamon",
      projectDescription: "Извлечение данных, анализ, визуализация, контроль качества, моделирование машинного обучения, кластеризация данных и др. Предоставление решений для построения среды данных.",
      buildingTitle: "Построение среды данных",
      buildingList: [
        "Управление качеством данных",
        "Оптимизация UI/UX",
        "Анализ данных",
        "Кластеризация данных",
        "Моделирование машинного обучения",
        "Визуализация данных",
        "Извлечение данных"
      ],
      designHighlightsTitle: "Основные моменты дизайна",
      designHighlightsText: "Чистый, минималистичный дизайн панели управления в теплых синих и белых тонах. Мягкие голубые акценты, четкая типографика, просторная компоновка. Современно, спокойно и удобно для пользователя.",
      linksTitle: "Ссылки",
      websiteText: "Веб-сайт:",
      websiteLinkText: "Datamon",
      galleryTitle: "Галерея",
      footerText: "© 2025 Алена | Все права защищены"
    },
    ko: {
      projectTitle: "Datamon",
      projectDescription: "데이터 추출, 분석, 시각화, 품질 관리, 머신러닝 모델링, 데이터 클러스터링 등 데이터 환경 구축 솔루션 제공.",
      buildingTitle: "데이터 환경 구축",
      buildingList: [
        "데이터 품질 관리",
        "UI/UX 최적화",
        "데이터 분석",
        "데이터 클러스터링",
        "머신러닝 모델링",
        "데이터 시각화",
        "데이터 추출"
      ],
      designHighlightsTitle: "디자인 주요 내용",
      designHighlightsText: "따뜻한 블루와 화이트 톤의 깔끔하고 미니멀한 대시보드 디자인. 부드러운 블루 포인트, 명확한 타이포그래피, 넓은 레이아웃. 현대적이고 차분하며 사용자 친화적입니다.",
      linksTitle: "링크",
      websiteText: "웹사이트:",
      websiteLinkText: "Datamon",
      galleryTitle: "갤러리",
      footerText: "© 2025 알료나 | 모든 권리 보유"
    }
  };
  
  function setLanguage(lang) {
    // Заголовок h1
    document.querySelector("h1").textContent = translations[lang].projectTitle;
  
    // Описание проекта (параграф с классом project-description)
    document.querySelector(".project-description").textContent = translations[lang].projectDescription;
  
    // Заголовок "Building a data environment"
    document.querySelectorAll("h2")[0].textContent = translations[lang].buildingTitle;
  
    // Список под этим заголовком
    const listItems = document.querySelectorAll("h2")[0].nextElementSibling.querySelectorAll("li");
    translations[lang].buildingList.forEach((text, i) => {
      if (listItems[i]) {
        listItems[i].textContent = text;
      }
    });
  
    // Заголовок "Design Highlights"
    document.querySelectorAll("h2")[1].textContent = translations[lang].designHighlightsTitle;
  
    // Параграф после этого заголовка
    document.querySelectorAll("h2")[1].nextElementSibling.textContent = translations[lang].designHighlightsText;
  
    // Заголовок "Links"
    document.querySelectorAll("h2")[2].textContent = translations[lang].linksTitle;
  
    // Ли с сайтом
    const websiteLi = document.querySelectorAll("h2")[2].nextElementSibling;
    websiteLi.innerHTML = `${translations[lang].websiteText} <a href="https://www.driven.co.kr/page/sub02_5" target="_blank">${translations[lang].websiteLinkText}</a>`;
  
    // Заголовок "Gallery"
    document.querySelectorAll("h2")[3].textContent = translations[lang].galleryTitle;
  
    // Футер
    document.querySelector("footer p").textContent = translations[lang].footerText;
  }
  
  // По умолчанию английский
  setLanguage("en");
  