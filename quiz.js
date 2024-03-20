const quizData = [
    {
      question: "What is the capital of France?",
      answers: {
        a: "Paris",
        b: "London",
        c: "Berlin"
      },
      correctAnswer: "a"
    },
    {
      question: "Who wrote Romeo and Juliet?",
      answers: {
        a: "William Shakespeare",
        b: "Jane Austen",
        c: "Charles Dickens"
      },
      correctAnswer: "a"
    },
    // Add more questions here
  ];
  
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  
  function buildQuiz() {
    const output = [];
    quizData.forEach((currentQuestion, questionNumber) => {
      const answers = [];
      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} : ${currentQuestion.answers[letter]}
          </label>`
        );
      }
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });
    quizContainer.innerHTML = output.join("");
  }
  
  function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");
    let numCorrect = 0;
    quizData.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        answerContainers[questionNumber].style.color = "red";
      }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${quizData.length}`;
  }
  
  buildQuiz();
  submitButton.addEventListener("click", showResults);
  