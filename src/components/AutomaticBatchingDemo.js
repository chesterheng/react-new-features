import { useState } from "react";

const AutomaticBatching = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setTimeout(() => {
      setCount((count) => count + 1);
      setToggle((toggle) => !toggle);
    }, 1000);
  };

  console.log("Rendered: ", count, toggle);

  return (
    <>
      <button onClick={handleClick}>Click Me</button>
      <div>Count: {count}</div>
      <div>Toggle: {toggle.toString()}</div>
    </>
  );
};

export default AutomaticBatching;
