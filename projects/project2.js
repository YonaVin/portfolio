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
      projectTitle: "SevenLuck Casino",
      projectDescription: "SevenLuck Casino, operated by Grand Korean Leisure (a subsidiary of the Korean Tourism Organization), is one of Korea’s leading casinos for foreigners. The company approached us for a complete design rebrand and the development of a new set of digital products.",
      contributionsTitle: "My Contributions",
      contributionsList: [
        "UI/UX design for a casino tablet app and mobile app",
        "Design and frontend development for an employee service system",
        "Creation of the Mypass app – an electronic passport for Korean and foreign guests"
      ],
      designHighlightsTitle: "Design Highlights",
      designHighlightsText: "All designs were developed to align with the casino’s branding and client requirements. The tablet interface supports multiple languages and ensures usability for international guests. The Mypass application visually reflects a real passport, serving as a digital ID. The internal service program for employees was redesigned for a cleaner, more intuitive user experience.",
      galleryTitle: "Gallery",
      footerText: "© 2025 Alyona | All rights reserved"
    },
    ru: {
      projectTitle: "Казино SevenLuck",
      projectDescription: "Казино SevenLuck, управляемое компанией Grand Korean Leisure (дочерняя компания Корейской туристической организации), является одним из ведущих казино Кореи для иностранцев. Компания обратилась к нам за полным ребрендингом и разработкой нового набора цифровых продуктов.",
      contributionsTitle: "Мои вкладки",
      contributionsList: [
        "UI/UX дизайн для планшетного и мобильного приложения казино",
        "Дизайн и фронтенд-разработка системы обслуживания сотрудников",
        "Создание приложения Mypass — электронного паспорта для корейских и иностранных гостей"
      ],
      designHighlightsTitle: "Основные моменты дизайна",
      designHighlightsText: "Все дизайны разработаны в соответствии с брендом казино и требованиями клиента. Интерфейс планшета поддерживает несколько языков и обеспечивает удобство для международных гостей. Приложение Mypass визуально напоминает настоящий паспорт и служит цифровым удостоверением личности. Внутренняя сервисная программа для сотрудников была переработана для более чистого и интуитивно понятного пользовательского опыта.",
      galleryTitle: "Галерея",
      footerText: "© 2025 Алена | Все права защищены"
    },
    ko: {
      projectTitle: "세븐럭 카지노",
      projectDescription: "세븐럭 카지노는 그랜드 코리안 레저(한국관광공사 자회사)에서 운영하며, 외국인을 위한 한국의 대표 카지노 중 하나입니다. 회사는 완전한 디자인 리브랜딩과 새로운 디지털 제품 개발을 요청했습니다.",
      contributionsTitle: "내 기여",
      contributionsList: [
        "카지노 태블릿 앱 및 모바일 앱 UI/UX 디자인",
        "직원 서비스 시스템 디자인 및 프론트엔드 개발",
        "한국 및 외국인 고객을 위한 전자 여권인 Mypass 앱 제작"
      ],
      designHighlightsTitle: "디자인 하이라이트",
      designHighlightsText: "모든 디자인은 카지노의 브랜드와 고객 요구 사항에 맞게 개발되었습니다. 태블릿 인터페이스는 다국어를 지원하며 국제 고객의 사용성을 보장합니다. Mypass 애플리케이션은 실제 여권을 시각적으로 반영하여 디지털 신분증 역할을 합니다. 직원용 내부 서비스 프로그램은 더 깔끔하고 직관적인 사용자 경험을 위해 재설계되었습니다.",
      galleryTitle: "갤러리",
      footerText: "© 2025 알료나 | 모든 권리 보유"
    }
  };
  
  function setLanguage(lang) {
    document.querySelector("h1").textContent = translations[lang].projectTitle;
  
    document.querySelector(".project-description").textContent = translations[lang].projectDescription;
  
    document.querySelectorAll("h2")[0].textContent = translations[lang].contributionsTitle;
  
    const contributionsListItems = document.querySelectorAll("h2")[0].nextElementSibling.querySelectorAll("li");
    translations[lang].contributionsList.forEach((text, i) => {
      if (contributionsListItems[i]) {
        contributionsListItems[i].textContent = text;
      }
    });
  
    document.querySelectorAll("h2")[1].textContent = translations[lang].designHighlightsTitle;
  
    document.querySelectorAll("h2")[1].nextElementSibling.textContent = translations[lang].designHighlightsText;
  
    document.querySelectorAll("h2")[2].textContent = translations[lang].galleryTitle;
  
    document.querySelector("footer p").textContent = translations[lang].footerText;
  }
  
  // Устанавливаем английский по умолчанию
  setLanguage("en");
  