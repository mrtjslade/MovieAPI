let number = Math.floor(Math.random()*250)+1;
let storyline;
let title;

fetch('movies.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
            appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function appendData(data) {
    let mainContainer = document.getElementById("myData");
    //let number = Math.floor(Math.random()*data.length)+1;
    var div = document.createElement("div");
    div.innerHTML = data[number].storyline;
    title = data[number].title;
    alert(title);
    mainContainer.appendChild(div);
    // for (var i = 0; i < data.length; i++) {
    //     var div = document.createElement("div");
    //     div.innerHTML = data[i].storyline;
    //     mainContainer.appendChild(div);
    // }
}

let randomNumber = Math.floor(Math.random() * 100) + 1;
alert(randomNumber);

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {
    const userGuess = String(guessField.value);
    if (guessCount === 1) {
      guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += `${userGuess} `;
    
    if (userGuess === title) {
      lastResult.textContent = 'Congratulations! You got it right!';
      lastResult.style.backgroundColor = 'green';
      lowOrHi.textContent = '';
      setGameOver();
    } else if (guessCount === 10) {
      lastResult.textContent = '!!!GAME OVER!!!';
      lowOrHi.textContent = '';
      setGameOver();
    } else {
      lastResult.textContent = 'Wrong!';
      lastResult.style.backgroundColor = 'red';
    //   if (userGuess < randomNumber) {
    //     lowOrHi.textContent = 'Last guess was too low!';
    //   } else if (userGuess > randomNumber) {
    //     lowOrHi.textContent = 'Last guess was too high!';
    //   }
    }
  
    guessCount++;
    guessField.value = '';
    guessField.focus();
  }
  guessSubmit.addEventListener('click', checkGuess);