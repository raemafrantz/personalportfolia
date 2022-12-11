const { createApp } = Vue

createApp({
    data() {
        return {
            home: "mainpage.html",
            about: "about.html",
            experience: "newexperience.html",
            services: "newservices.html",
            contact: "contact.html",
            projects: "projects.html"
        }
    }
}).mount('#app')

createApp({
    data() {
        return {
            footer: "created by reama frantz ❤️ all rights reserved",
        }
    }
}).mount('#app2')

createApp({
    data() {
        return {
            name: "",
            email: "",
            message: "",
            nameError: false,
            emailError: false,
            messageError: false,
            success: false
        }
    },
    methods: {
        processForm() {
            console.log(this.name + this.email)
        },
        validateName() {
            if (this.name.length < 1) {
                this.nameError = true;
            } else {
                this.nameError = false;
            }
        },

        validateEmail() {
            if (!testEmail(this.email)) {
                this.emailError = true;
            } else {
                this.emailError = false;
            }
        },
        validateMessage() {
            if (this.message.length < 1) {
                this.messageError = true;
            } else {
                this.messageError = false;
            }
        },
        submitSuccess() {

            if (!this.nameError && !this.emailError && !this.messageError) {
                this.success = true;
            } else {
                this.success = false;
            }
        }

    }
}).mount('#app3');

function testEmail(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}
