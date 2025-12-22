$(document).ready(function () {
  $("#loginForm").on("submit", function (event) {
    event.preventDefault();

    let username = $("#username").val().trim();
    let email = $("#email").val().trim();
    let password = $("#password").val();

    let isValid = true;

    // Username
    if (username === "") {
      $("#usernameError").text("Username cannot be empty").css("color", "red");
      isValid = false;
    } else {
      $("#usernameError").text("");
    }

    // Password length
    if (password.length < 8) {
      $("#passwordError").text("Password length cannot be less than 8").css("color", "red");
      isValid = false;
    } else {
      $("#passwordError").text("");
    }

    // Email pattern
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(email)) {
      $("#emailError").text("Invalid email format").css("color", "red");
      isValid = false;
    } else {
      $("#emailError").text("");
    }

    // If valid
    if (isValid) {
      alert("Form submitted successfully");

      // clear inputs
      $username.empty();
      $("#username").val("");
      $("#email").val("");
      $("#password").val("");
    }
  });
});
