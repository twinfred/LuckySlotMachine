
    // BALANCE
    var quarters = 0;
    // ADD BALANCE
    function AddQuarters(num) {
        quarters += num;
        console.log("Your balance is " + quarters + " quarter(s).");
        $("#moneyBalance").text("$"+quarters*25/100);
    }
    function shakeWinnings () {
        $("#moneyWon").effect("shake");
    }
    // SLOT PAYOUT
    function PlaySlots() {
        for(var i = 1; i <= quarters; i++) {
            var gamePlay = Math.floor(Math.random() * 100)+1;
            console.log("gamePlay is " + gamePlay);
            $("#luckyNumber").text(gamePlay);
            if(gamePlay == 100) {
                quartersAdded = Math.floor((Math.random() * 50)+51);
                console.log("Winner! You won " + quartersAdded + " quarters!");
                $("#moneyWon").text("$"+quartersAdded*25/100)
                $("#luckyNumber").effect("shake");
                quarters += quartersAdded;
                break;
            }
            else if(gamePlay == 80) {
                quartersAdded = 32;
                console.log("Winner! You won " + quartersAdded + " quarters!");
                $("#moneyWon").text("$"+quartersAdded*25/100)
                $("#luckyNumber").effect("shake");
                quarters += quartersAdded;
                break;
            }
            else if(gamePlay == 60) {
                quartersAdded = 16;
                console.log("Winner! You won " + quartersAdded + " quarters!");
                $("#moneyWon").text("$"+quartersAdded*25/100)
                $("#luckyNumber").effect("shake");
                quarters += quartersAdded;
                break;
            }
            else if(gamePlay == 40) {
                quartersAdded = 8;
                console.log("Winner! You won " + quartersAdded + " quarters!");
                $("#moneyWon").text("$"+quartersAdded*25/100)
                $("#luckyNumber").effect("shake");
                quarters += quartersAdded;
                break;
            }
            else if(gamePlay == 20) {
                quartersAdded = 4;
                console.log("Winner! You won " + quartersAdded + " quarters!");
                $("#moneyWon").text("$"+quartersAdded*25/100)
                $("#luckyNumber").effect("shake");
                quarters += quartersAdded;
                break;
            }
            else if(gamePlay == 10) {
                quartersAdded = 1;
                console.log("Winner! You won " + quartersAdded + " quarters!");
                $("#moneyWon").text("$"+quartersAdded*25/100)
                $("#luckyNumber").effect("shake");
                quarters += quartersAdded;
                break;
            }
            else {
                console.log("Not a winner");
                $("#moneyWon").text("$0")
                quarters -= 1;
                break;
            }          
        }
        $("#moneyBalance").text("$"+quarters*25/100);
        console.log("You have " + quarters + " quarter(s) left.")
    }
$(document).ready(function(){
    $("#luckyNumber").text("0");
    $("#moneyBalance").text("$0.00");
})