import { useContext } from "react";
import clickContext from "../../context/clickContext";
import img1 from "../../assets/rock.png";
import img2 from "../../assets/paper.png";
import img3 from "../../assets/scissor.png";
import "./game.css";
import Result from "../result/Result";

const Game = () => {
  const {
    navigate,
    setComputermoves,
    setPlayerMove,
    back,
    setBack,
    setScore,
    setResult,
  } = useContext(clickContext);

  const randomNumber = Math.random();
 

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
    computerMove = "scissors";
  }

  const handlePlayerMove = (playerMove) => {
    if (playerMove === computerMove) {
      const playerResult = "tie";
      setResult(playerResult);
      setScore((prevScore) => ({ ...prevScore, ties: (prevScore.ties += 1) }));
    } else if (
      (playerMove === "rock" && computerMove === "scissors") ||
      (playerMove === "paper" && computerMove === "rock") ||
      (playerMove === "scissors" && computerMove === "paper")
    ) {
      const playerResult = "win";
      setResult(playerResult);
      setScore((prevScore) => ({ ...prevScore, wins: (prevScore.wins += 1) }));
    } else {
      const playerResult = "loss";
      setResult(playerResult);
      setScore((prevScore) => ({
        ...prevScore,
        losses: (prevScore.losses += 1),
      }));
    }
    setBack(true);
    setPlayerMove(playerMove);
    setComputermoves(computerMove);
  };

 

  return (
    <section>
     
      <div className="header-game p-10">
          <h1>ROCK PAPPER SCISSOR</h1>
          <button onClick={()=>navigate('/')} className="p-2 bg-orange-600 text-neutral-300  rounded-lg">go back</button>
        </div>
      {back ? (
        <Result /> 
      ) : (
        <div className="content-img mt-10">
          <div onClick={() => handlePlayerMove("rock")}>
            <img src={img1} alt="" className="img one" />
          </div>
          <div onClick={() => handlePlayerMove("paper")}>
            <img src={img2} alt="" className="img two" />
          </div>
          <div onClick={() => handlePlayerMove("scissors")}>
            <img src={img3} alt="" className="img three" />
          </div>
        </div>
      )}


    </section>
  );
};

export default Game;
