var Wins = 0;
var Losses = 0;
var Total ;
var RandomStartNum ;

RandomStartNum = Math.floor(Math.random() * 99 ) + 20;
console.log(RandomStartNum);

$("#randomNumber").html('Get this number: ' + RandomStartNum);

for (var i=0; i < 4; i ++){
    var random = Math.floor(Math.random() * 12) +1;
    console.log(random);

    console.log(RandomStartNum + "#crystals")
    var crystal = $("<div>");
    crystal.attr({
    "class":'crystal',
    "data-random": random
});
//this is supposed to connect crystal value to total score but is not working
$("#crystal1").on("click", function(){

    $("#total").html(random);
});

//i need to add a function so that the crystal values are added together on each click to display new total

//wins and losses need to be updated, you can probably create a function and use else and if else
