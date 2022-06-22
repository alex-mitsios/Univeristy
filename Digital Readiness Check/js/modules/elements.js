//Fetch Json File

async function getJSON() {
    return fetch('/storage/questions.json').then(res => res.json())
        .catch(err => alert('Questions Fetch Error', err));
  }
   
export const data  = await getJSON();
export const area = document.getElementById("area");
export const comp = document.getElementById("comp");
export const desc = document.getElementById("desc");

//Buttons, form and other features

//First tab
export const firstTab = document.getElementById("first-tab");
export const startBtn = document.getElementById("startbtn");
export const spinner = document.getElementById("spinner");

//Second Tab
export const secondTab = document.getElementById("second-tab");
export const progressBar = document.getElementById("progress-bar");
export const progBarStat = document.querySelector(".prog-bar-stat");
export const shadowBox = document.getElementById("shadow-box");
export const secondTabForm = document.getElementById("sec-tab-form");
export const form = document.getElementById("question-form");
export const resultsBtn = document.getElementById("resultsbtn");
export const spinner2 = document.getElementById("spinner-2");

//Third Tab
export const thirdTab = document.getElementById("third-tab");
export const resetBtn = document.getElementById("resetbtn");
export const spinner3 = document.getElementById("spinner-3");