
// import circle_icon from '../assets/icons/circle.png';
// import cross_icon from '../assets/icons/cross.png';


const TicTacToe = () => {
  return (
    <div className="Container text-center">
        <h1 className="title mt-12 text-white text-[60px] flex justify-center font-semibold">Tic Tac Toe Game In  <span className="text-[#26ffcb] pl-4 font-semibold"> React</span></h1>
        <div className="board">

        </div>
        <button className="reset w-64 h-28 border-none outline-none cursor-pointer rounded-full bg-[#1f3540] text-2xl text-[#26ffcb] mt-6 mb-12 ">Reset</button>
    </div>
  )
}

export default TicTacToe