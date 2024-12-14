var all=document.querySelectorAll(".box");
var resetBtn=document.querySelector("#harsh");
var newGameBtn=document.querySelector(".jack");
var msgContainer=document.querySelector("#new");
var msg=document.querySelector("#ms");

//var arr = [["apple","lemon"],["potato","mushroom"],["lion","toy"]];

var turnO=true;
const winpatterns=[
[0,1,2],
[3,4,5],
[6,7,8],
[1,4,7],
[2,5,8],
[0,3,6],
[0,4,8],
[2,4,6],

];

const resetGame = () => {
    turnO = true;
    enableboxes();
   // msgContainer.classList.add("hide");
  };
  


all.forEach((box) => {

    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turnO)
        {
              box.innerText="O";
              turnO=false;
        }

        else{
            box.innerText ="X";
            turnO=true;

        }
        box.disabled=true;

        checkWinner();
    });

});

const disabledboxes =() =>{  // stoping one player is winning

    for(let box of all)
    {
       box.disabled=true;
    }
};
const enableboxes =() =>{  // reset function
    for(let box of all)
    {
       box.disabled=false;
       box.innerText="";
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulations, the winner is ${winner}`;
    msgContainer.classList.remove("hide");  // Show the winner message
    disabledboxes();  // Stop interaction with the board
  };

const checkWinner= () =>{

    for(var pattern of winpatterns)
    {
   var pos1val=all[pattern[0]].innerText;
   var pos2val=all[pattern[1]].innerText;
   var pos3val=all[pattern[2]].innerText;
   
      if(pos1val !="" && pos2val !="" && pos3val !=""){
         if(pos1val===pos2val && pos2val===pos3val)
         {
             console.log("Winner",pos1val);
            document.write("winner",pos1val);
             showWinner(pos1val);
         }
      }

    }

};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);