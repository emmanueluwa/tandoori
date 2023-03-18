import "./style.css";

//grab all the things we need
const button = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

//add event listeners
button.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// close for elsewhere clicked
// document.addEventListener("click", (e) => {
//   //selecting element
//   let target = e.target;

//   if (target != button && target != menu && target.closest("menu") != menu) {
//     menu.classList.toggle("hidden");
//   }
// });
