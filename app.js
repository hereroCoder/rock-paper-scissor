const user= document.getElementById('user');
const computer= document.getElementById('computer');
const result= document.getElementById('result');

//const possibleChoices= document.querySelectorAll('button');

const rock= document.getElementById('rock');
const paper= document.getElementById('paper');
const scissors= document.getElementById('scissors');


const choices = ['rock','paper','scissors'];
let machineChoice;
let numChoice;

function computerChoice(){
  numChoice = Math.floor(Math.random()*3);
  machineChoice= choices[numChoice];
  computer.innerHTML = machineChoice;
}



rock.addEventListener('click', function(){
  user.innerHTML=  'rock';
  computerChoice();
  if(machineChoice=='scissors'){
    result.innerHTML='You Won';
  }
  else if(machineChoice=='paper'){
     result.innerHTML='You Lost';
  }
  
  else{
    result.innerHTML='Draw';
  }
});

paper.addEventListener('click', function(){
  user.innerHTML=  'paper';
  computerChoice(); 
  if(machineChoice=='scissors'){
    result.innerHTML='You Lost';
  }
  else if(machineChoice=='rock'){
     result.innerHTML='You Won';
  }
  
  else{
    result.innerHTML='Draw';
  }
});

scissor.addEventListener('click', function(){
  user.innerHTML=  'scissor';
  computerChoice();
  
   if(machineChoice=='paper'){
    result.innerHTML='You Won';
  }
  else if(machineChoice=='rock'){
     result.innerHTML='You Lost';
  }
  
  else{
    result.innerHTML='Draw';}
});

//console.log(computerChoice());
//rock wins againsT scissors
//paper wins against rock
//scissors win against paper

