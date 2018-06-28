$(document).ready(function () {
  // Getting references to our form and input
  const userInput = $("input#user-input");
  const passwordInput = $("input#password-input");

  // When the signup button is clicked, we validate the email and password are not blank
  $("#signup").on("click", function (event) {
    if ($('#isNewUser').prop('checked')) {
      const userData = {
        name: userInput.val().trim(),
        password: passwordInput.val().trim()
      };
      console.log(userData);
      if (!userData.name || !userData.password) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(userData.name, userData.password);
      userInput.val("");
      passwordInput.val("");
    } else {
      console.log('Log In Here');
    }
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors






    function signUpUser(name, password) {
      $.post("/api/signup", {
        name: name,
        password: password
      }).then(() => {
        location.reload();
      });
    }


});
});