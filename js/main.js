window.addEventListener('load',init)

//Global Variables

let time = 5;
let score =0;
let isPlaying;

//DOM Elements

const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");
const sound = document.querySelector("#soundE");
//const loser = document.querySelector(".lose");

const words = [
    "hat",
    "river",
    "lucky",
    "rhythm ",
    "cocktail",
    "runaway",
    "nothing",
    "accommodate",
    "javascript",
    "revolver",
    "echo",
    "siblings",
    "magic",
    "master",
    "space",
    "between",
    "water",
    "smoke",
    "work",
    "maintenance ",
    "photography",
    "amazing",
    "beginner",
    "crazy",
    "development",
    "shirt",
    "comfortable",
    "masterpiece",
    "mind",
    "blind",
    "kind",
    "water",
    "legend",
    "save",
    "radio",
    "really",
    "millennium "
];

// Initialize Game(naxnakanacnel xagh@)

function init(){
showWord(words); 
//start game on word input
wordInput.addEventListener('input', startGame)
//call countdown every second
setInterval(countdown, 1000);
//check status of the game
setInterval(checkStatus,50);
}
//Start game
function startGame(){
    if(gameWords()){
       isPlaying = true;
       time=6;
       showWord(words);
       wordInput.value = '';
       score++;
    }
    scoreDisplay.innerHTML = score;
    //if score -1 display 0
    if(score === -1){
        scoreDisplay.innerHTML= 0;
    }else{
        scoreDisplay.innerHTML = score;
    }
}
//Game currentWord to wordInput
function gameWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML='Correct';
        sound.play();
        sound.play();
        return true;
    }else{
        message.innerHTML= '';
        
        return false;
        
    }
}



//Pick and show random word (@ntreq ev cuyc tveq patahakan bar)

function showWord(words) {
    const randIndex  = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}
//countdown
function countdown(){
    if(time > 0){
        time--;
    }else if( time === 0){
       isPlaying=false;
    }
    timeDisplay.innerHTML=time;
}

function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = "Game Over!!!"
        //loser.play()
        score = -1;
        
    }
}