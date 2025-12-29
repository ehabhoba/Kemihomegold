
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  categories: string;
  sku: string;
  slug: string;
  thumb: string;
  images: string; // Comma separated or single string
  is_free_shipping: boolean;
  quantity?: number;
}

export interface CartItem extends Product {
  cartQuantity: number;
}

export interface OrderDetails {
  customerName: string;
  phoneNumber: string;
  address: string;
  city: string;
}
