window.addEventListener("load", function () {
    const viewBtn = this.document.querySelector("#view");
    const detialSection = this.document.querySelector("#detail");
    viewBtn.addEventListener("click", function () {
      detialSection.style.display = detialSection.style.display === "block" ? "none" : "block";
    });
    //   이미지 클릭시
    const cup = document.querySelector("#cup");
    const smallPick = document.querySelectorAll(".small");
    const descName = document.getElementById("desc-name");
    const descPrice = document.getElementById("desc-price");
    const descDelivery = document.getElementById("desc-delivery");
    const descPoints = document.getElementById("desc-points");
    const descRoasting = document.getElementById("desc-roasting");
    const detailOrigin = document.getElementById("detail-origin");
    const detailRegion = document.getElementById("detail-region");
    const detailFarm = document.getElementById("detail-farm");
    const detailAltitude = document.getElementById("detail-altitude");
    const detailVariety = document.getElementById("detail-variety");
    const detailProcess = document.getElementById("detail-process");
    const detailDescription = document.getElementById("detail-description");
    const flavorNote = document.getElementById("flavor-note");
    // 작은 이미지 클릭시
    smallPick.forEach(function (smallPic) {
      // console.log(smallPic);
      smallPic.addEventListener("click", function () {
        chagePic(this);
      });
    });
    // 작은이미지 클릭 시 바뀌는 함수
    function chagePic(element) {
      console.log(element);
      
      // 이미지 변경
      const newPic = element.src;
      cup.setAttribute("src" , newPic)
       // 정보변경
    descName.textContent = `상품명 : ${element.getAttribute("data-name")}`;
    descPrice.textContent = `판매가 : ${element.getAttribute("data-price")}`;
    descDelivery.textContent = `배송비 : ${element.getAttribute("data-delivery")}`;
    descPoints.textContent = `적립금 : ${element.getAttribute("data-points")}`;
    descRoasting.textContent = `로스팅 : ${element.getAttribute("data-roasting")}`;
    // 상세페이지 정보변경
    detailOrigin.textContent = `원산지 : ${element.getAttribute("data-origin")}`;
    detailRegion.textContent = `지 역 : ${element.getAttribute("data-region")}`;
    detailFarm.textContent = `농 장 : ${element.getAttribute("data-farm")}`;
    detailAltitude.textContent = `고 도 : ${element.getAttribute("data-altitude")}`;
    detailVariety.textContent = `품 종 : ${element.getAttribute("data-variety")}`;
    detailProcess.textContent = `가공법 : ${element.getAttribute("data-process")}`;
    flavorNote.textContent = `${element.getAttribute("data-flavornote")}`;
    detailDescription.textContent = `${element.getAttribute("data-description")}`;
    }
  });
  