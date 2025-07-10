import React, { useState } from "react";
import ProductList from "./components/ProductList";

export type Product = {
  sku: string;
  name: string;
  unitPrice: number;
};

const currentProducts: Product[] = [
  {sku: "A", name: "Product A", unitPrice: 50},
  {sku: "B", name: "Product B", unitPrice: 30},
  {sku: "C", name: "Product A", unitPrice: 20},
  {sku: "D", name: "Product A", unitPrice: 15}
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <ProductList products={currentProducts} />
  );
}

export default App
