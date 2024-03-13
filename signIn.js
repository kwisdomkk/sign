document.addEventListener("DOMContentLoaded", function() {
  const signInForm = document.querySelector(".sign-in-form");
  const idInput = document.querySelector(".id");
  const passwordInput = document.querySelector(".password");
  const idError = document.querySelector(".id_error");
  const pwError = document.querySelector(".pw_error");

  signInForm.addEventListener("submit", function(event) {
    event.preventDefault(); // 폼 기본 동작 방지

    // 아이디 또는 비밀번호가 입력되지 않았을 경우
    if (idInput.value.trim() === "") {
      idError.style.display = "block";
      idInput.focus();
    } else {
      idError.style.display = "none";
    }

    if (passwordInput.value.trim() === "") {
      pwError.style.display = "block";
      passwordInput.focus();
    } else {
      pwError.style.display = "none";
    }
  });
});
  