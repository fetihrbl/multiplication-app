const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score")) || 0;
scoreEl.innerText = `Score: ${score}`;

let num1, num2, correctAns;


function generateQuestion() {
    num1 = Math.ceil(Math.random() * 10);
    num2 = Math.ceil(Math.random() * 10);
    correctAns = num1 * num2;

    questionEl.innerText = `What is ${num1} multiply by ${num2}?`;
    inputEl.value = "";
}


generateQuestion();

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const userAns = parseInt(inputEl.value, 10);

    if (isNaN(userAns)) {
        alert("Please enter a valid number");
        return;
    }

    if (userAns === correctAns) {
        score++;
    } else {
        score--;
    }

    updateLocalStorage();
    scoreEl.innerText = `Score: ${score}`;

    
    generateQuestion();
});

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}
