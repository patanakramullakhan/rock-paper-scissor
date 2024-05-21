let score = JSON.parse (localStorage.getItem ('score'))  || {
  win : 0,
  loose: 0,
  tie : 0,
}; 


scoreElement ();


/* if (score === null) {
  score = {
    win : 0,
    loose: 0,
    tie : 0,
  }
};*/


let isAutoPlaying = false;
let setIntervalID;

function autoPlay () {

if(!isAutoPlaying) {
  setIntervalID = setInterval(function (){
  const userMove = randomMove();
  function2(userMove);
} , 1000);
isAutoPlaying = true;
}else{
  clearInterval(setIntervalID);
  isAutoPlaying = false;
}
}

function function2 (userMove){
  
const computerMove = randomMove();

let result ='';


if(userMove==='rock'){
  if(computerMove === 'rock'){
     result = 'tie';
  }else if (computerMove === 'paper'){
    result = 'you loose';
  }else if(computerMove==='scissor'){
    result='you win';
  }
}
else if (userMove==='paper'){
  if(computerMove === 'rock'){
    result = 'you win';
  }else if (computerMove === 'paper'){
    result = 'tie';
  }else if(computerMove==='scissor'){
    result='you loose';
  } 
}
else if(userMove==='scissor'){
  if(computerMove === 'rock'){
    result = 'you loose';
  }else if (computerMove === 'paper'){
    result = 'you win';
  }else if(computerMove==='scissor'){
    result='tie';
  }
}



if (result ==='you win') {
  score.win = score.win + 1;
} else if (result === 'you loose') {
  score.loose += 1 ;
} else if (result === 'tie') {
  score.tie = score.tie + 1;
}

localStorage.setItem('score' , JSON.stringify(score));

scoreElement ();


document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = `you
  <img src=" ${userMove}-emoji.png">
  <img src=" ${computerMove}-emoji.png"> computerMove`;

}

function scoreElement () {
document.querySelector('.js-score')
 .innerHTML = `win: ${score.win}, loose: ${score.loose}, tie: ${score.tie}`
}

function randomMove(){
  const randomNumber= Math.random();

  let computerMove = '';

  if(randomNumber>=0 && randomNumber<1/3){
    computerMove = 'rock';
  }else if(randomNumber>= 1/3 && randomNumber<2/3){
    computerMove = 'paper';
  }else if(randomNumber>=2/3 && randomNumber<1){
    computerMove = 'scissor';
  }
  return computerMove;
}