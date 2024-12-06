import "./style.css";
import img4 from "../../assets/computer/rockcomputer.png";
import img5 from "../../assets/rock.png";
import Player from "../page/Player";
import Computer from "../page/Computer";
import { useEffect, useState } from "react";
import { useContext } from "react";
import clickContext from "../../context/clickContext";
import { Scoreboard } from "../scoreboard/Scoreboard";


function Result() {
  const { setBack } = useContext(clickContext);
  const [AnimationTimeout, setAnimationTimeout] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationTimeout(true), 2000); // Reset after 2 seconds
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  const handleBack = () => {
    setBack(false);
  };

 
  return (
    <section>
      {AnimationTimeout ? (
        <div className="flex-col justify-center">
          <div className="flex justify-center items-center" >
          <Player />
          <Computer />
          </div>
          <div className="flex justify-center items-center">
          <Scoreboard/>
          </div>
          <div className="flex items-center justify-center gap-5 mt-10" >
            <button className="rounded-full p-5 bg-orange-500 text-zinc-300 " onClick={handleBack}>-Go-</button>
          </div>
        </div>
      ) : (
        <div className="animate">
          <span className="waves">
            <img src={img5} alt=""  className="img"/>
          </span>
          <span className="wave">
            <img src={img4} alt="" className="img" />
          </span>
        </div>
      )}
    </section>
  );
}

export default Result;
