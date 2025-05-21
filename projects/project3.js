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
      projectTitle: "Studio 21",
      projectDescription: "Russian youth music radio station dedicated to hip-hop culture",
      designHighlightsTitle: "Design Highlights",
      designHighlightsText: "Develop a mobile application design for listening to the STUDIO 21 radio station live, podcasts, as well as for viewing current news from the world of hip-hop on iOS and Android platforms",
      linksTitle: "Links",
      downloadText: "Download on:",
      footerText: "© 2025 Alyona | All rights reserved"
    },
    ru: {
      projectTitle: "Студио 21",
      projectDescription: "Российская молодежная музыкальная радиостанция, посвящённая хип-хоп культуре",
      designHighlightsTitle: "Основные моменты дизайна",
      designHighlightsText: "Разработка дизайна мобильного приложения для прослушивания радиостанции STUDIO 21 в прямом эфире, подкастов, а также просмотра актуальных новостей из мира хип-хопа на платформах iOS и Android",
      linksTitle: "Ссылки",
      downloadText: "Скачать на:",
      footerText: "© 2025 Алена | Все права защищены"
    },
    ko: {
      projectTitle: "스튜디오 21",
      projectDescription: "힙합 문화에 전념하는 러시아 청소년 음악 라디오 방송국",
      designHighlightsTitle: "디자인 하이라이트",
      designHighlightsText: "iOS 및 Android 플랫폼에서 STUDIO 21 라디오 방송국 라이브, 팟캐스트 청취 및 힙합 세계의 최신 뉴스를 볼 수 있는 모바일 애플리케이션 디자인 개발",
      linksTitle: "링크",
      downloadText: "다운로드:",
      footerText: "© 2025 알료나 | 모든 권리 보유"
    }
  };
  
  function setLanguage(lang) {
    document.querySelector("h1").textContent = translations[lang].projectTitle;
    document.querySelector(".project-description").textContent = translations[lang].projectDescription;
  
    const h2s = document.querySelectorAll("h2");
    h2s[0].textContent = translations[lang].designHighlightsTitle;
    h2s[1].textContent = translations[lang].linksTitle;
  
    // Меняем текст перед ссылками на загрузку
    const downloadLi = h2s[1].nextElementSibling;
    if (downloadLi) {
      // Внутри li первый текст (Download on:) меняем
      downloadLi.firstChild.textContent = translations[lang].downloadText + " ";
    }
  
    document.querySelector("footer p").textContent = translations[lang].footerText;
  }
  
  // По умолчанию английский
  setLanguage("en");
  