// Accessing the element first
let boxes = document.querySelectorAll(".box");
let resultbtn = document.querySelector("#id");
let newbutton = document.querySelector("#resetbtn");
let newgamebtn = document.querySelector("#btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// check the value wheather it starts with X or O
let turnO = true;

// consider all the chances of winning
const winchances = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetgame = () => {
  turnO = true;
  enableboxes();
  msgcontainer.classList.add("hide");
};

const disabledboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = "true";

    checkwinner();
  });
});
const showWinner = (winner) => {
  msg.innerText = `Congratulations,Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disabledboxes();
};

// check the winner with given winchances and the boxes
const checkwinner = () => {
  for (let pattern of winchances) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner", pos1val);
        showWinner(pos1val);
      }
    }
  }
};
newgamebtn.addEventListener("click", resetgame);
newbutton.addEventListener("click", resetgame);
