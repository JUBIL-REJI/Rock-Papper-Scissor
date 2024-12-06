import { useState } from "react";
import clickContext from "./clickContext";
import { useNavigate } from "react-router-dom";


export const ContextProvider = ({ children }) => {
  const [LetGo, setLetsGo] = useState(false);
  const [back, setBack] = useState(false);
  const [Results, setResult] = useState("");
  const [Score, setScore] = useState({
    wins: 0,
    losses: 0,
    ties: 0,
  });
  const navigate = useNavigate();
 

  const [playerMove, setPlayerMove] = useState("");
  const [ComputerMoves, setComputermoves] = useState("");
  return (
    <clickContext.Provider
      value={{
        LetGo,
        setLetsGo,
        navigate,
        playerMove,
        setComputermoves,
        setPlayerMove,
        ComputerMoves,
        back,
        setBack,
        Results,
        setResult,
        Score,
        setScore,
      }}
    >
      {children}
    </clickContext.Provider>
  
  );
};
