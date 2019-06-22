//Create a Revealing Module Pattern that will have the following data and methods:

//data
//scores 65, 76, 100, 88, 17, 55

//methods

var scoresMess = (function (){
    var scores = [65, 76, 100, 88, 17, 55];

// 1. finds the sum of all scores
    function sum (){
        scoreSum = 0;
        for (i=0;i<scores.length;i++){
            scoreSum += scores[i];
        }
        return scoreSum;
    }

// 2. finds the avg of all scores
    function avg (){
        scoreAvg = sum()/scores.length;
        return scoreAvg;
    }
// 3. finds the highest score
    function highScore (){
        var max =0;
        for (i=0;i<scores.length;i++){
            if (scores[i]>max){
                max = scores[i];
            }
        }
        return max;
    }
// 4. finds the lowest score

    function lowScore (){
        var min = highScore();
        for (i=0;i<scores.length;i++){
            if (scores[i]<min){
                min = scores[i];
            }
        }
        return min;
    }
// 5. generates a random score
    function random (){
        console.log('random',Math.floor(Math.random()*scores.length));
        return scores[Math.floor(Math.random()*scores.length)]
    }
// 6. finds the number of passing scores above 70
    function passingScore (){
        arr = [];
        for (i=0;i<scores.length;i++){
            if (scores[i]>=70){
                arr[arr.length] = scores[i];
            }
        }
        return arr.length;
    }
// 7. finds the first score in the list 
    function firstScore () {
        return scores[0];
    }
// 8. finds the last score in the list 
function lastScore (){
    return scores[scores.length-1];
}
// 9. generates a new score list with a 5% increase for each score 

function powerUp (){
    newScores = [];
    for (i=0;i<scores.length;i++){
        newScores[newScores.length] = scores[i]*1.05;
    }
    return newScores;
}

// 10.generates a list of scores that are odd numbered
    function oddScores (){
        newScores = [];
        for (i=0;i<scores.length;i++){
            if (scores[i]%2!==0){
                newScores[newScores.length]=scores[i];
            }
        }
        return newScores;
    }

return {
    sum: sum,
    avg: avg,
    highScore: highScore,
    lowScore: lowScore,
    random: random,
    passingScore: passingScore,
    firstScore: firstScore,
    lastScore: lastScore,
    powerUp: powerUp,
    oddScores: oddScores
}
})();

console.log(scoresMess.sum());
console.log(scoresMess.avg());
console.log(scoresMess.highScore());
console.log(scoresMess.lowScore());
console.log(scoresMess.random());
console.log(scoresMess.passingScore());
console.log(scoresMess.firstScore());
console.log(scoresMess.lastScore());
console.log(scoresMess.powerUp());
console.log(scoresMess.oddScores());