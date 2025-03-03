let gamesequence = [];
let usersequence = [];
let buttons = ["yellow", "red", "green", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let p = document.querySelector("p");

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("Game has started");
        started = true;
        levelup();
    }
});

function gameflash(button) {
    button.classList.add("flash");
    setTimeout(function() {
        button.classList.remove("flash");
    }, 100);
}

function userflash(button) {
    button.classList.add("userflash");
    setTimeout(function() {
        button.classList.remove("userflash");
    }, 100);
}

function levelup() {
    usersequence = []; // Reset user sequence for the new level
    level++;
    p.innerText = `Level ${level}`;
    let randomn = Math.floor(Math.random() * 4); // Change to 4 to include all colors
    let randomc = buttons[randomn];
    let randomb = document.querySelector(`.${randomc}`);
    gamesequence.push(randomc);
    gameflash(randomb);
}

function checkans() {
    let index = usersequence.length - 1; // Get the last index of user sequence

    if (usersequence[index] === gamesequence[index]) {
        if (usersequence.length === gamesequence.length) {
            setTimeout(levelup, 1000); // Wait a moment before moving to the next level
        }
    } else {
        p.innerHTML = `Game over! Your score was <b>${level}</b> <br>Press any key to start the game again.`;
        
        // Add the red flash class to the body
        document.querySelector("body").classList.add("flash-red");
        
        // Remove the red flash class after a short delay
        setTimeout(function() {
            document.querySelector("body").classList.remove("flash-red");
            document.querySelector("body").style.backgroundColor = "#27005D"; // Reset to original color
        }, 150);
        
        // Reset the game state
        started = false;
        level = 0;
        gamesequence = [];
        usersequence = [];
    }
}

function buttonpress() {
    let btn = this;
    userflash(btn);

    let usercolor = btn.getAttribute("id"); // Corrected to "id"
    usersequence.push(usercolor);
    checkans();
}

let allbuttons = document.querySelectorAll(".btn");
for (let btn of allbuttons) {
    btn.addEventListener("click", buttonpress);
}

/*let gamesequence = [];
let usersequence = [];
let buttons=["yellow","red","green","blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let p = document.querySelector("p"); // 

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("Game has started");
        started = true;
        levelup();
    }
});
function gameflash(buttons){
    buttons.classList.add("flash");
    setTimeout(function(){
        buttons.classList.remove("flash")
    },100);
}
function userflash(buttons){
    buttons.classList.add("userflash");
    setTimeout(function(){
        buttons.classList.remove("userflash")
    },100);
}


function levelup() {
    level++;
    p.innerText = `Level ${level}`;
    let randomn=Math.floor(Math.random()*3);
    let randomc=buttons[randomn];
    let randomb=document.querySelector(`.${randomc}`);
    //console.log(randomn);
    //console.log(randomc);
    //console.log(randomb);
    gamesequence.push(randomc);
    gameflash(randomb);

}
function checkans(){
    //console.log("curr level:",level);
    let index=level-1;

    if(usersequence[index]===gamesequence[index]){
        if(usersequence.length==gamesequence.length){
            levelup();
        }
    }
    else{
        p.innerText = "Game over! Press any key to start";  
    }
}
function buttonpress(){
    let btn=this;
    userflash(btn);

    usercolor=btn.getAttribute("#id");
    usersequence.push(usercolor);

    checkans();
}
let allbuttons=document.querySelectorAll(".btn");
for(btn of allbuttons){
    btn.addEventListener("click",buttonpress);
}
*/
