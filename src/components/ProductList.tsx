import React from "react";
import "../styles/common.css";
import { type ProductListData, MAX_PER_ROW } from "../config/constants";


const ProductList: React.FC<ProductListData> = ({products, addToBasket }) => {

  const rows = [];
  for (let i = 0; i < products.length; i += MAX_PER_ROW) {
    rows.push(products.slice(i, i + MAX_PER_ROW));
  }

return (
    <div>
      <h2>Products</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} style={{ display: "flex", gap: 16 }}>
            {row.map((product) => (
              <div
                key={product.sku}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: 8,
                  padding: 16,
                  minWidth: 140,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span>
                  <strong>{product.name}</strong> - £{product.unitPrice.toFixed(2)}
                </span>
                <button style={{ marginTop: 8 }} onClick={() => addToBasket(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;