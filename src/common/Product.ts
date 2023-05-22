export interface IProduct {
  _id: string;
  name: string;
  price: number;
  image: string;
  rate: number;
  size: string[];
  quantity: number;
  code?: string;
  description?: string;
  note?: string;
}
