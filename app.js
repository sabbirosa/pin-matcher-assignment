const generatePIN = document.getElementById("generateButton");
generatePIN.addEventListener("click", function() {
    var pinNumber = Math.floor(1000 + Math.random() * 9000);

    showPIN.value = pinNumber;
})