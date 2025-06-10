  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    const fname = document.getElementById("fname").value.trim();
    if (fname === "") {
      document.getElementById("fname--error").innerText = "First name is required.";
      isValid = false;
    } else {
      document.getElementById("fname--error").innerText = "";
    }

    const lname = document.getElementById("lname").value.trim();
    if (lname === "") {
      document.getElementById("lname--error").innerText = "Last name is required.";
      isValid = false;
    } else {
      document.getElementById("lname--error").innerText = "";
    }

    const company = document.getElementById("company").value.trim();
    if (company === "") {
      document.getElementById("company--error").innerText = "Company is required.";
      isValid = false;
    } else {
      document.getElementById("company--error").innerText = "";
    }


    const email = document.getElementById("email").value.trim();
    const emailPattern = /\S+@\S+\.\S+/;
    if (email === "") {
      document.getElementById("email--error").innerText = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById("email--error").innerText = "Email format is invalid.";
      isValid = false;
    } else {
      document.getElementById("email--error").innerText = "";
    }

    const phone = document.getElementById("phone").value.trim();
    if (phone === "") {
      document.getElementById("phone--error").innerText = "Phone number is required.";
      isValid = false;
    } else {
      document.getElementById("phone--error").innerText = "";
    }

    const message = document.getElementById("message").value.trim();
    if (message === "") {
      document.getElementById("message--error").innerText = "Message is required.";
      isValid = false;
    } else {
      document.getElementById("message--error").innerText = "";
    }

    const policy = document.getElementById("policyid").checked;
    if (!policy) {
      document.getElementById("policy--error").innerText = "You must agree to the privacy policy.";
      isValid = false;
    } else {
      document.getElementById("policy--error").innerText = "";
    }

    if (isValid) {
      alert("Form submitted successfully!");
      this.submit(); 
    }
  });

