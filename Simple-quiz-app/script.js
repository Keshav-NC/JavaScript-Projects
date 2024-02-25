const questions = [
  {
    question: "The first post office in India was set up in …",
    answers: [
      { option: "Mumbai", correct: "false" },
      { option: "Kolkata", correct: "true" },
      { option: "Chennai", correct: "false" },
      { option: "Delhi", correct: "false" },
    ],
  },
  {
    question:
      "Which among the following cities is the most populated city in the world?",
    answers: [
      { option: "Tokyo", correct: "true" },
      { option: "New Delhi", correct: "false" },
      { option: "New York", correct: "false" },
      { option: "London", correct: "false" },
    ],
  },
  {
    question: "India House is located in …",
    answers: [
      { option: "UK", correct: "true" },
      { option: "USA", correct: "false" },
      { option: "India", correct: "false" },
      { option: "Italy", correct: "false" },
    ],
  },
  {
    question:
      "The national policy, overwhelmed and largely regulated by the trade and business policy, is related to …",
    answers: [
      { option: "Democratic Policy", correct: "false" },
      { option: "Capitalist Policy", correct: "true" },
      { option: "Communist Policy", correct: "false" },
      { option: "Socialist Policy", correct: "false" },
    ],
  },
  {
    question: "Which among the following is the nearest to earth planet?",
    answers: [
      { option: "Mercury", correct: "false" },
      { option: "Venus", correct: "true" },
      { option: "Neptune", correct: "false" },
      { option: "Mars", correct: "false" },
    ],
  },
];

const Question = document.getElementById("question"),
  answerBtn = document.getElementById("answer-btn"),
  Next = document.getElementById("next-btn"),
  quizContainer = document.getElementById("quiz-container");

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  Next.innerHTML = "Next";

  // Question.style.display = "none";

  // let h4 = document.createElement("h4");
  // h4.innerHTML = "You have total 5 questions & each carries 2 marks";
  // quizContainer.appendChild(h4);
  // Next.innerHTML = "Start";
  // Next.style.display = "initial";

  showQuestion();
};

const resetState = () => {
  Next.style.display = "none";
  while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild);
  }
};

const showQuestion = () => {
  resetState();

  let curQues = questions[currentQuestionIndex];
  let quesNo = currentQuestionIndex + 1;
  Question.innerHTML = quesNo + ". " + curQues.question;

  curQues.answers.forEach((ans) => {
    const button = document.createElement("button");
    button.innerHTML = ans.option;

    button.classList.add("btn");
    answerBtn.appendChild(button);

    if (ans.correct) {
      button.dataset.correct = ans.correct;
    }

    button.addEventListener("click", (e) => {
      const selectedBtn = e.target;
      const isCorrect = selectedBtn.dataset.correct === "true";

      if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
      } else selectedBtn.classList.add("incorrect");

      Array.from(answerBtn.children).forEach((button) => {
        if (button.dataset.correct === "true") button.classList.add("correct");
        button.disabled = true;
      });
      Next.style.display = "initial";
    });
  });
};

const updateNextButton = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
};

const showScore = () => {
  resetState();
  Question.innerHTML = `Your score ${score * 2} out of ${
    questions.length * 2
  }!`;
  Next.innerHTML = "Try again!";
  Next.style.display = "initial";
};

Next.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    updateNextButton();
  } else startQuiz();
});

startQuiz();
