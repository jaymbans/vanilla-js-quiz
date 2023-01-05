//store all the questions in an array and initiate the first question
const questions = document.querySelectorAll('.question');

const questionCounter = document.getElementById('question-ct');

const nextButton = document.getElementById('next');
const prevButton = document.getElementById('previous');

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

  questions[questionCounter.innerHTML - 1].classList.add('active');


  if (questionCounter.innerHTML <= 1) {
    e.target.setAttribute('disabled', true)
    return
  }
}


// attach click events to button

nextButton.addEventListener('click', nextQuestion)
prevButton.addEventListener('click', previousQuestion)