let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newBtn=document.querySelector("#newGame");
let message=document.querySelector(".message");
let msg=document.querySelector("#msg")

let turno=true;
let turnx=false;

const winPatterns=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno==true){
            box.innerHTML="o";
        }
        else{
            box.innerHTML="x"
        }
        turno=!turno;
        box.disabled=true;
        checkwinner();
    });
});

const showWinner=(winner)=>{
    msg.innerText=`congrats winnwer is ${winner}`;
    message.classList.remove("hide");
    for(let box of boxes){
        box.disabled=true;
    }
}

const checkwinner=()=>{
    for (let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos1==pos3){
                showWinner(pos1);
            }
        }

        }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const resetGame=()=>{
    enableBoxes();
    message.classList.add("hide");
}

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);