export type Product = {
  sku: string;
  name: string;
  unitPrice: number;
  icon: string;
};

export type BasketItem = {
  product: Product;
  quantity: number;
};

export type BasketList = {
  basket: BasketItem[];
  emptyBasket: () => void;
  removeFromBasket: (product: Product) => void;
};

export const currentProducts: Product[] = [
  {sku: "A", name: "Apple", unitPrice: 50, icon: "apple"},
  {sku: "B", name: "Banana", unitPrice: 30, icon: "banana"},
  {sku: "C", name: "Cheese", unitPrice: 20, icon: "cheese"},
  {sku: "D", name: "Doughnut", unitPrice: 15, icon: "doughnut"}
];

export type ProductListData = {
  products: Product[];
  addToBasket: (product: Product) => void;
}

export const MAX_PER_ROW = 2;

export type Promotion = {
  sku: string;
  groupSize: number;
  discountPrice: number;
};

export const currentPromotions: Promotion[] = [
  { sku: "A", groupSize: 3, discountPrice: 130 },
  { sku: "B", groupSize: 2, discountPrice: 45 }
];
