let numbers = document.querySelectorAll(".numbers .info");
let submitButton = document.querySelector("button");
let selectedRating = null; // متغير لحفظ الرقم المختار

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    numbers.forEach((number) => {
      number.classList.remove("active");
    });

    number.classList.add("active");
    submitButton.classList.add("active");

    selectedRating = number.getAttribute("data-value");

    clickButton();
  });
});

function clickButton() {
  submitButton.addEventListener("click", () => {
    if (selectedRating) {
      document.querySelector(".rating-state").style.display = "none";
      document.querySelector(".result").textContent = selectedRating;
      document.querySelector(".thank-state").style.display = "block";
    }
  });
}
