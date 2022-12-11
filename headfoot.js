const { createApp } = Vue

//this vue app is used for nav bar
createApp({
    data() {
        return {
            home: "index.html",
            about: "about.html",
            experience: "experience.html",
            services: "services.html",
            contact: "contact.html",
            projects: "projects.html",

        }

    }

}).mount('#app')

//this vue app is used in the footer
createApp({
    data() {
        return {
            footer: "created by reama frantz ❤️ all rights reserved",
        }
    }
}).mount('#app2')

//this vue app is used to validate the contact me form and set error or success message
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
