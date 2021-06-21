import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>Hello wold! {counter}</h1>

      <button onClick={handleCounter}>Counting...</button>
    </>
  );
}

export default App;
