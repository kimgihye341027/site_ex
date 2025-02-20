window.addEventListener("load", function () {
  const popupBtnLinks = document.querySelectorAll(".popup-btn .inner a");
  const popupBtn = document.querySelector(".popup-btn");
  const popupText = document.querySelector(".pop-text");

  popupBtnLinks.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      popupBtnLinks.forEach(function (link) {
        link.classList.toggle("active");
      });
    });
  });

  popupBtn.addEventListener("click", function () {
    popupText.style.display = popupText.style.display === "none" ? "block" : "none";
  });

  // 메뉴 탭 기능
  const tabTitle = document.querySelectorAll(".tab-nav li a");
  tabTitle.forEach(function (element) {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      tabTitle.forEach(function (item) {
        item.classList.remove("active");
      });
      this.classList.add("active");

      const tabItems = document.querySelectorAll(".tabitem");
      tabItems.forEach(function (tab) {
        tab.style.display = "none";
      });

      const target = element.getAttribute("href");
      document.querySelector(target).style.display = "block";
    });
  });

  tabTitle[0].click()
});
