const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");

buttonContainer.addEventListener("click", (event) => {
if (event.target === buttonContainer) {
    alert("Container clicked!");
  }
});

buttonChildContainer.addEventListener("click", (event) => {
  event.stopPropagation();
  alert("Child container clicked!");
});
