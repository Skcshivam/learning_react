import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    username: "shivam ",
    age: 21,
  };

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl ">Tailwind CSS</h1>

      <Card username="Shivam" btnText="Click me" />
      <Card username="Rudra" btnText="Visit me" />
    </>
  );
}

export default App;
