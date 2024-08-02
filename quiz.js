const quizQuestions = [
    {
        question: "1. What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        answer: "Ottawa"
    },
    {
        question: "2. Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Gold", "Silver", "Iron"],
        answer: "Oxygen"
    },
    {
        question: "3. What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "4. What year did the Titanic sink?",
        options: ["1912", "1915", "1920", "1925"],
        answer: "1912"
    },
    {
        question: "5. Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "Mark Twain", "Ernest Hemingway"],
        answer: "Harper Lee"
    },
    {
        question: "6. What is the smallest prime number?",
        options: ["1", "2", "3", "5"],
        answer: "2"
    },
    {
        question: "7. What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        answer: "Diamond"
    },
    {
        question: "8. Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "South Korea"],
        answer: "Japan"
    },
    {
        question: "9. What is the boiling point of water at sea level?",
        options: ["50°C", "75°C", "100°C", "125°C"],
        answer: "100°C"
    },
    {
        question: "10. Which planet is known for its rings?",
        options: ["Venus", "Earth", "Saturn", "Uranus"],
        answer: "Saturn"
    },
       
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionData = quizQuestions[currentQuestionIndex];
    document.getElementById('question').textContent = questionData.question;
    const optionsList = document.getElementById('options');
    optionsList.innerHTML = ''; // Clear previous options
    
    questionData.options.forEach(option => {
        const li = document.createElement('li');
        li.classList.add('option');
        li.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}`;
        optionsList.appendChild(li);
    });
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const selectedAnswer = selectedOption.value;
        const correctAnswer = quizQuestions[currentQuestionIndex].answer;

        if (selectedAnswer === correctAnswer) {
            score++;
            document.getElementById('result').textContent = "Correct!";
            document.getElementById('result').style.color ='green';
        } else {
            document.getElementById('result').textContent = `Incorrect! The correct answer was ${correctAnswer}.`;
            document.getElementById('result').style.color ='red';
        }
        
        currentQuestionIndex++;
        
        if (currentQuestionIndex < quizQuestions.length) {
            loadQuestion();
        } else {
            document.getElementById('result').textContent += ` Your final score is ${score} out of ${quizQuestions.length}.`;
            document.getElementById('question').style.display = 'none';
            document.getElementById('options').style.display = 'none';
            document.getElementById('next').style.display = 'none';
            document.getElementById('result').style.color = 'red';
            document.getElementById('result').style.backgroundColor = 'grey';
        }
    } else {
        document.getElementById('result').textContent = "Please select an answer.";
    }
}

// Initialize quiz
loadQuestion();
