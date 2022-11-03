import { useState } from "react";
import List from "./List";

const UseDeferredValueDemo = () => {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      <List input={input} />
    </>
  );
};

export default UseDeferredValueDemo;
