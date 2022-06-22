const circle = document.querySelector(".progress-ring-circle");
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;
const circularRingText = document.getElementById("circular-ring");


circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;


function setSVGProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
    circularRingText.setAttribute("data-value", `${percent}%`);
}

function resetCircleOffset() {
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;
    circularRingText.removeAttribute("data-value");
}

export {setSVGProgress, resetCircleOffset};