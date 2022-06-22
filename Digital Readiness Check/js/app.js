import { startBtn, resultsBtn, resetBtn, form } from './modules/elements.js';  
import { initialize, getResults, reset, handleOption } from './modules/helperFunctions.js';

//Event listeners that control the app

startBtn.addEventListener("click", initialize);
resultsBtn.addEventListener("click", getResults);
resetBtn.addEventListener("click", reset);

form.addEventListener("click", handleOption);