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


// Master global variables to navigate throughout the document

var timeLeftEl = document.querySelector('#timeLeft');
var headingEl = document.querySelector('#heading');
var contentEl = document.querySelector('#content');
var startBtnEl = document.querySelector('#start');
var initialsEl = document.querySelector('#initials');
var timer;

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

// Start button event listener to begin the timer, also logic for ending the game

startBtnEl.addEventListener('click', function (event) {
  timeLeftEl.textContent = timeLeft;
  
  event.preventDefault();

  timer = setInterval(function () {
    timeLeft--;
    timeLeftEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval (timer);
      gameOver();
    }
  }
  , 1000);
  renderNextQuestion(0);
})

// Event listener to scroll through questions and calculate score and/or time penalties
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
        if (indexofCurrentQuestion === 5) {
          clearInterval (timer);
          timeLeft === 0;
          gameOver ();
        } else {
        renderNextQuestion (questions   [indexofCurrentQuestion]);}
       } else {
        timeLeft = timeLeft - 10;
        indexofCurrentQuestion++;
        console.log (indexofCurrentQuestion);
        if (indexofCurrentQuestion === 5) {
          clearInterval (timer);
          timeLeft === 0;
          gameOver ();
        } else {
        renderNextQuestion (questions   [indexofCurrentQuestion]);}
      }
    }
  }
  );

// Game over function
function gameOver () {
  timeLeftEl.textContent = timeLeft;
  headingEl.innerHTML = 'Congratulations!';
  contentEl.innerHTML = 'Your high score is: ' + score + '.' + ' Please input your intials: ';
  var initialsInputEl = document.createElement('input');
    initialsEl.type = 'text';
    initialsEl.name = 'initials';
    initialsEl.appendChild(initialsInputEl);
    // TODO - Create button to accept initial input and log output to the screen along with the game score
  var initialsButtonEl = document.createElement('button');
    initialsButtonEl.textContent('Send initials');
  initialsEl.addEventListener('click', function (event) {
    event.preventDefault();

    initialsEl.innerHTML = initialsInputEl + ' ' + score;
  }
  )

  // initialsEl.innerHTML = initialsInputEl + ' ' + score;
  console.log('Game over.');
}