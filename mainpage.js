const secondText = document.querySelector(".second-text");



const changeText = () => {
    setTimeout(() => {
        secondText.textContent = "software developer";
    }, 0);
    setTimeout(() => {
        secondText.textContent = "women coder & mum";
    }, 4000);
    setTimeout(() => {
        secondText.textContent = "software tester";
    }, 8000);

}
changeText();
setInterval(changeText, 12000);

