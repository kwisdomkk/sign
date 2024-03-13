document.addEventListener("DOMContentLoaded", function() {
  const signInForm = document.querySelector(".sign-in-form");
  const idInput = document.querySelector(".id");
  const passwordInput = document.querySelector(".password");
  const idError = document.querySelector(".id_error");
  const pwError = document.querySelector(".pw_error");

  signInForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (idInput.value === "") {
      idError.style.display = "block";
      idInput.focus();
    } else {
      idError.style.display = "none";
    }

    if (passwordInput.value === "") {
      pwError.style.display = "block";
      passwordInput.focus();
    } else {
      pwError.style.display = "none";
    }
  });
});
  