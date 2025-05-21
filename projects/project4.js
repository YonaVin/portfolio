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
      projectTitle: "Price Golf Market",
      projectDescription: "Price Golf is a brokerage service between sellers and buyers, and strives to increase trust between sellers and customers through fair transactions, strict company selection, and management of products for sale.",
      designHighlightsTitle: "Design Highlights",
      designHighlightsText: "While working at Price Golf, the interface for the iOS app and the mobile version of the website was improved.",
      linksTitle: "Links",
      downloadText: "Download on:",
      footerText: "© 2025 Alyona | All rights reserved"
    },
    ru: {
      projectTitle: "Price Golf Market",
      projectDescription: "Price Golf — это брокерская служба между продавцами и покупателями, стремящаяся повысить доверие через честные сделки, строгий отбор компаний и управление товарами.",
      designHighlightsTitle: "Основные моменты дизайна",
      designHighlightsText: "Во время работы в Price Golf был улучшен интерфейс iOS-приложения и мобильной версии сайта.",
      linksTitle: "Ссылки",
      downloadText: "Скачать на:",
      footerText: "© 2025 Алена | Все права защищены"
    },
    ko: {
      projectTitle: "프라이스 골프 마켓",
      projectDescription: "프라이스 골프는 판매자와 구매자 간 중개 서비스로서 공정한 거래, 엄격한 회사 선정 및 제품 관리를 통해 신뢰를 높이고자 합니다.",
      designHighlightsTitle: "디자인 하이라이트",
      designHighlightsText: "프라이스 골프에서 근무하는 동안 iOS 앱과 모바일 웹사이트 인터페이스가 개선되었습니다.",
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
  
    const downloadLi = h2s[1].nextElementSibling;
    if (downloadLi) {
      downloadLi.firstChild.textContent = translations[lang].downloadText + " ";
    }
  
    document.querySelector("footer p").textContent = translations[lang].footerText;
  }
  
  // По умолчанию — английский
  setLanguage("en");
  
  