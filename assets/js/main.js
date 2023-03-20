// Variables for HTML

// list of all questions, choices, and answers

var questions = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses',
    },
    {
      title: 'Arrays in JavaScript can be used to store ____.',
      choices: [
        'numbers and strings',
        'other arrays',
        'booleans',
        'all of the above',
      ],
      answer: 'all of the above',
    },
    {
      title:
        'String values must be enclosed within ____ when being assigned to variables.',
      choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
      answer: 'quotes',
    },
    {
      title:
        'A very useful tool used during development and debugging for printing content to the debugger is:',
      choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
      answer: 'console.log',
    },
  ];


var timeLeftEl = document.querySelector('#timeLeft');
var headingEl = document.querySelector('#heading');
var contentEl = document.querySelector('#content');
var startBtnEl = document.querySelector('#start');
var timer;

// var timerElement = document.querySelector(".timer-count");

// var startBtn = document.querySelector(".start-button");

// Timer and score variables
var indexofCurrentQuestion = 0;
var timeLeft = 60;
var score = 0;
var currentQuestion = questions[indexofCurrentQuestion];

// function to render the next question

function renderNextQuestion() { // question => object
  contentEl.innerHTML = '';
    var currentQuestion = questions[indexofCurrentQuestion];

    headingEl.textContent = currentQuestion.title;
    
    for (var i = 0; i < currentQuestion.choices.length; i++) {
      var buttonEl = document.createElement('button');
      buttonEl.setAttribute('class', 'choice');
      buttonEl.textContent = currentQuestion.choices[i];
      contentEl.appendChild(buttonEl);
    }
}


startBtnEl.addEventListener('click', function (event) {
  timeLeftEl.textContent = timeLeft;
  
  event.preventDefault();

  timer = setInterval(function () {
    timeLeft--;
    timeLeftEl.textContent = timeLeft;

    if (timeLeft === 0) {
      // TODO build the rest of the game over logic
      clearInterval (timer);
      clearTimeout();
    } else if (timeLeft < 0) {
      timeLeft === 0;
      clearInterval (timer);
      clearTimeout();
    }
  }
  , 1000);
  renderNextQuestion(0);
})


contentEl.addEventListener('click', function (event) {
  var currentQuestion = questions[indexofCurrentQuestion];
  console.log(indexofCurrentQuestion);
  
  event.preventDefault();

    if (event.target.matches('.choice')) {
    console.log (event.target.textContent);
    console.log (currentQuestion.answer);

    if (event.target.textContent === currentQuestion.answer) {
      score = score + 10;
      console.log (score);
      indexofCurrentQuestion++;
      console.log (indexofCurrentQuestion);
      renderNextQuestion[indexofCurrentQuestion];
    } else {
      timeLeft = timeLeft - 10;
      indexofCurrentQuestion++;
      console.log (indexofCurrentQuestion);
      renderNextQuestion (questions[indexofCurrentQuestion]);
    }
  }
});
