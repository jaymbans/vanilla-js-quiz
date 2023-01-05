//store all the questions in an array and initiate the first question
const questions = document.querySelectorAll('.question');

const questionCounter = document.getElementById('question-ct');

const nextButton = document.getElementById('next');
const prevButton = document.getElementById('previous');
const submitButton = document.getElementById('submit');
const refreshButton = document.getElementById('refresh');

questionCounter.innerHTML = 1
prevButton.setAttribute('disabled', true)


// next question should 1) update the count 2) change the question displayed
function nextQuestion(e) {
  e.preventDefault();

  questions.forEach(question => {
    question.classList.remove('active');
  })

  questionCounter.innerHTML++;

  prevButton.removeAttribute('disabled')

  questions[questionCounter.innerHTML - 1].classList.add('active');


  if (questionCounter.innerHTML >= questions.length) {
    e.target.setAttribute('disabled', true);
    submitButton.style.display = 'inline-block';
    return
  }
}

function previousQuestion(e) {
  e.preventDefault();
  questions.forEach(question => {
    question.classList.remove('active');
  })

  questionCounter.innerHTML--;
  nextButton.removeAttribute('disabled');
  nextButton.innerHTML = 'Next >';
  submitButton.style.display = 'none';

  questions[questionCounter.innerHTML - 1].classList.add('active');


  if (questionCounter.innerHTML <= 1) {
    e.target.setAttribute('disabled', true)
    return
  }
}

function submitAnswers(e) {
  e.preventDefault();
  const scoreCard = document.getElementById('score-card-container');

  const correctAnswers = [
    document.getElementById('q1-a3'),
    document.getElementById('q2-a4'),
    document.getElementById('q3-a4'),
  ];

  let score = 0;

  for (let answer of correctAnswers) {
    if (answer.checked === true) {
      score++;
    }
  }

  const bodyChildren = document.querySelectorAll('body > *');
  for (let element of bodyChildren) {
    element.style.display = 'none';
  }

  scoreCard.style.display = 'flex';
  document.getElementById('score').innerHTML = (score / 3 * 100).toFixed(0)
}

function refreshPage() {
  window.location.reload();
}

// attach click events to button

nextButton.addEventListener('click', nextQuestion)
submitButton.addEventListener('click', submitAnswers)
prevButton.addEventListener('click', previousQuestion)
refreshButton.addEventListener('click', refreshPage)