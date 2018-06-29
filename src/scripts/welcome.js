// added Jquery library
const $ = require("jquery")

const buildWelcomeObject = Object.create({}, {
            buildWelcome: {
                value: () => {

                    // Selects the main div class .div--container on the index
                    const divRef = document.querySelector(".div--container");
                    console.log("welcome")
                    //created a div and gave it the class of div-welcome
                    const $divWelcome = $("<div>").addClass("div-Welcome");
                    const $paraRef = $("<p>")
                    //Created elements with ID's
                    const $h1Welcome = $("<h1>").text("Welcome");
                    const $loginButton = $("<button>").text("Login");
                    const $registerButton = $("<button>").text("Sign Up");

                    //Appending to DOM.
                    $registerButton.appendTo($paraRef);
                    $loginButton.appendTo($paraRef);
                    $paraRef.appendTo($h1Welcome);
                    $h1Welcome.appendTo($divWelcome);
                    $divWelcome.appendTo(divRef);
                }
            }
        })

        //exports buildWelcome module
        module.exports = buildWelcomeObject