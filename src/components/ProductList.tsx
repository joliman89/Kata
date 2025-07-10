import React from "react";

export type Product = {
  sku: string;
  name: string;
  unitPrice: number;
}

type ProductListData = {
  products: Product[];
}

const ProductList: React.FC<ProductListData> = ({products}) => (

<div>
  <ul>{products.map((product) => (
    <li>
      {product.name} {product.unitPrice}
    </li>
  ))}</ul>
</div>
)

export default ProductList;