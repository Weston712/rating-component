const btnRating = document.querySelectorAll(".wrapper__button__color");
const btnSubmit = document.querySelector(".wrapper__button__submit");
const selectedRating = document.querySelector(".wrapper__selectedRating__text");

btnRating.forEach((item) => {
  item.addEventListener("click", btnClickRating);
});

function btnClickRating() {
  let target = this.textContent;
  console.log(target);
  btnRating.forEach((elem) => elem.classList.remove("active"));
  this.classList.add("active");

  selectedRating.innerHTML = `You selected ${target} out of 5`;
}

btnSubmit.addEventListener("click", () => {
  let wrapper = document.querySelector(".wrapper");
  let app2 = document.querySelector(".app2");
  let wrapperDysplay = getComputedStyle(wrapper).display;
  if (wrapperDysplay === "block") {
    wrapper.classList.add("active__wrapper");
    app2.classList.remove("app__remove");
    app2.classList.add("active_app2");
  }
});
