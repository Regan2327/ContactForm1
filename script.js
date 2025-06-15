document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectSelect = document.getElementById("subject");
    const messageInput = document.getElementById("message");
  
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const subjectError = document.getElementById("subjectError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");
  
    // Update message placeholder based on subject
    subjectSelect.addEventListener("change", () => {
      const placeholders = {
        general: "Ask us anything...",
        support: "Describe the issue you're facing...",
        feedback: "Share your thoughts...",
        careers: "Tell us why you’re a good fit..."
      };
      messageInput.placeholder = placeholders[subjectSelect.value] || "";
    });
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Reset errors
      [nameError, emailError, subjectError, messageError, successMessage].forEach(el => el.textContent = "");
  
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const subject = subjectSelect.value;
      const message = messageInput.value.trim();
      let isValid = true;
  
      if (name === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
      }
  
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


      if (email === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
      } else if (!emailPattern.test(email)) {
        emailError.textContent = "Invalid email format.";
        isValid = false;
      }
  
      if (subject === "") {
        subjectError.textContent = "Please select a subject.";
        isValid = false;
      }
  
      if (message === "") {
        messageError.textContent = "Message is required.";
        isValid = false;
      }
  
      if (isValid) {
        successMessage.textContent = "Your message has been submitted successfully!";
        form.reset();
        messageInput.placeholder = ""; // Clear dynamic placeholder
      }
    });
  });
  