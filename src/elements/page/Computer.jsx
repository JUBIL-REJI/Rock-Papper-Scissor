import { useContext } from "react";
import computerImg from "../../assets/computer/rockcomputer.png";
import computerImg1 from "../../assets/computer/papercomputer.png";
import computerImg2 from "../../assets/computer/scissorcomputer.png";
import clickContext from "../../context/clickContext";
import computer from '../../assets/cmove.png'

const Computer = () => {
  const { ComputerMoves } = useContext(clickContext);
  if (ComputerMoves === "rock") {
    return (
      <div className="flex flex-col items-center">
        <img src={computer} alt="" className="m-5"/>
        <img src={computerImg} alt="" className="img" />
      </div>
    );
  } else if (ComputerMoves === "paper") {
    return (
      <div className="flex flex-col items-center">
       <img src={computer} alt="" className="m-5"/>
        <img src={computerImg1} alt="" className="img" />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center">
        <img src={computer} alt=""className="m-5"/>
        <img src={computerImg2} alt="" className="img" />
      </div>
    );
  }
};

export default Computer;
