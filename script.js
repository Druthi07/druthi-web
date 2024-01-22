function validateSignupForm() {
    const uname = document.getElementById("uname").value;
    const pnumber = document.getElementById("pnumber").value;
    const email = document.getElementById("email").value;
    const psw = document.getElementById("psw").value;
    const confirmpassword = document.getElementById("confirmpassword").value;
  
    let isValid = true;
  
    // Clear any previous error messages
    clearErrorMessages();
  
    // Validate username
    if (uname.trim() === "") {
      setErrorMessage("uname-error", "Please enter a username.");
      isValid = false;
    }
  
    // Validate phone number (using a flexible pattern for international numbers)
    const phoneRegex = /^[+]?[\d]{10}}$/; // Adjust pattern as needed
    if (!phoneRegex.test(pnumber)) {
      setErrorMessage("pnumber-error", "Please enter a valid phone number.");
      isValid = false;
    }
  
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("email-error", "Please enter a valid email address.");
      isValid = false;
    }
  
    // Validate password
    if (psw.length < 8) {
      setErrorMessage("psw-error", "Password must be at least 8 characters long.");
      isValid = false;
    }
  
    // Validate confirm password
    if (psw !== confirmpassword) {
      setErrorMessage("confirmpassword-error", "Passwords do not match.");
      isValid = false;
    }
  
    return isValid;
  }
  
  function setErrorMessage(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = "block"; // Assuming error messages are initially hidden
  }
  
  function clearErrorMessages() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((message) => message.textContent = "");
  }
  