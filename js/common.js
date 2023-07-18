const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused"); //클래스를 추가함
  // searchInputEl에다가 어떤 html의 속성을 지정할 때 사용
  searchInputEl.setAttribute("placeholder", "통합검색"); // html의 속성 : attribute
});
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); //현재 날짜를 뽑아내서 year를 반환
