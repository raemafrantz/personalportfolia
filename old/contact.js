




// const nameInput = document.getElementById("name");
// const emailInput = document.getElementById("email");
// const messageInput = document.getElementById("message");
// const errorNodes = document.querySelectorAll(".error");
// const successMessage = document.getElementById("success");
// const errorFlag = false;

// function validateForm() {
//     clearMessages();
//     clearSuccessMsg();

//     if (nameInput.value.length < 1) {
//         errorNodes[0].innerText = "Name cannot be blank";
//         nameInput.classList.add("error");
//         errorFlag = true;

//     }

//     if (!testEmail(emailInput.value)) {
//         errorNodes[1].innerText = "Enter a valid email address";
//         nameInput.classList.add("error");
//         errorFlag = true;
//     }

//     if (messageInput.value.length < 1) {
//         errorNodes[2].innerText = "Enter a valid message";
//         nameInput.classList.add("error");
//         errorFlag = true;
//     }

//     if (!errorFlag) {
//         successMessage.innerText = "Message send successfully"
//     }
// }

// function clearMessages() {
//     for (let i = 0; i < errorNodes.length; i++) {
//         errorNodes[i].innerText = "";
//     }
//     nameInput.classList.remove("error");
//     emailInput.classList.remove("error");
// }

// function clearSuccessMsg() {
//     successMessage.innerText = ""
// }

// function testEmail(email) {
//     let pattern = /\S+@\S+\.\S+/;
//     return pattern.test(email);
// }

