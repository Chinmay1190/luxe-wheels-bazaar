
export type CarProduct = {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  priceFormatted: string;
  images: string[];
  mainImage: string;
  description: string;
  color: string;
  transmission: string;
  fuelType: string;
  engine: string;
  topSpeed: string;
  acceleration: string;
  power: string;
  featured?: boolean;
  bestSeller?: boolean;
  inStock: boolean;
  year: number;
};

export type Brand = {
  id: number;
  name: string;
  logo: string;
  description: string;
};

export type Category = {
  id: number;
  name: string;
  description: string;
};

export type OrderInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};
