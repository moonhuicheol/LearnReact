import { useState } from "react";

function Counter({ onTotal }) {
  const [counter, setCounter] = useState(0);

  console.log("[랜더링] counter", counter);

  const handleCounter = () => {
    setCounter((c) => c + 1); // 0 + 1
    setCounter((c) => c + 1); // 1 + 1
    setCounter((c) => c + 1); // 2 + 1
    console.log("[함수호출랜더링] counter", counter);

    if (onTotal) {
      onTotal();
    }
  };

  return (
    <>
      <button onClick={handleCounter}>Counter: {counter}</button>
    </>
  );
}

export default Counter;
