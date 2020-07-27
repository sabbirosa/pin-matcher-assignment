// Generating PIN and Showing in Display

const generatePIN = document.getElementById("generateButton");

    generatePIN.addEventListener("click", function() {
        var pinNumber = Math.floor(1000 + Math.random() * 9000);
        showPIN.value = pinNumber;
    })


// Getting Number and Showing in Display

const displayNumber = document.getElementById('display').value;

    // Inserting Number
    function insert(number) {
        document.getElementById('display').value = document.getElementById('display').value + number; 
    }

    // Clean Display
    function clean() {
        const clean = "";
        document.getElementById('display').value = clean;  
    }
    
    // Deleting Last Number
    function back() {
        const currentValue = document.getElementById("display").value;
        document.getElementById("display").value = currentValue.substr(0, currentValue.length - 1);
    }


// Matching PIN and Showing Message

    const pinSubmitBtn = document.getElementById("submitBtn");
    pinSubmitBtn.addEventListener("click", function() {
        pinTyped = parseInt(display.value);

        let generatedPin =  document.getElementById("showPIN").value;
        generatedPinNumber = parseInt(generatedPin)

        
        
        if (pinTyped === generatedPinNumber) {
            document.getElementById("notifyCorrect").style.display = "block";
            document.getElementById("notifyError").style.display = "none";
        }

        else {
            document.getElementById("notifyCorrect").style.display = "none";
            document.getElementById("notifyError").style.display = "block";

        }

    })