import { useState } from "react";

const Content = () => {
  const [numbers, setNumbers] = useState(0);

  const increaseClick = () => {
    setNumbers((prevNumbers) => prevNumbers + 1);
  };

  const decreaseClick = () => {
    if (numbers > 0) {
      setNumbers((prevNumbers) => prevNumbers - 1);
    }
  };

  const resetCounter = () => {
    setNumbers(0);
  };

  return (
    <>
      <main>

      <div className="displayNumber">
                    Current Number: {numbers}
                </div>
        <button onClick={increaseClick}>{+1}</button>
        <button onClick={decreaseClick}>{-1}</button>
        <button onClick={resetCounter}>Reset Counter</button>
      </main>
    </>
  );
};

export default Content;
