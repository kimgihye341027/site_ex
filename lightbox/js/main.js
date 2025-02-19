window.addEventListener("load", function () {
  let pics = this.document.querySelectorAll(".pic");
  let lightBox = this.document.querySelector("#lightBox");
  let lightBoxImg = this.document.querySelector("#lightboxImg");
  console.log(pics);
  // pics에 반복문
  for (let i = 0; i < pics.length; i++) {
    // pics[i].addEventListener("click" , function(){
    //     // alert(`확인 ${i} `)
    // })
    pics[i].addEventListener("click", showLightBox);
  }
  // 라이박스 열리고 닫히는 함수
  function showLightBox() {
    // console.log(this);

    let bigLocation = this.getAttribute("data-src");
    // console.log(bigLocation);
    console.log(lightBoxImg);

    lightBoxImg.setAttribute("src", bigLocation);
    // console.log(lightBoxImg);
    lightBox.style.display = "block";
  }
  lightBox.addEventListener("click", function () {
    lightBox.style.display = "none";
  });
});
