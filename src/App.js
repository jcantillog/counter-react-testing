import { useEffect } from "react";
import "./App.css";
import Counter from "./components/Counter";
import makeServer from "./server";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

function App() {
  useEffect(() => {
    fetch("/api/client/features")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

export default App;
