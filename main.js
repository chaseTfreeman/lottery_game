console.log("Hello World");


var myName="Chase";
var lottoWinners = ["Brandon", "Lauren", "Chase", "Tommy", "Bri", "Brad", "Matt", "Mackenzie"];

for (var i=0; i > lottoWinners.length; i++) {
    console.log(lottoWinners);
}
var randomName = Math.floor(Math.random()*lottoWinners.length);
var winner = lottoWinners[randomName];

if (myName != winner) {

   console.log("Try Again Next Time!");
}
else {
    console.log("You won!");
}
