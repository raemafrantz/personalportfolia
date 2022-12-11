const frontCard = document.querySelector(".inner-card");
const frontCard2 = document.querySelector(".inner-card-2");

// an event listener is added for click to flip each of the card
frontCard.addEventListener("click", () => {
    frontCard.classList.toggle("is-flipped");
});
frontCard2.addEventListener("click", () => {
    frontCard2.classList.toggle("is-flipped");
});

