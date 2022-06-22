import { resetCircleOffset, setSVGProgress } from './svg.js';
import Dimension from './classes/Dimension.js';
import { 
    data,
    area,
    comp,
    desc,
    firstTab,
    startBtn,
    spinner,
    secondTab,
    progressBar,
    progBarStat,
    shadowBox,
    secondTabForm,
    form,
    resultsBtn,
    spinner2,
    thirdTab,
    resetBtn,
    spinner3
} from './elements.js';


//Variables and Arrays 
let optionCounter = 0; //Used in handleOption, displayNext and initialize functions
const scoreValues = [15, 25, 40, 50, 65, 75, 90, 100];
const scores = []; //Holds the scores gathered from all options
const boundsDiffArray = []; //holds the bound diff for each dimension
let boundsArray = []; //holds the upper and lower bounds of each dimension
const dimensions = []; //holds the dimensions object instances
let optName;  //Used in handleOption function.
let progressNumber = 0; //for bootstrap progress bar 
const TOTAL_QUESTIONS = data.questions.length;
const TOTAL_DIMENSIONS = 8;


//reseting and initializing/ hiding containers, spinners
function reset() { 
    optionCounter = 0; 
    scores.length = 0;
    boundsDiffArray.length = 0;
    boundsArray.length = 0;
    dimensions.length = 0;
    progressBar.style.width = "0%";
    progressBar.textContent = "";
    progressNumber = 0;
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
    resetBoundsDiffArray();
    resetCircleOffset();
    startBtn.classList.add("d-none");
    spinner.classList.remove("d-none");
    setTimeout(() => {
        form.classList.remove("d-none");
        spinner.classList.add("d-none");
        firstTab.classList.add("d-none");
        secondTab.classList.remove("d-none");
        secondTabForm.classList.remove("d-none");
        shadowBox.classList.remove('shadow-6'); //remove last shadow
        shadowBox.classList.add(`shadow-${data.questions[optionCounter].shadow}`);
        progBarStat.textContent = `Progress Bar: ${optionCounter + 1}/${TOTAL_QUESTIONS}`;
    }, 500); 
    displayNext();
}


function displayNext() { 
    area.textContent = data.questions[optionCounter].area;
    comp.textContent = data.questions[optionCounter].comp;
    desc.textContent = data.questions[optionCounter].desc;
}


function handleOption(evt) {
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
        secondTabForm.classList.add("d-none");
        resultsBtn.classList.remove("d-none");
    }

    displayNext();
    evt.target.checked = false;
    setBoxShadow();
}


function getResults() {

    prepareResultScreen();

    initiateDimensions();

    if (scores.length === TOTAL_QUESTIONS) {
        for(let value in scores) {
            for (let i in dimensions) {
                if (value >= dimensions[i].lowerBound && value <= dimensions[i].upperBound) {
                    dimensions[i].score += scores[value];
                }
            }
        }

        for (let i = 0; i < TOTAL_DIMENSIONS; i++) {
            dimensions[i].calcAvg();
        }

        createProgressBars();
        setTimeout(() => {
            setSVGProgress(dimensions.at(-1).score);
        }, 550)
    } else {
        alert("Scores didn's calculate properly. Please refresh");
        location.reload();
    }
}

function prepareResultScreen() {

    resultsBtn.classList.add("d-none");
    spinner2.classList.remove("d-none");
    setTimeout(() => {
        secondTab.classList.add("d-none");
        resetBtn.classList.remove("d-none");
        spinner2.classList.add("d-none");
        thirdTab.classList.remove("d-none");
    }, 500)
}

function updateProgressBar() {
    progressNumber+= ( 100 / TOTAL_QUESTIONS );  
    progressBar.style.width = `${progressNumber}%`;
    if (progressBar.style.width === "100%") {
        progressBar.textContent= "COMPLETE!!";
    }
    progBarStat.textContent = `Progress Bar: ${optionCounter + 1}/${TOTAL_QUESTIONS}`;
}


//.shadow is an id from the json file used to set the correct shadow color for every dimension on the test
function setBoxShadow() {
    shadowBox.classList.add(`shadow-${data.questions[optionCounter].shadow}`);  
    shadowBox.classList.remove(`shadow-${(data.questions[optionCounter].shadow) - 1}`)
}


function createProgressBars() {
    const progBarsArray = [];

    for(let i = 0; i < TOTAL_DIMENSIONS - 1; i++) {   
        let width = dimensions[i].score;
        progBarsArray.push(document.getElementById(`${i}`));
        progBarsArray[i].style.width = `${width}%`;
        progBarsArray[i].setAttribute("aria-valuenow", `${width}`);
        progBarsArray[i].textContent = `${width}%`
    }
}


function resetBoundsDiffArray() {

	for (let i = 0; i < TOTAL_DIMENSIONS; i++) {
		boundsDiffArray[i] = 0;
	}      
}

function makeBoundsDiffArray() {
	
	for (let i = 0; i < TOTAL_DIMENSIONS; i++) {
		for (let question in data.questions) {
            if (data.questions[question].comp_id == i) {
                boundsDiffArray[i]++;
            }
        }
    }
    boundsDiffArray.splice(-1 , 1 , boundsDiffArray.reduce((pv, cv) => pv + cv ));
}

function makeBoundsArray() {

    let upperBoundSum = 0;

    for (let i = 0; i < TOTAL_DIMENSIONS - 1; i++) {
        upperBoundSum+= boundsDiffArray[i];

        boundsArray = [...boundsArray, {
            lowerBound: ( upperBoundSum - 1 ) - ( boundsDiffArray[i] - 1 ) ,
            upperBound: upperBoundSum - 1
        }];
    }

    boundsArray = [...boundsArray, {
        lowerBound: 0,
        upperBound: upperBoundSum - 1
    }];
}


function initiateDimensions() {
    
    makeBoundsDiffArray();
    makeBoundsArray();
    for (let i = 0; i < TOTAL_DIMENSIONS; i++) {
        dimensions.push(new Dimension(boundsArray[i].lowerBound, boundsArray[i].upperBound));
    }

    // console.log(boundsDiffArray,boundsArray,dimensions);

}

export { reset, initialize, handleOption, getResults };