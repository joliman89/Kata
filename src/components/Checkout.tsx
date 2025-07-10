import React from "react";
import type { Product } from "./ProductList";
import "../styles/common.css";

type BasketItem = {
  product: Product;
  quantity: number;
};

type BasketList = {
  basket: BasketItem[];
  emptyBasket: () => void;
};

const Checkout: React.FC<BasketList> = ({ basket, emptyBasket }) => {

  return (
    <div style={{ marginTop: 32 }} className="card">
      <h2>Basket</h2>
       {basket.length === 0 ?
       (
        <div style={{
                  border: "1px solid #ccc",
                  borderRadius: 8,
                  padding: 16,
                  minWidth: 200,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}>
        <p>Your basket is empty, why not add your favourite item(s)</p>
        </div>
       ) : (   
          <div style={{
                  border: "1px solid #ccc",
                  borderRadius: 8,
                  padding: 16,
                  minWidth: 200,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}>
            {basket.map((item) => (
              <span key={item.product.sku}>
                {item.product.name} x {item.quantity} = ${(
                  item.product.unitPrice * item.quantity
                ).toFixed(2)}
              </span>
            ))}
            <button onClick={emptyBasket}>Empty Basket</button>
          </div>
       )}
    </div>
  );
};

export default Checkout;
