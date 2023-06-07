export interface IBill {
  _id: string;
  list_cart: [
    {
      product: {
        _id: string;
        product_id: string;
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
      };
      quantity: number;
      _id: string;
    }
  ];
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
