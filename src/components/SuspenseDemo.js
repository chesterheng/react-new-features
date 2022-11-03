import React, { Suspense } from "react";
import Coins from "./Coins";

const SuspenseDemo = () => {
  return (
    <>
      <h1>Coin List</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Coins />
      </Suspense>
    </>
  );
};

export default SuspenseDemo;
