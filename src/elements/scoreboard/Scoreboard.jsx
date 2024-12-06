import { useContext } from "react";
import clickContext from "../../context/clickContext";

export const Scoreboard = () => {
  const { Results } = useContext(clickContext);
  if (Results === "win") {
    return (
      <picture className="flex justify-center items-center gap-3 text-xl">
        <h2 className="text-orange-600  font-bold">you won</h2>
        <img
          src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f973/512.gif"
          alt="🥳"
          className="w-28"
        />
      </picture>
    );
  } else if (Results === "loss") {
    return (
      <picture className="flex justify-center items-center gap-3 text-xl">
        <h2 className="text-orange-600  font-bold">YOU LOST</h2>
        <img
          src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f604/512.gif"
          alt="😄"
          className="w-28"
        />
      </picture>
    );
  } else if ( Results === 'tie') {
    return (
      <picture className="flex justify-center items-center gap-3 text-xl">
        <h2 className="text-orange-600  font-bold">It's  Tie</h2>
        <img
          src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f621/512.gif"
          alt="😡"
          className="w-28"
        />
      </picture>
    );
  }
};
