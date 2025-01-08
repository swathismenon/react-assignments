document.addEventListener("DOMContentLoaded", function () {
   
    document.querySelector("label[for='name']").textContent = "Full Name:";
    document.querySelector("label[for='email']").textContent = "Email Address:";
    document.querySelector("label[for='phone']").textContent = "Contact Number:";
    document.querySelector("label[for='message']").textContent = "Your Message:";
    document.querySelector("label[for='options']").textContent = "Select an Option:";
  
   
    const form = document.querySelector("form");
    form.style.margin = "50px auto";
    form.style.padding = "30px";
    form.style.width = "400px";
    form.style.borderRadius = "10px";
    form.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
    form.style.backgroundColor = "#f8f9fa";
    form.style.fontSize = "18px";
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Form submitted!");
    });
  
    
    const inputFields = document.querySelectorAll("input, textarea, select");
    inputFields.forEach(function (input) {
      input.style.border = "1px solid #ced4da";
      input.style.padding = "10px";
      input.style.borderRadius = "5px";
      input.style.fontSize = "16px";
      input.style.width = "100%";
      input.style.boxSizing = "border-box";
      input.style.marginBottom = "15px";
    });
  
    
    const radioInputs = document.querySelectorAll("input[type='radio']");
    radioInputs.forEach(function (radioInput) {
      radioInput.style.marginRight = "10px";
      radioInput.style.cursor = "pointer";
    });
  
    
    const submitBtn = document.querySelector("input[type='submit']");
    submitBtn.style.borderRadius = "5px";
    submitBtn.style.cursor = "pointer";
    submitBtn.style.border = "1px solid #007bff";
    submitBtn.style.fontSize = "16px";
    submitBtn.style.padding = "10px 20px";
    submitBtn.style.backgroundColor = "#007bff";
    submitBtn.style.color = "white";
    submitBtn.style.transition = "background-color 0.3s ease";
    submitBtn.addEventListener("mouseover", function () {
      submitBtn.style.backgroundColor = "#0056b3";
    });
    submitBtn.addEventListener("mouseout", function () {
      submitBtn.style.backgroundColor = "#007bff";
    });
  });
  