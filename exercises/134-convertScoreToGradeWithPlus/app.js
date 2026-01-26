function convertScoreToGradeWithPlusAndMinus(score) {
    if (score < 0 || score > 100) {
        return "INVALID SCORE";
    }

    let grade = "";

    // Letra base
    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else if (score = 100) {
        grade = "A+";
    }
    else {
        return "F";
    }

    // Modificadores + / -
    const lastDigit = score % 10;

    if (lastDigit <= 2) {
        grade += "-";
    } else if (lastDigit >= 8) {
        grade += "+";
    } 

    return grade;
}

let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'