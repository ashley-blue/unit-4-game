$(document).ready(function() {
    
    var random = [];
    for (var r = 19; r < 121; r++) {
        random.push(r);
    }
    var crystals = [];
    for (var c = 1; c < 13; c++) {
        crystals.push(c);
    }

    var randNumber; 
    var crystalNumbers = []; 
    var c1;
    var c2;
    var c3;
    var c4;
 var totalScore = 0;
    var wins = 0;
    var losses = 0;

    function pickRandomNumber(arr) {
        var x = arr[Math.floor(Math.random() * arr.length)];
        randNumber = x;
        $("#randomNumber").html(randNumber);
        console.log("random number: " + randNumber);
    }

    function pickRandomCrystals(arr) {
        for (var y = 0; y < 4; y++){
            var a = arr[Math.floor(Math.random() * arr.length)];
            crystalNumbers.push(a);
        }

        console.log("crystal numbers: " + crystalNumbers);
    }
    function crystalValues(arr) {

        for (i = 0; i < arr.length; i++) {
        $("#button-" + (i+1)).attr("value", arr[i]);
        console.log(this);
        }
        c1 = arr[0];
        c2 = arr[1];
        c3 = arr[2];
        c4 = arr[3];
    }
    function gameReset(x) {
        crystalNumbers = [];
        pickRandomNumber(random);
        pickRandomCrystals(crystals);
        crystalValues(crystalNumbers);
        totalScore = 0;
        $("#totalNumber").html(totalScore);
        alert(x);
   }

    pickRandomNumber(random); 
    pickRandomCrystals(crystals); 
    crystalValues(crystalNumbers);

        $("#crystal1").on("click", function() {
            totalScore += c1;
            $("#Total").html(totalScore);
        });
        $("#crystal2").on("click", function() {
            totalScore += c2;
            $("#Total").html(totalScore);
        });
        $("#crystal3").on("click", function() {
            totalScore += c3;
            $("#Total").html(totalScore);
        });
        $("#crystal4").on("click", function() {
            totalScore += c4;
            $("#Total").html(totalScore);
        });
    $("button").on("click", function() {

        if (totalScore == randNumber) {
            wins++;
            console.log(totalScore);
            $("#Total").html(totalScore);
            $("#Wins").html("Wins: " + wins);
            setTimeout(function() {gameReset("YOU WIN!")}, 200);
        }
        else if (totalScore > randNumber){
            losses++;
            $("#Total").html(totalScore);
            $("#Losses").html("Losses: " + losses);
            setTimeout(function() {gameReset("YOU LOSE!")}, 200);
        }
    });
});
