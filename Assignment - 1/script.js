document.addEventListener('DOMContentLoaded', () => {
    const quizButton = document.getElementById('quizButton');
    const quiz = document.getElementById('quiz');
    const submitAnswer = document.getElementById('submitAnswer');
    const result = document.getElementById('result');

    quizButton.addEventListener('click', () => {
        quiz.style.display = 'block';
    });

    submitAnswer.addEventListener('click', () => {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (selectedAnswer) {
            if (selectedAnswer.value === '1') {
                result.textContent = 'Correct!';
            } else {
                result.textContent = 'Wrong answer. Try again!';
            }
        } else {
            result.textContent = 'Please select an answer.';
        }
    });
});
