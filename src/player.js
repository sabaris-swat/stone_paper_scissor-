
// import React from "react";


// const Player = ({ a }) => {
//   let imageUrl = "";
//   switch (a) {
//     case "rock":
//       imageUrl = "https://th.bing.com/th?id=OIP.RXIDwoa72vz6XHjQNEk0DgHaGM&w=273&h=228&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";
//       break;
//     case "paper":
//       imageUrl = "https://th.bing.com/th?id=OIP.aiRRB7NqObBP8J2V-432pwHaF7&w=279&h=223&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"; 
//       break;
//     case "scissors":
//       imageUrl = "https://i.pinimg.com/originals/90/c7/e5/90c7e5901e9b62345d7fd9d238621b54.jpg"; 
//       break;
//     default:
//       break;
//   }

//   return (
//     <div>
//       <h2>the game</h2>
      
//       <img src={imageUrl} alt={a} />
//     </div>
//   );
// };

// export default Player;


import React, { useState, useEffect } from "react";
import "./styles.css";

const Player = ({ a }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    let intervalId;
    switch (a) {
      case "rock":
        setImageUrl("https://th.bing.com/th?id=OIP.RXIDwoa72vz6XHjQNEk0DgHaGM&w=273&h=228&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2");
        break;
      case "paper":
        setImageUrl("https://th.bing.com/th?id=OIP.aiRRB7NqObBP8J2V-432pwHaF7&w=279&h=223&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2");
        break;
      case "scissors":
        setImageUrl("https://i.pinimg.com/originals/90/c7/e5/90c7e5901e9b62345d7fd9d238621b54.jpg");
        break;
      case "computer":
        const spinInterval = () => {
          setImageUrl("https://th.bing.com/th?id=OIP.aiRRB7NqObBP8J2V-432pwHaF7&w=279&h=223&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"); 
        };
        intervalId = setInterval(spinInterval, 100); 
        setTimeout(() => {
          clearInterval(intervalId);
          setImageUrl("https://i.pinimg.com/originals/90/c7/e5/90c7e5901e9b62345d7fd9d238621b54.jpg"); 
        }, 5000); 
        return () => clearInterval(intervalId);
      default:
        break;
    }
  }, [a]);

  return (
    <div className="player">
      <img src={imageUrl} alt={a} />
    </div>
  );
};

export default Player;
