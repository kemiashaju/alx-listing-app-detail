import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Seaside Villa",
    rating: 4.5,
    address: { city: "Lagos", country: "Nigeria" },
    image: "/images/villa-main.jpg",
    images: ["/images/villa-1.jpg", "/images/villa-2.jpg"],
    description: "A beautiful seaside villa with modern amenities.",
    category: ["Pool", "WiFi", "Air Conditioning"],
    price: 120,
    host: {
      name: "John Doe",
      bio: "Experienced host with 5 years of hospitality experience.",
      avatar: "/images/host.jpg",
    },
    reviews: [
      {
        name: "Alice",
        rating: 5,
        comment: "Amazing stay!",
        avatar: "/images/user1.jpg",
      },
      {
        name: "Bob",
        rating: 4,
        comment: "Very comfortable.",
        avatar: "/images/user2.jpg",
      },
    ],
  },
];

