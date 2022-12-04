// const nameInput = document.getElementById("name");
// const emailInput = document.getElementById("email");
// const messageInput = document.getElementById("message");
// const errorNodes = document.querySelectorAll(".error");

// function validateForm() {
//     console.log("helepppasf");
// }

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    }

    )
}
);


const hiddenElements = document.querySelectorAll(".hidden");
const profilePic = document.querySelectorAll(".profile-pic");
hiddenElements.forEach((el) => observer.observe(el));
profilePic.forEach((el) => observer.observe(el));
