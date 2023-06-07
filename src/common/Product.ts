export interface IProduct {
  _id: string;
  name: string;
  image: string[];
  price: number;
  size: string[];
  quantity: number;
  description?: string;
  note?: string;
  status: string;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
}
