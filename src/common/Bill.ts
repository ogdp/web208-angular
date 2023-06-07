export interface IBill {
  _id: string;
  list_cart: [{ product: string; quantity: number; _id: string }];
  user_id: string;
  name: string;
  tel: string;
  email: string;
  address: string;
  price: number;
  note: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}
