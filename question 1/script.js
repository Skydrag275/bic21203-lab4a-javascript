// 1. Pilih elemen perenggan dan butang menggunakan DOM selection
const changeBtn = document.getElementById("changeBtn");
const messagePara = document.getElementById("message");

// 2. Definisikan fungsi changeMessage()
function changeMessage() {
    messagePara.textContent = "Hello there!";
}

// 3. Kaitkan fungsi dengan butang menggunakan addEventListener
changeBtn.addEventListener("click", changeMessage);

