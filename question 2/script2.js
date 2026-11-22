const checkBtn = document.getElementById("checkBtn");
const userInput = document.getElementById("userInput");
const resultPara = document.getElementById("result");

function checkInput() {
    const rawValue = userInput.value;

    // 1. Semak jika input kosong
    if (rawValue.trim() === "") {
        resultPara.textContent = "Please enter a valid number!";
        return;
    }

    // 2. Tukar kepada nombor
    const num = Number(rawValue);

    // 3. Semak jika bukan nombor (NaN)
    if (isNaN(num)) {
        resultPara.textContent = "Please enter a valid number!";
        return;
    }

    // 4. Bandingkan dengan 10 dan paparkan keputusan
    if (num < 10) {
        resultPara.textContent = "The number is lower than 10";
    } else if (num > 10) {
        resultPara.textContent = "The number is higher than 10";
    } else {
        resultPara.textContent = "The number is equal to 10";
    }
}

// Pastikan event listener terikat pada butang checkBtn
checkBtn.addEventListener("click", checkInput);