document.addEventListener("DOMContentLoaded", function () {
    const usernameForm = document.getElementById("frm");
    const usernameInput = document.getElementById("username");
    const mainContainer = document.querySelector(".main-container");
    const categoryButtons = document.querySelectorAll(".category-option");
    const questionButtons = document.querySelectorAll(".question-option");
    const startButton = document.querySelector(".start-quiz-btn");
    const quizContainer = document.querySelector(".quiz-container");
    const questionText = document.querySelector(".question-test");
    const answerOptions = document.querySelector(".answer-options");
    const questionStatus = document.querySelector(".question-status b");
    const timerDisplay = document.querySelector(".time-duration");
    const nextButton = document.querySelector(".next-question-btn");
    const resultContainer = document.querySelector(".result-container");
    const resultMessage = document.querySelector(".result-message");
    const tryAgainButton = document.querySelector(".try-again-btn");
    const quizTitle = document.querySelector(".quiz-title");
    let selectedCategory = "";
    let selectedNumQuestions = 0;
    let currentQuestionIndex = 0;
    let score = 0;
    let questionsList = [];
    let timer;
    let timeLeft = 30;
    
    usernameForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if (usernameInput.value.trim() === "") {
            alert("Please enter a valid username!");
            return;
        }
        usernameForm.style.display = "none";
        mainContainer.style.display = "block";
    });
    
    categoryButtons.forEach(button => {
        button.addEventListener("click", function () {
            selectedCategory = this.id;
            categoryButtons.forEach(btn => btn.classList.remove("selected"));
            this.classList.add("selected");
        });
    });
    
    questionButtons.forEach(button => {
        button.addEventListener("click", function () {
            selectedNumQuestions = parseInt(this.textContent);
            questionButtons.forEach(btn => btn.classList.remove("selected"));
            this.classList.add("selected");
        });
    });
    
    startButton.addEventListener("click", function () {
        if (!selectedCategory) {
            alert("Please select a category!");
            return;
        }
        if (!selectedNumQuestions) {
            alert("Please select the number of questions!");
            return;
        }
        quizTitle.textContent = `${selectedCategory} Quiz`;
        mainContainer.style.display = "none";
        quizContainer.style.display = "block";
        startQuiz();
    });
    
    function startQuiz() {
        const selectedCategoryData = questions.find(q => q.category === selectedCategory);
        if (!selectedCategoryData) return;
        questionsList = selectedCategoryData.questions.sort(() => 0.5 - Math.random()).slice(0, selectedNumQuestions);
        currentQuestionIndex = 0;
        score = 0;
        showQuestion();
    }
    
    function showQuestion() {
        if (currentQuestionIndex >= questionsList.length) {
            showResult();
            return;
        }
        resetTimer();
        const currentQuestion = questionsList[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        questionStatus.textContent = `${currentQuestionIndex + 1} of ${questionsList.length}`;
        answerOptions.innerHTML = "";
        currentQuestion.options.forEach((option, index) => {
            const li = document.createElement("li");
            li.classList.add("answer-option");
            li.textContent = option;
            li.addEventListener("click", () => checkAnswer(index));
            answerOptions.appendChild(li);
        });
    }
    
    function checkAnswer(selectedIndex) {
        const currentQuestion = questionsList[currentQuestionIndex];
        if (selectedIndex === currentQuestion.correctAnswer) {
            score++;
        }
        currentQuestionIndex++;
        showQuestion();
    }
    
    function resetTimer() {
        clearInterval(timer);
        timeLeft = 30;
        timerDisplay.textContent = `${timeLeft}s`;
        timer = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = `${timeLeft}s`;
            if (timeLeft <= 0) {
                clearInterval(timer);
                currentQuestionIndex++;
                showQuestion();
            }
        }, 1000);
    }
    
    function showResult() {
        clearInterval(timer);
        quizContainer.style.display = "none";
        resultContainer.style.display = "block";
        resultMessage.innerHTML = `You answered <b>${score}</b> out of <b>${questionsList.length}</b> questions correctly. Great effort!`;
    }
    
    tryAgainButton.addEventListener("click", function () {
        resultContainer.style.display = "none";
        mainContainer.style.display = "block";
    });
});
