const H2 = document.querySelector(".h2");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  setTimeout(() => {
    H2.textContent = "Tung Kham";
  }, 2000);
  setTimeout(() => {
    H2.textContent = "";
  }, 4000);
});
