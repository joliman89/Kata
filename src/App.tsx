import React, { useState } from "react";
import ProductList from "./components/ProductList";

export type Product = {
  sku: string;
  name: string;
  unitPrice: number;
};

const currentProduct: Product = {sku: "A", name: "Product A", unitPrice: 50} 

function App() {
  const [count, setCount] = useState(0)

  return (
    <ProductList product={currentProduct} />
  );
}

export default App
