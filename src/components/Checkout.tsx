import React from "react";
import type { Product } from "./ProductList";
import "../styles/common.css";

type BasketItem = {
  product: Product;
  quantity: number;
};

type BasketList = {
  basket: BasketItem[];
};

const Checkout: React.FC<BasketList> = ({ basket }) => {

  return (
    <div style={{ marginTop: 32 }} className="card">
      <h2>Basket</h2>
       {basket.length === 0 ?
       (
        <p>Your checkout is empty, why not add your favourite item(s)</p>
       ) : (   
          <div>
            {basket.map((item) => (
              <span key={item.product.sku}>
                {item.product.name} x {item.quantity} = ${(
                  item.product.unitPrice * item.quantity
                ).toFixed(2)}
              </span>
            ))}
          </div>
       )}
    </div>
  );
};

export default Checkout;
