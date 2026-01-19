
const btn1 = document.body.querySelector(".btn-1");
btn1.addEventListener("click",()=>{
    playGame('Rock');
});
const btn2 = document.body.querySelector(".btn-2");
btn2.addEventListener("click",()=>{
  playGame('Paper');
});
const btn3 = document.body.querySelector(".btn-3");
btn3.addEventListener("click",()=>{
 playGame('Scissor');
});
const btn4 = document.body.querySelector(".btn-4");
btn4.addEventListener("click",()=>{
  score.win=0;
  score.lose=0;
  score.tie=0;
   localStorage.removeItem("score");
   const element1= document.body.querySelector(".result-js");element1.innerHTML=" ";
   const element2 = document.body.querySelector(".choose-js");
   element2.innerHTML=" ";
   scoreUpdate();
});
 // user enter method
 let x = prompt("Enter your name : ");
document.body.querySelector(".vs").innerHTML=`${x} vs computer`;
document.body.querySelector(".player_name").innerHTML=`your name : ${x}`;
const score =JSON.parse(localStorage.getItem("score")) || {
  win : 0,
  lose : 0,
  tie : 0,
};
function scoreUpdate(){
  const element = document.body.querySelector(".score-js");
  element.innerHTML=`wins : ${score.win} losses : ${score.lose} Tie : ${score.tie}`;
}
 
scoreUpdate();
function playGame(playerMove){
  const computerMove = computerPick();
  let result =  '';
  // if playerMove is Rock
  if(playerMove === "Rock"){
    if(computerMove === "Rock"){
      result = "Tie";
    }else if(computerMove === "Paper"){
      result = `${x} lose`;
    }else if(computerMove === "Scissor"){
      result = `${x} wins`;
    }
  }
  // if playerMove is Paper 
  if(playerMove === "Paper"){
    if(computerMove === "Paper"){
      result = "Tie";
    }else if(computerMove === "Rock"){
      result = `${x} wins`;
    }else if(computerMove === "Scissor"){
       result = `${x} lose`;
    }
  }
  // if playerMove is Scissor
  if(playerMove === "Scissor"){
    if(computerMove === "Scissor"){
      result = "Tie";
    }else if(computerMove === "Rock"){
      result = `${x} lose`;
    }else if(computerMove === "Paper"){
      result = `${x} wins`;
    }
  }

  // score update 
  if(result === "Tie"){
    score.tie++;
  }else if(result === `${x} lose`){
    score.lose++;
  }else if(result === `${x} wins`){
    score.win++;
  }
 
  // save in localStorage
    localStorage.setItem("score",JSON.stringify(score));
    // update result on webpage
   const element1= document.body.querySelector(".result-js");element1.innerHTML= result;
   const element2 = document.body.querySelector(".choose-js");
   element2.innerHTML=`${x} ${playerMove}-${computerMove} computer`;
   // update score on webpage
     scoreUpdate();
}
function computerPick(){
  let randomMove = Math.random();
  let computerMove = "";
  if(randomMove>=0 && randomMove<1/3){
    computerMove = "Rock";
  }
  else if(randomMove>=1/3 && randomMove<2/3){
    computerMove = "Paper";
  }
  else if(randomMove>= 2/3 && randomMove<=1){
    computerMove = "Scissor";
  }
  return computerMove;
}
