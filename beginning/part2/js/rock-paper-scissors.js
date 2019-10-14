var user = prompt("Please enter your choice rock, paper or scissors?");
var computer = Math.random();
if (computer <0.34){
    computer = "rock";
}else if(computer <=0.67){
    computer = "paper";
}
else{
    computer = "scissors";
}

playGame(user, computer);


 function playGame(user,computer){
    "use strict";
     if(user!="paper" && user!="rock" && user!="scissors"){
         alert("Please enter a valid choice! ");
         window.location.reload();
     }

    if(user===computer){
        alert( "It is a tie!");
    }
   else 
    if(user==="paper"){
        if(computer==="rock"){
            alert( "paper wins");
        }
        else{
            alert( "scissors wins");
        }
    }
    else
    if(user==="rock"){
        if(computer==="scissors"){
            alert("rock wins");
        }
        else{
            alert( "paper wins");
        }
    }else
    if(user==="scissors"){
        if(computer==="rock"){
            alert( "rock wins");
        }
        else{
            alert( "scissors wins");
        }
    }
 }
