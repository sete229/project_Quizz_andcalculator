function submitQuiz() {
    const answers = {
        q1: "Max Verstappen",
        q2: "Ferrari",
        q3: "1950",
        q4: "Circuit de Monaco",
        q5: "Lewis Hamilton",
        q6: "Honda",
        q7: "25",
        q8: "Japan",
        q9: "305 km",
        q10: "Max Verstappen"
    };
    

    let score = 0;

    for (const [key, correctAnswer] of Object.entries(answers)) {
        const selectedOption = document.querySelector(`input[name="${key}"]:checked`);
        if (selectedOption && selectedOption.value === correctAnswer) {
            score++;
        }
    }

    document.getElementById("results").innerText = `You scored ${score} out of 10!`;
}
function printEmail() {
    const ispisEl = document.querySelector('#ispisEmaila');
    ispisEl.innerHTML = document.querySelector('#email').value;
    }
document.addEventListener('DOMContentLoaded', function() {
    const buttonEl = document.querySelector('#changeButtonsStyle');
    buttonEl.addEventListener('click', function(e) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
    button.style.border = 'none';
    button.style.background = 'red';
    button.style.color = 'white';
    button.style.padding = '10px 15px';
    });
    });
    });