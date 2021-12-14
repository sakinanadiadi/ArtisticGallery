const form = document.querySelector("input");
form.addEventListener("click", function () {
  console.log("button clicked");
  let changeColor = document.body;
  changeColor.classList.toggle("lightMode");
});
