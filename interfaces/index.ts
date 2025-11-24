export interface Address {
  city: string;
  country: string;
}

export interface Host {
  name: string;
  bio: string;
  avatar: string;
}

export interface Review {
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface PropertyProps {
  name: string;
  rating: number;
  address: Address;
  image: string;
  images?: string[];
  description: string;
  category: string[];
  price: number;
  host?: Host;
  reviews: Review[];
}
