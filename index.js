const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordLength = 15;
function generatePassword(){
    let firstpassword = ``;
    let secondpassword = ``;
    for(let i = 0; i < passwordLength; i++){
        let randomIndex = Math.floor(Math.random() * characters.length);
        firstpassword += characters[randomIndex];
    }
    for(let i = 0; i < passwordLength; i++){
        let randomIndex = Math.floor(Math.random() * characters.length);
        secondpassword += characters[randomIndex];
    }
    setPassword(firstpassword, secondpassword);
}
function setPassword(first, second) {
    let firstPasswordElement = document.getElementsByClassName("firstPassword")[0];
    let secondPasswordElement = document.getElementsByClassName("secondPassword")[0];

    firstPasswordElement.textContent = first;
    secondPasswordElement.textContent = second;

    firstPasswordElement.classList.remove("hidden");
    secondPasswordElement.classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
    const first = document.getElementsByClassName("firstPassword")[0];
    const second = document.getElementsByClassName("secondPassword")[0];

    first.addEventListener("click", () => {
        navigator.clipboard.writeText(first.textContent);
         showToast("Password copied!");
        });
        
        second.addEventListener("click", () => {
            navigator.clipboard.writeText(second.textContent);
            showToast("Password copied!");
    });
});
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}


