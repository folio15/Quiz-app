function simpleQuizApp() {
    const questions = [
        "What is the capital of Pakistan?",
        "What is 5 + 7?",
        "What is the largest planet in our solar system?",
        "Who is the prime minister of `pakistan`?",
        "what is js stand for? "
    ];

    const correctAnswers = [
        "islamabad",
        "12",
        "jupiter",
        "shahbaz sharif",
        "java script"
    ];
    let correctCount = 0;
    let wrongCount = 0;

    for (let i = 0; i < questions.length; i++) {
        let userAnswer = prompt(questions[i]).toLowerCase();

        if (userAnswer === correctAnswers[i]) {
            correctCount++;
            alert("Correct!");
        } else {
            wrongCount++;
            alert(`Wrong! The correct answer is: ${correctAnswers[i]}`);
        }
    }

    alert(`Quiz Over! You got ${correctCount} correct answers and ${wrongCount} wrong answers.`);

    let grade;
    if (correctCount === 5) {
        grade = "A+";
    } else if (correctCount >= 4) {
        grade = "A";
    } else if (correctCount >= 3) {
        grade = "B";
    } else if (correctCount >= 2) {
        grade = "C";
    } else {
        grade = "F";
    }

    alert(`Your grade is: ${grade}`);
}

simpleQuizApp();
