import awsmobile from "./aws-exports.js";
import Amplify from "../node_modules/aws-amplify";

Amplify.configure(awsmobile);

export function renderSignUp(){
    $("#maindiv").html(`
    <form id="sign-up">
    <label for="username">username:</label>
    <br>
    <input type="text" id="username" name="username" placeholder="username">
    <br>

    <label for="email">email:</label>
    <br>
    <input type="email" id="email" name="email" placeholder="email">
    <br>

    <label for="password">password:</label>
    <br>
    <input type="password" id="password" name="password">
    <br>
    <input type="submit" name="submit" id="submit">
    </form>
    `);

    $("#sign-up").on("submit", function(e){
        e.preventDefault();

        const username = $("#username").val();
        const email = $("#email").val();
        const password = $("#password").val();

        Amplify.Auth.signUp({
            username,
            password,
            attributes:{
                email
            }
        })
        .then(data => console.log(data))
        .catch(err => console.log(err));
    });

}
renderSignUp();
