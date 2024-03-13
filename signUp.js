document.addEventListener("DOMContentLoaded", function() {
  const signUpForm = document.querySelector(".sign-up-form");
  const passwordInput = document.querySelector(".password");
  const password2Input = document.querySelector(".password2");
  const idInput = document.querySelector(".id");
  const emailInput = document.querySelector(".email");
  const nameInput = document.querySelector(".name");
  const userIdError = document.querySelector(".userid-error");
  const userPwError = document.querySelector(".userpw-error");
  const unmatchPwError = document.querySelector(".unmatch-pw");
  const userMailError = document.querySelector(".usermail-error");
  const userNickError = document.querySelector(".usernick-error");
  const erroridInput=document.querySelector(".errorid");

  signUpForm.addEventListener("submit", function(event) {
    event.preventDefault(); 

    if (passwordInput.value !== password2Input.value) {
      unmatchPwError.style.display = "block";
      password2Input.focus();
    } else {
      unmatchPwError.style.display = "none";
    }

    if (idInput.value === "") {
      userIdError.style.display = "block";
      idInput.focus();
    } else {
      userIdError.style.display = "none";
    }

    if (passwordInput.value === "") {
      userPwError.style.display = "block";
      passwordInput.focus();
    } else {
      userPwError.style.display = "none";
    }

    if (emailInput.value === "") {
      userMailError.style.display = "block";
      emailInput.focus();
    } else {
      userMailError.style.display = "none";
    }

    if (nameInput.value === "") {
      userNickError.style.display = "block";
      nameInput.focus();
    } else {
      userNickError.style.display = "none";
    }

  });
});
