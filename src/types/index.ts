export type TProduct = {
  _id?: string;
  image: string;
  title: string;
  brand: string;
  availableQuantity: number;
  price: number;
  rating: number;
  isDeleted?: boolean;
  description: string;
  slug?: string;
};
