import { useState, useRef } from "react";
import cross_icon from "../assets/cross.png";
import circle_icon from "../assets/circle.png";

const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [titleText, setTitleText] = useState(
    'Tic Tac Toe In <span class="text-[#26ffcb] pl-4 font-semibold">React</span>'
  );
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);

  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);

  const box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e, num) => {
    if (lock || data[num] !== "") return;

    const newData = [...data];
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_icon}'> `;
      newData[num] = "X";
    } else {
      e.target.innerHTML = `<img src='${circle_icon}'> `;
      newData[num] = "O";
    }

    setData(newData);
    setCount(count + 1);

    checkWinOrDraw(newData);
  };

  const reset = () => {
    setLock(false);
    setData(["", "", "", "", "", "", "", "", ""]);
    setCount(0);
    setTitleText(
      'Tic Tac Toe In <span class="text-[#26ffcb] pl-4  font-semibold">React</span>'
    );

    box_array.forEach((box) => {
      if (box.current) {
        box.current.innerHTML = ""; // Clear the box contents
      }
    });
  };

  const checkWinOrDraw = (newData) => {
    // Check rows
    if (
      newData[0] === newData[1] &&
      newData[1] === newData[2] &&
      newData[2] !== ""
    ) {
      won(newData[2]);
    } else if (
      newData[3] === newData[4] &&
      newData[4] === newData[5] &&
      newData[5] !== ""
    ) {
      won(newData[5]);
    } else if (
      newData[6] === newData[7] &&
      newData[7] === newData[8] &&
      newData[8] !== ""
    ) {
      won(newData[8]);
    }
    // Check columns
    else if (
      newData[0] === newData[3] &&
      newData[3] === newData[6] &&
      newData[6] !== ""
    ) {
      won(newData[6]);
    } else if (
      newData[1] === newData[4] &&
      newData[4] === newData[7] &&
      newData[7] !== ""
    ) {
      won(newData[7]);
    } else if (
      newData[2] === newData[5] &&
      newData[5] === newData[8] &&
      newData[8] !== ""
    ) {
      won(newData[8]);
    }
    // Check diagonals
    else if (
      newData[0] === newData[4] &&
      newData[4] === newData[8] &&
      newData[8] !== ""
    ) {
      won(newData[8]);
    } else if (
      newData[2] === newData[4] &&
      newData[4] === newData[6] &&
      newData[6] !== ""
    ) {
      won(newData[6]);
    }
    // Check for draw
    else if (newData.every((box) => box !== "")) {
      draw();
    }
  };

  const won = (winner) => {
    setLock(true);
    setTitleText(`Congratulations: ${winner} wins`);
    setTimeout(() => reset(), 1000); // Reset the board after 1 seconds
  };

  const draw = () => {
    setLock(true);
    setTitleText("It's a draw!");
    setTimeout(() => reset(), 1000); // Reset the board after 1 seconds
  };

  return (
    <div className="Container text-center">
      <h1 className="title mt-12 mb-4 text-white text-[60px] flex justify-center font-semibold">
        <span dangerouslySetInnerHTML={{ __html: titleText }} />
      </h1>
      <div className="board h-[600px] w-[564px] flex m-auto">
        <div className="row1">
          <div
            className="boxes flex h-44 w-44 bg-[#1f3540] border-2 border-solid border-[#0f1b21] rounded-xl cursor-pointer"
            ref={box1}
            onClick={(e) => {
              toggle(e, 0);
            }}
          ></div>
          <div
            className="boxes flex h-44 w-44 bg-[#1f3540] border-2 border-solid border-[#0f1b21] rounded-xl cursor-pointer"
            ref={box2}
            onClick={(e) => {
              toggle(e, 1);
            }}
          ></div>
          <div
            className="boxes flex h-44 w-44 bg-[#1f3540] border-2 border-solid border-[#0f1b21] rounded-xl cursor-pointer"
            ref={box3}
            onClick={(e) => {
              toggle(e, 2);
            }}
          ></div>
        </div>
        <div className="row2">
          <div
            className="boxes flex h-44 w-44 bg-[#1f3540] border-2 border-solid border-[#0f1b21] rounded-xl cursor-pointer"
            ref={box4}
            onClick={(e) => {
              toggle(e, 3);
            }}
          ></div>
          <div
            className="boxes flex h-44 w-44 bg-[#1f3540] border-2 border-solid border-[#0f1b21] rounded-xl cursor-pointer"
            ref={box5}
            onClick={(e) => {
              toggle(e, 4);
            }}
          ></div>
          <div
            className="boxes flex h-44 w-44 bg-[#1f3540] border-2 border-solid border-[#0f1b21] rounded-xl cursor-pointer"
            ref={box6}
            onClick={(e) => {
              toggle(e, 5);
            }}
          ></div>
        </div>
        <div className="row3">
          <div
            className="boxes flex h-44 w-44 bg-[#1f3540] border-2 border-solid border-[#0f1b21] rounded-xl cursor-pointer"
            ref={box7}
            onClick={(e) => {
              toggle(e, 6);
            }}
          ></div>
          <div
            className="boxes flex h-44 w-44 bg-[#1f3540] border-2 border-solid border-[#0f1b21] rounded-xl cursor-pointer"
            ref={box8}
            onClick={(e) => {
              toggle(e, 7);
            }}
          ></div>
          <div
            className="boxes flex h-44 w-44 bg-[#1f3540] border-2 border-solid border-[#0f1b21] rounded-xl cursor-pointer"
            ref={box9}
            onClick={(e) => {
              toggle(e, 8);
            }}
          ></div>
        </div>
      </div>
      <button
        className="reset w-64 h-28 border-none outline-none cursor-pointer rounded-full bg-[#1f3540] text-2xl text-[#26ffcb] mt-6 mb-12"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
