export interface Cake {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  flavors: string[];
  sizes: string[];
}

export interface CartItem extends Cake {
  quantity: number;
  selectedFlavor: string;
  selectedSize: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}