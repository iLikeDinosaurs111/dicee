var name = "images/dice" + Math.ceil(Math.random()*6) + ".png";
var name2 = "images/dice" + Math.ceil(Math.random()*6) + ".png";
document.querySelectorAll("img")[0].setAttribute("src", name);
document.querySelectorAll("img")[1].setAttribute("src", name2);
if (name > name2){
    document.querySelector("h1").innerHTML = "<h1>Player 1 gets free soda from Player 2</h1>";
} else if (name < name2){
    document.querySelector("h1").innerHTML = "<h1>Player 2 gets free ice cream from Player 1</h1>";
} else if (name == name2){
    document.querySelector("h1").innerHTML = "<h1>Everyone loses</h1>";
}


