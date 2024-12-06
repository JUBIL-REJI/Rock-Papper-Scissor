import { useContext } from "react";
import "./home.css";
import clickContext from "../../context/clickContext";
function Home() {
  const { navigate } = useContext(clickContext);

  return (
    <>
      <div className="">
        <div className="header text-4xl font-bold p-10">
          <h1>ROCK PAPPER SCISSOR</h1>
        </div>

        <div className="main">
          <p className="cursor typewriter-animation">
            So you are going to challenge Me..
          </p>
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f92d/512.gif"
            alt="🥱"
            className="img-emoji"
          />
        </div>
        <div className="manage">
          <button className="btn-go" onClick={() => navigate("/game")}>
            Ok lets go --{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
