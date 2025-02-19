window.addEventListener("load", function () {
    const btn = this.document.getElementById("btn");
    const addValue = this.document.getElementById("addValue");
    const result = this.document.getElementById("result");
    const allClear = this.document.getElementById("allClear");
    // 추가 버튼 클릭했을때
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const value = addValue.value.trim();
      // 입력창에 내용을 입력하지 않았을때
      if (value === "") {
        alert("내용을 입력하세요!");
        return; // 함수종료
      }
      // li만들기
      const list = document.createElement("li");
      // console.log(list);
      list.innerHTML = `
      ${value} <button class="del-btn">X</button>
      `;
      //
      result.insertBefore(list, result.firstChild);
      // 입력한 내용 빈배열 만들기
      addValue.value = "";
      // 입력창 포커스
      addValue.focus();
      // 삭제하기
      const delBtn = document.querySelector(".del-btn");
      delBtn.addEventListener("click", function (e) {
        e.target.parentElement.remove();
      });
      // 할일 완료하기
      list.addEventListener("click" ,function(){
          list.classList.toggle("completed")
      })
    });
  //   전체삭제
  allClear.addEventListener("click" , function(){
      if(result.innerHTML === ""){
          alert("삭제할 목록이 없습니다.")
      }else{
          result.innerHTML = ""
      }
  })
  });
  