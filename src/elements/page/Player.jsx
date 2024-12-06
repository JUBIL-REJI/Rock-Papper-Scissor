import playerImg from "../../assets/rock.png";
import playerImg2 from "../../assets/paper.png";
import playerImg3 from "../../assets/scissor.png";
import { useContext } from "react";
import clickContext from "../../context/clickContext";
import you from '../../assets/ymove.png'
import "./players.css";

const Player = () => {
  const { playerMove } = useContext(clickContext);

  if (playerMove === "rock") {
    return (
      <div className="flex flex-col items-center">
        <img src={you} alt="" className="m-5"/>
        <img src={playerImg} alt="" className="img-player" />
      </div>
    );
  } else if (playerMove === "paper") {
    return (
      <div className="flex flex-col items-center ">
       <img src={you} alt="" className=" m-5"/>
        <img src={playerImg2} alt="" className="img-player " />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center">
        <img src={you} alt="" className="m-5"/>
        <img src={playerImg3} alt="" className="img-player" />
      </div>
    );
  }
};

export default Player;
