import { useState } from "react";

const Content = () => {
  return (
    <>
        <button onClick={handleNameChange}>Change Name!</button>
        <button onClick={handleClick}>Age increased by:{increase}</button>
        <button onClick={handleClick2}>Click Me! 2</button>
    


    </>

  )
}

export default Content