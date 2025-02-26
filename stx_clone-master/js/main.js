window.onload = function () {
    // 모달창 닫기
    const modal = document.querySelector(".modal-wrap");
    const modalClose = document.querySelector(".modal-close");
    modalClose.addEventListener("click", function () {
      modal.style.display = "none";
    });
    // 비주얼 버튼
    const visualButton = document.querySelector(".visual-bt");
    visualButton.addEventListener("click", function () {
      scrollToSection("#business");
    });
    // scrollToSection()
    function scrollToSection(sectionId) {
      console.log(sectionId);
  
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    //   gotop버튼
    const topBtn = document.querySelector(".top-btn");
    topBtn.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };
  