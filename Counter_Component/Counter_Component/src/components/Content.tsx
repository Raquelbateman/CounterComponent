import { useState } from "react";

const Content = () => {
  return (
    <>
        <button onClick={handleNameChange}></button>
        <button onClick={handleClick}>Increase{increase}</button>
        <button onClick={handleClick2}>Decrease</button>
    


    </>

  )
}

export default Content