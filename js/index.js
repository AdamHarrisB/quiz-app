const bodyElement = document.querySelector('[data-js="body"]');


const toggleMode = document.querySelector('[data-js="toggle-button"]');
toggleMode.addEventListener("click", () => {bodyElement.classList.toggle("dark");});

const checkbox = document.querySelector('[data-js="bookmark"]');

checkbox.addEventListener("input", (event) => {

});

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
});