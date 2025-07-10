import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Checkout from "./components/Checkout";

export type Product = {
  sku: string;
  name: string;
  unitPrice: number;
};

export type CheckoutItem = {
  product: Product;
  quantity: number;
};

const currentProducts: Product[] = [
  {sku: "A", name: "Product A", unitPrice: 50},
  {sku: "B", name: "Product B", unitPrice: 30},
  {sku: "C", name: "Product A", unitPrice: 20},
  {sku: "D", name: "Product A", unitPrice: 15}
];

const uiStyle: React.CSSProperties = {
  minHeight: "56rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "sans-serif",
  margin: "2rem auto",
};

function App() {
  const [checkout] = useState<CheckoutItem[]>([]);

  return (
<div
    style={{
      maxWidth: 900,
      margin: "2rem auto",
      fontFamily: "sans-serif",
      minHeight: "80vh",
      display: "flex",
      flexDirection: "row",
      gap: "2rem",
      alignItems: "flex-start",
      justifyContent: "center",
    }}
  >
    <div style={{ flex: 2 }}>
      <h1>Shopping Checkout</h1>
      <ProductList products={currentProducts} />
    </div>
    <div style={{ flex: 1 }}>
      <Checkout checkout={checkout} />
    </div>
  </div>
  );
}

export default App
