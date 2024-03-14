import * as fs from "node:fs";

export default function send() {
    let email = document.getElementById("inputEmail").value

    fs.appendFileSync('./emails/emails.txt',email);
    console.log(email)
}
