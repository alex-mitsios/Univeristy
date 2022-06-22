export default class Dimension {
    constructor(lowerBound, upperBound){
        this.score = 0;
        this.lowerBound = lowerBound;
        this.upperBound = upperBound;
        this.divideBy = (this.upperBound - this.lowerBound + 1) * 100;
    }

    set setScore(score) {
        this.score = score;
    }

    get getScore() {
        return this.score;
    }
    
    calcAvg() {

        if ( this.divideBy && this.divideBy > 0) {
            this.score = Math.round(this.score / this.divideBy * 100);
        }
        else {
            alert("Scores cannot be calculated. Something went wrong.");
        }
    }
}