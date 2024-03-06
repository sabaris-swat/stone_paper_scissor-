// import React, { useState } from "react";
// import Player from "./player";
// import WeaponButton from "./weapon";
// import "./styles.css";

// const choice = ["rock", "paper", "scissors"];

// const App = () => {
// const [playerOne, setPlayerOne] = useState(choice[0]);
//  const [computer, setcomputer] = useState(choice[0]);
// const [winner, setWinner] = useState("");
// const startGame = () => {
//  let counter = 0;
// let gameInterval = setInterval(() => {
//   counter++;
//  setcomputer(choice[Math.floor(Math.random() * choice.length)]);
// setWinner("");
//   if (counter > 5) {
//  clearInterval(gameInterval);
//  setWinner(selectWinner());
//   }
//   }, 100);
//    };
// const selectWinner = () => {
//     if (playerOne === computer) {
//       return " it's a Tie!";
//     } else if (
//    (playerOne === "rock" && computer === "scissors") ||
//   (playerOne === "scissors" && computer === "paper") ||
//   (playerOne === "paper" && computer === "rock")
//     ) {
//  return "Player Wins!";
// } else {
//   return "computer wins";
// }
// };

// const selecta = (a) => {
//    setPlayerOne(a);
//   setWinner("");
//   };
// return (
//     <>
//    <h1 style={{ textAlign: "center" }}>Rock Paper Scissors</h1>
//  <div>
//   <Player a={playerOne} />
//  <Player a={computer} />
// </div>
//   <div>
// {choice.map((a) => (
//   <WeaponButton
//     key={a}
//    a={a}
//   selecta={selecta}
//   />
//     ))}
//   </div>
//       <div className="winner">{winner ? selectWinner() : null}</div>
//       <button type="button" onClick={startGame}>
//         Start!
//       </button>
//     </>
//   );
// };

// export default App;


import React, { useState } from "react";
import Player from "./player";
import WeaponButton from "./weapon";
import "./styles.css";

const choice = ["rock", "paper", "scissors"];

const App = () => {
  const [playerOne, setPlayerOne] = useState(choice[0]);
  const [computer, setComputer] = useState(choice[0]);
  const [winner, setWinner] = useState("");

  const startGame = () => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
      setComputer(choice[Math.floor(Math.random() * choice.length)]);
      setWinner("");
      if (counter > 5) {
        clearInterval(gameInterval);
        setWinner(selectWinner());
      }
    }, 100);
  };

  const selectWinner = () => {
    if (playerOne === computer) {
      return "It's a Tie!";
    } else if (
      (playerOne === "rock" && computer === "scissors") ||
      (playerOne === "scissors" && computer === "paper") ||
      (playerOne === "paper" && computer === "rock")
    ) {
      return "Player Wins!";
    } else {
      return "Computer Wins!";
    }
  };

  const selectWeapon = (a) => {
    setPlayerOne(a);
    setWinner("");
  };

  return (
    <div className="container">
      <h1>Rock Paper Scissors</h1>
      <div className="game">
        <div className="player">
          <Player a={playerOne} />
        </div>
        <div className="computer">
          <Player a={computer} />
        </div>
      </div>
      <div className="buttons">
        {choice.map((a) => (
          <WeaponButton key={a} a={a} selecta={selectWeapon} />
        ))}
      </div>
      <div className="winner">{winner ? selectWinner() : null}</div>
      <button type="button" onClick={startGame}>
        Start!
      </button>
    </div>
  );
};

export default App;

