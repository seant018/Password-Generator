const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passBoxOne = document.getElementById("pass-box-one")
let passBoxTwo = document.getElementById("pass-box-two")
function generatePassword() {
    newPasswordOne = ""
    newPasswordTwo = ""
    for (let i = 0; i < 15; i++) {
        let randNumOne = Math.floor(Math.random() * characters.length)
        let newCharOne = characters[randNumOne]
        newPasswordOne += newCharOne
        let randNumTwo = Math.floor(Math.random() * characters.length)
        let newCharTwo = characters[randNumTwo]
        newPasswordTwo += newCharTwo
    }
passBoxOne.textContent = newPasswordOne
passBoxTwo.textContent = newPasswordTwo

}
function copyPassword() {
    var copyText = document.getElementById("pass-box-one")
    copyText.select();
    copyText.setSelectionRange(1, 20);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}

