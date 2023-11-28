export default [
    {
      question: "What _____ she usually do on weekends?",
      answers: [
        { option: "does", correct: false },
        { option: "do", correct: true },
        { option: "is", correct: false },
      ],
    },
    {
      question: "They _____ to the gym every morning.",
      answers: [
        { option: "goes", correct: false },
        { option: "go", correct: true },
        { option: "going", correct: false },
      ],
    },
    {
      question: "My sister _____ a doctor.",
      answers: [
        { option: "am", correct: false },
        { option: "is", correct: true },
        { option: "are", correct: false },
      ],
    },
    {
      question: "He _____ football every Sunday.",
      answers: [
        { option: "play", correct: false },
        { option: "plays", correct: true },
        { option: "playing", correct: false },
      ],
    },
    {
        question: "I _____ my homework in the evening.",
        answers: [
          { option: "do", correct: true },
          { option: "does", correct: false },
          { option: "doing", correct: false },
        ],
      },
      {
        question: "We usually _____ lunch at 12:30.",
        answers: [
          { option: "have", correct: true },
          { option: "has", correct: false },
          { option: "having", correct: false },
        ],
      },
      {
        question: "She _____ coffee every morning.",
        answers: [
          { option: "drink", correct: false },
          { option: "drinks", correct: true },
          { option: "drinking", correct: false },
        ],
      },
      {
        question: "My parents _____ a new car last month.",
        answers: [
          { option: "buy", correct: false },
          { option: "buys", correct: false },
          { option: "bought", correct: true },
        ],
      },
      {
        question: "The train _____ at 9:00 AM.",
        answers: [
          { option: "leave", correct: false },
          { option: "leaves", correct: true },
          { option: "leaving", correct: false },
        ],
      },
      {
        question: "I _____ English lessons twice a week.",
        answers: [
          { option: "have", correct: true },
          { option: "has", correct: false },
          { option: "having", correct: false },
        ],
      },
      {
        question: "What _____ to become an astronaut since childhood?",
        answers: [
          { option: "he wants", correct: false },
          { option: "does he wants", correct: false },
          { option: "has he wanted", correct: true },
        ],
      },
      {
        question: "The sun _____ in the east and _____ in the west.",
        answers: [
          { option: "rises / sets", correct: true },
          { option: "rise / set", correct: false },
          { option: "raising / setting", correct: false },
        ],
      },
      {
        question: "My brother, along with his friends, always _____ a lot of noise during their gaming sessions.",
        answers: [
          { option: "makes", correct: false },
          { option: "make", correct: true },
          { option: "is making", correct: false },
        ],
      },
  ];





  const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

import questions from "./questions.js";

let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";

  currentIndex = 0;
  questionsCorrect = 0;
  loadQuestion();
};

function nextQuestion(e) {
  // Impede múltiplos cliques na mesma pergunta
  if (e.target.classList.contains("answered")) {
    return;
  }

  // Marca a pergunta como respondida
  e.target.classList.add("answered");

  // Desabilita todos os botões para evitar cliques adicionais
  document.querySelectorAll(".answer").forEach((button) => {
    button.disabled = true;
  });

  // Destaca a opção correta em verde
  document
    .querySelector(`.answer[data-correct="true"]`)
    .classList.add("correct");

  // Destaca a opção escolhida pelo usuário em vermelho se estiver errada
  if (e.target.getAttribute("data-correct") !== "true") {
    e.target.classList.add("incorrect");
  }

  // Atualiza o contador de perguntas corretas apenas se a resposta for correta
  if (e.target.getAttribute("data-correct") === "true") {
    questionsCorrect++;
  }

  if (currentIndex < questions.length - 1) {
    // Aguarda um breve momento antes de passar para a próxima pergunta
    setTimeout(() => {
      currentIndex++;
      loadQuestion();
    }, 1000);
  } else {
    finish();
  }
}


function finish() {
  textFinish.innerHTML = `você acertou ${questionsCorrect} de ${questions.length}`;
  content.style.display = "none";
  contentFinish.style.display = "flex";
}

function loadQuestion() {
  spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const item = questions[currentIndex];
  answers.innerHTML = "";
  question.innerHTML = item.question;

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

    answers.appendChild(div);
  });

  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

loadQuestion();
