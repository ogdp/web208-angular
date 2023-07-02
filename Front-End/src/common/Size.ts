export interface ISizeProduct {
  _id: string;
  size: ISizeProductDetails[];
}
export interface ISizeProductDetails {
  name: string;
  quantity: number;
}
