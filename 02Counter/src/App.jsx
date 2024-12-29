import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [Counter, setCounter] = useState(15);

  // let Counter = 15;
  let addvalue = () => {
    Counter = Counter + 1;
    if (Counter <= 20) setCounter(Counter);
    console.log(Counter);
  };

  function removevalue() {
    Counter = Counter - 1;
    if (Counter >= 0) setCounter(Counter);
  }
  return (
    <>
      <h1>React start</h1>
      <h2>Counter value : {Counter}</h2>

      <button onClick={addvalue}>Add value{Counter}</button>
      <br />
      <button onClick={removevalue}>Remove value {Counter}</button>

      <p>Footer : {Counter}</p>
    </>
  );
}

export default App;
