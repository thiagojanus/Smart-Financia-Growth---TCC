const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    const header = accordion.querySelector('.accordion-header');

    header.addEventListener('click', () => {
        const body = accordion.querySelector('.accordion-body');

        // Fecha outros acordeões
        accordions.forEach(otherAccordion => {
            const otherBody = otherAccordion.querySelector('.accordion-body');
            const otherHeader = otherAccordion.querySelector('.accordion-header');

            if (otherBody !== body) {
                otherBody.classList.remove('active');
                otherHeader.classList.remove('active'); // Remove active do cabeçalho
            }
        });

        // Alterna o acordeão clicado
        body.classList.toggle('active');
        header.classList.toggle('active'); // Adiciona ou remove active do cabeçalho
    });
});

const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});

