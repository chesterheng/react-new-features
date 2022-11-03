import { useState, useTransition } from "react";
import { generateProducts } from "../data/generateProducts";
import ProductList from "./ProductList";

const dummyProducts = generateProducts();

function filterProducts(filterTerm) {
  if (!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter((product) => product.includes(filterTerm));
}

function ConcurrencyDemo() {
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState("");

  const filteredProducts = filterProducts(filterTerm);

  function updateFilterHandler(event) {
    startTransition(() => {
      setFilterTerm(event.target.value);
    });
  }

  return (
    <div id="app">
      <input type="text" onChange={updateFilterHandler} />
      {/* {isPending && <p style={{color: 'white'}}>Updating List...</p>} */}
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default ConcurrencyDemo;
