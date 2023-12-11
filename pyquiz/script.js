let currentQuestionIndex = 0;
let score = 0;
let totalQuestionsAttempted = 0;
let hasAnsweredCurrentQuestion = false; // Flag to track whether the user has answered the current question

function loadRandomQuestion() {
    // Reset the flag for the new question
    hasAnsweredCurrentQuestion = false;

    fetch('questions.json')
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomQuestion = data[randomIndex];

            document.getElementById('question').textContent = randomQuestion.question;

            const optionsContainer = document.getElementById('options-container');
            optionsContainer.innerHTML = "";

            randomQuestion.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.onclick = () => checkAnswer(option, randomQuestion.correctAnswer);
                optionsContainer.appendChild(button);
            });

            document.querySelectorAll('#options-container button').forEach(button => {
                button.classList.remove('correct', 'incorrect');
            });

            totalQuestionsAttempted++;

            document.getElementById('score').innerText = `Score: ${score}/${totalQuestionsAttempted}`;
        })
        .catch(error => console.error('Error fetching questions:', error));
}

function checkAnswer(selectedAnswer, correctAnswer) {
    // Check if the user has already answered the current question
    if (hasAnsweredCurrentQuestion) {
        return;
    }

    const buttons = document.querySelectorAll('#options-container button');

    buttons.forEach(button => {
        button.classList.remove('correct', 'incorrect');

        if (button.textContent === correctAnswer) {
            button.classList.add('correct');
        }

        if (button.textContent === selectedAnswer && selectedAnswer !== correctAnswer) {
            button.classList.add('incorrect');
        }
    });

    hasAnsweredCurrentQuestion = true; // Set the flag to true once the user answers the question

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    document.getElementById('score').innerText = `Score: ${score}/${totalQuestionsAttempted}`;
}

window.onload = loadRandomQuestion;
