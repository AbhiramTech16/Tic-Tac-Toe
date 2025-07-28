let boxes = document.querySelectorAll(".box");
let newbutton = document.querySelector("#resetbtn");
let newgamebtn = document.querySelector("#btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = false; // X starts

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
  boxes.forEach((box) => (box.disabled = true));
};

const enableboxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};

const showWinner = (winner) => {
  msg.innerText = `🎉 Congratulations! Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disabledboxes();
};

const checkDraw = () => {
  let isDraw = true;
  boxes.forEach((box) => {
    if (box.innerText === "") {
      isDraw = false;
    }
  });

  if (isDraw) {
    msg.innerText = "It's a Draw!";
    msgcontainer.classList.remove("hide");
  }
};

const checkwinner = () => {
  for (let pattern of winchances) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val && pos1val === pos2val && pos2val === pos3val) {
      showWinner(pos1val);
      return;
    }
  }

  checkDraw();
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

newgamebtn.addEventListener("click", resetgame);
newbutton.addEventListener("click", resetgame);
