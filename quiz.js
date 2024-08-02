const quizQuestions = [
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        answer: "Ottawa"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Gold", "Silver", "Iron"],
        answer: "Oxygen"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "What year did the Titanic sink?",
        options: ["1912", "1915", "1920", "1925"],
        answer: "1912"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "Mark Twain", "Ernest Hemingway"],
        answer: "Harper Lee"
    },
    {
        question: "What is the smallest prime number?",
        options: ["1", "2", "3", "5"],
        answer: "2"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        answer: "Diamond"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "South Korea"],
        answer: "Japan"
    },
    {
        question: "What is the boiling point of water at sea level?",
        options: ["50°C", "75°C", "100°C", "125°C"],
        answer: "100°C"
    },
    {
        question: "Which planet is known for its rings?",
        options: ["Venus", "Earth", "Saturn", "Uranus"],
        answer: "Saturn"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: "Canberra"
    },
    {
        question: "Which ocean is the largest?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "What is the longest river in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        answer: "Nile River"
    },
    {
        question: "Which language has the most native speakers?",
        options: ["English", "Spanish", "Mandarin", "Hindi"],
        answer: "Mandarin"
    },
    {
        question: "Who discovered penicillin?",
        options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Isaac Newton"],
        answer: "Alexander Fleming"
    },
    {
        question: "In what year did World War I begin?",
        options: ["1910", "1914", "1918", "1920"],
        answer: "1914"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Pb", "Fe"],
        answer: "Au"
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Earth", "Mars", "Mercury"],
        answer: "Mercury"
    },
    {
        question: "Who is known as the Father of Computers?",
        options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
        answer: "Charles Babbage"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle the questions
shuffleArray(quizQuestions);

function loadQuestion() {
    const questionData = quizQuestions[currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1;
    document.getElementById('question').innerHTML = `Question ${questionNumber}: ${questionData.question}`;
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
            document.getElementById('result').style.color ="green";
        } else {
            document.getElementById('result').textContent = `Incorrect! The correct answer was ${correctAnswer}.`;
            document.getElementById('result').style.color ="red";
        }
        
        currentQuestionIndex++;
        
        if (currentQuestionIndex < quizQuestions.length) {
            loadQuestion();
        } else {
            document.getElementById('result').textContent += ` Your final score is ${score} out of ${quizQuestions.length}.`;
            document.getElementById('question').style.display = 'none';
            document.getElementById('options').style.display = 'none';
            document.getElementById('next').style.display = 'none';
        }
    } else {
        document.getElementById('result').textContent = "Please select an answer.";
    }
}

// Initialize quiz
loadQuestion();
