//JSON Stuff
const data = JSON.parse(bank);
const area = document.getElementById("area");
const comp = document.getElementById("comp");
const desc = document.getElementById("desc");

//Buttons, form and other features

//First tab
const firstTab = document.getElementById("first-tab");
const startBtn = document.getElementById("startbtn");
const spinner = document.getElementById("spinner");

//Second Tab
const secondTab = document.getElementById("second-tab");
const progressBar = document.getElementById("progress-bar");
const progBarStat = document.querySelector(".prog-bar-stat");
const shadowBox = document.getElementById("shadow-box");
const secondTabPart2 = document.getElementById("sec-tab-part-2");
const form = document.getElementById("question-form");
const resultsBtn = document.getElementById("resultsbtn");
const resBtnContainer = document.querySelector(".res-btn-container");
const spinner2 = document.getElementById("spinner-2");

//Third Tab
const thirdTab = document.getElementById("third-tab");
const resetBtn = document.getElementById("resetbtn");
const progBarsArray = [];
for (let i=0; i <= 6; i++) {
    progBarsArray.push(document.getElementById(`${i}`));
}
const spinner3 = document.getElementById("spinner-3");
const circularRingText = document.getElementById("circular-ring");

//Variables and Arrays 
let optionCounter = 0; //Used in handleOption, displayNext and initialize functions.
const scoreValues = [15, 25, 40, 50, 65, 75, 90, 100];
const scores = []; //Holds the scores gathered from all options.
let optName;  //Used in handleOption function.
let progressNumber = 0; //for bootstrap progress bar 

class Dimension {
    constructor(score, divideBy, lb, ub){
        this.score = score;
        this.divideBy = divideBy;
        this.lb = lb;
        this.ub = ub;
    }
    
    calcAvg() {
        this.score = Math.round(this.score / this.divideBy * 100);
    }

    resetScore() {
        this.score = 0;
    }
}

const dimensions = [
 new Dimension(0, 300, 0, 2), 
 new Dimension(0, 600, 3, 8),
 new Dimension(0, 400, 9, 12),
 new Dimension(0, 400, 13, 16),
 new Dimension(0, 400, 17, 20),
 new Dimension(0, 900, 21, 29),
 new Dimension(0, 600, 30, 35),
 new Dimension(0, 3600, 0, 35) 
]

//START

startBtn.addEventListener("click", initialize);
resultsBtn.addEventListener("click", getResults);
resetBtn.addEventListener("click", reset);

form.addEventListener("click", handleOption);

//Helping functions

//reseting and initializing/ hiding containers, spinners
function reset() { 
    optionCounter = 0; 
    scores.length = 0;
    resetScores();
    progressBar.style.width = "0%";
    progressNumber = 0;
    progressBar.textContent = "";
    resetBtn.classList.add("d-none");
    spinner3.classList.remove("d-none");
    setTimeout(() => {
        thirdTab.classList.add("d-none");
        firstTab.classList.remove("d-none");
        startBtn.classList.remove("d-none");
        spinner3.classList.add("d-none");
    }, 500);
}

function initialize() {
    resetCircleOffset();
    startBtn.classList.add("d-none");
    spinner.classList.remove("d-none");
    setTimeout(() => {
        form.classList.remove("d-none");
        spinner.classList.add("d-none");
        firstTab.classList.add("d-none");
        secondTab.classList.remove("d-none");
        secondTabPart2.classList.remove("d-none");
        shadowBox.classList.remove('shadow-6'); //remove last shadow
        shadowBox.classList.add(`shadow-${data.questions[optionCounter].shadow}`);
        progBarStat.textContent = `Progress Bar: ${optionCounter + 1}/36`;
    }, 500); 
    displayNext();
}

function resetScores() {
    for (let i in dimensions) {
        dimensions[i].resetScore();
    }
}

function displayNext() { 
    area.textContent = data.questions[optionCounter].area;
    comp.textContent = data.questions[optionCounter].comp;
    desc.textContent = data.questions[optionCounter].desc;
}

function handleOption(evt) {
    //console.log(evt.target.nodeName);
    if (optionCounter < data.questions.length - 1) {
        if (evt.target.nodeName === "INPUT") {
            optName = evt.target.name;
            scores.push(scoreValues[parseInt(optName)]);
            optionCounter++;
            updateProgressBar(); 
            // console.log(scores);                  
        }
    } else {
        if (evt.target.nodeName === "INPUT") {
            optName = evt.target.name;
            scores.push(scoreValues[parseInt(optName)]);
            updateProgressBar(); 
        }
        form.classList.add("d-none");
        secondTabPart2.classList.add("d-none");
        resultsBtn.classList.remove("d-none");
    }
    displayNext();
    evt.target.checked = false;
    setBoxShadow();
}

function getResults() {
    //Hiding and adding class hide for aesthetic purpose.
    resultsBtn.classList.add("d-none");
    spinner2.classList.remove("d-none");
    setTimeout(() => {
        secondTab.classList.add("d-none");
        resetBtn.classList.remove("d-none");
        spinner2.classList.add("d-none");
        thirdTab.classList.remove("d-none");
    }, 500)
    //Calculating, adding to the finalScores object.
    if (scores.length === 36) {
        for(let value in scores) {
            for (let i in dimensions) {
                if (value >= dimensions[i].lb && value <= dimensions[i].ub) {
                    dimensions[i].score += scores[value];
                }
            }
        }
        for (let i in dimensions) {
            dimensions[i].calcAvg();
        }
        createProgressBars();
         setTimeout(() => {
            setSVGProgress(dimensions[7].score);
         }, 500)
    } else {
        alert("SCORES ARRAY IS NOT FULL!!");
        location.reload();  //check this
    }
}

function updateProgressBar() {
    //comes from 100/36 divided by 2 because of label click event counts as 2 times 100/36
    progressNumber+= 2.7777777777777777777777777777778;  
    progressBar.style.width = `${progressNumber}%`;
    if (progressBar.style.width === "100%") {
        progressBar.textContent= "COMPLETE!!";
    }
    progBarStat.textContent = `Progress Bar: ${optionCounter + 1}/36`;
}

//.shadow is an id from the json file used to set the correct shadow color for every dimension on the test
function setBoxShadow() {
    shadowBox.classList.add(`shadow-${data.questions[optionCounter].shadow}`);  
    shadowBox.classList.remove(`shadow-${(data.questions[optionCounter].shadow) - 1}`)
}

function createProgressBars() {
    for(let i=0; i<=6; i++) {
        let width = dimensions[i].score;
        progBarsArray[i].style.width = `${width}%`;
        progBarsArray[i].setAttribute("aria-valuenow", `${width}`);
        progBarsArray[i].textContent = `${width}%`
    }
}
