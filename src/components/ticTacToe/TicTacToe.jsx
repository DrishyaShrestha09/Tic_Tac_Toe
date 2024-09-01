import { useState, useRef } from 'react';
import cross_icon from '../assets/cross.png';
import circle_icon from '../assets/circle.png';

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let [titleText, setTitleText] = useState('Tic Tac Toe In <span class="text-[#26ffcb] pl-4 font-semibold">React</span>');
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);

    let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

    const toggle = (e, num) => {
        if (lock) return;
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src='${cross_icon}'> `;
            data[num] = "X";
            setCount(++count);
        } else {
            e.target.innerHTML = `<img src='${circle_icon}'> `;
            data[num] = "O";
            setCount(++count);
        }
        
        checkWin();
    }

    const reset = () => {
        setLock(false);
        data = ["", "", "", "", "", "", "", "", ""];
        setTitleText('Tic Tac Toe In <span class="text-[#26ffcb] pl-4 font-semibold">React</span>');
        box_array.forEach(e => {
            if (e.current) e.current.innerHTML = "";
        });
    }

    const checkWin = () => {
        // Check rows
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            won(data[2]);
        } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
            won(data[5]);
        } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
            won(data[8]);
        }
        // Check columns
        else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
            won(data[6]);
        } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
            won(data[7]);
        } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
            won(data[8]);
        }
        // Check diagonals
        else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
            won(data[8]);
        } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
            won(data[6]);
        }
        
    }
    

    // const won = (winner) => {
    //     setLock(true);
    //     if (winner === "X") {
    //         setTitleText(`Congratulations: <img src="${cross_icon}" /> wins`);
    //     } else {
    //         setTitleText(`Congratulations: <img src="${circle_icon}" />wins`);
    //     }
    // }

    const won = (winner) => {
        setLock(true);
        if(winner==="X")
        {
            setTitleText("Congratulations: X wins");
        }
        else{
            setTitleText("Congratulations: O wins");
        }
    }

    return (
        <div className="Container text-center">
            <h1 className="title mt-12 text-white text-[60px] flex justify-center font-semibold">
                <span dangerouslySetInnerHTML={{ __html: titleText }} />
            </h1>
            <div className="board h-[600px] w-[564px] flex m-auto">
                <div className="row1">
                    <div className="boxes flex h-44 w-44 bg-[#1f3540] border-2 border-solid border-[#0f1b21] rounded-xl cursor-pointer" ref={box1} onClick={(e) => { toggle(e, 0) }}></div>
                    <div className="boxes flex h-44 w-44 bg-[#1f3540] border-2 border-solid border-[#0f1b21] rounded-xl cursor-pointer" ref={box2} onClick={(e) => { toggle(e, 1) }}></div>
                    <div className="boxes flex h-44 w-44 bg-[#1f3540] border-2 border-solid border-[#0f1b21] rounded-xl cursor-pointer" ref={box3} onClick={(e) => { toggle(e, 2) }}></div>
                </div>
                <div className="row2">
                    <div className="boxes flex h-44 w-44 bg-[#1f3540] border-2 border-solid border-[#0f1b21] rounded-xl cursor-pointer" ref={box4} onClick={(e) => { toggle(e, 3) }}></div>
                    <div className="boxes flex h-44 w-44 bg-[#1f3540] border-2 border-solid border-[#0f1b21] rounded-xl cursor-pointer" ref={box5} onClick={(e) => { toggle(e, 4) }}></div>
                    <div className="boxes flex h-44 w-44 bg-[#1f3540] border-2 border-solid border-[#0f1b21] rounded-xl cursor-pointer" ref={box6} onClick={(e) => { toggle(e, 5) }}></div>
                </div>
                <div className="row3">
                    <div className="boxes flex h-44 w-44 bg-[#1f3540] border-2 border-solid border-[#0f1b21] rounded-xl cursor-pointer" ref={box7} onClick={(e) => { toggle(e, 6) }}></div>
                    <div className="boxes flex h-44 w-44 bg-[#1f3540] border-2 border-solid border-[#0f1b21] rounded-xl cursor-pointer" ref={box8} onClick={(e) => { toggle(e, 7) }}></div>
                    <div className="boxes flex h-44 w-44 bg-[#1f3540] border-2 border-solid border-[#0f1b21] rounded-xl cursor-pointer" ref={box9} onClick={(e) => { toggle(e, 8) }}></div>
                </div>
            </div>
            <button className="reset w-64 h-28 border-none outline-none cursor-pointer rounded-full bg-[#1f3540] text-2xl text-[#26ffcb] mt-6 mb-12" onClick={() => { reset() }}>
                Reset
            </button>
        </div>
    )
}

export default TicTacToe;
