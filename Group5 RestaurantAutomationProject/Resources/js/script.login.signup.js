const signInBtn = document.getElementById("btn-overlay-signIn");
const signUpBtn = document.getElementById("btn-overlay-signUp");
const container = document.getElementById("main-container");
const firstForm = document.getElementById("form-signUp");
const secondForm = document.getElementById("form-signIn");

signInBtn.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
signUpBtn.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});


firstForm.addEventListener('submit', (e) => e.preventDefault());
secondForm.addEventListener('submit', (e) => e.preventDefault());
