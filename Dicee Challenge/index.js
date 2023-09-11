const randomNumber1 = Math.floor((Math.random() * 6) + 1);
let leftElement = document.querySelectorAll("img")[0]
leftElement.setAttribute("src", `./images/dice${randomNumber1}.png`);

const randomNumber2 = Math.floor((Math.random() * 6) + 1);
let rightElement = document.querySelectorAll("img")[1]
rightElement.setAttribute("src", `./images/dice${randomNumber2}.png`);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}else{
    document.querySelector("h1").innerHTML = "Draw!"
}