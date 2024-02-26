import { useState } from "react";
import { StartScreen, PlayScreen } from "./Screens";

function App() {
  const [gameState, setGameState] = useState("start");

  switch (gameState) {
    case "start":
      return(
        <section className = "w-full h-screen">
          <StartScreen start={() => setGameState("play")} />
        </section>
      ) 
    case "play":
      return(
        <section className = "w-full h-screen flex justify-center items-center">
          <PlayScreen end={() => setGameState("start")} />
        </section>
      ) 
    default:
      throw new Error("Invalid game state " + gameState);
  }
}

export default App;
