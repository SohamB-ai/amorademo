export type MenuItem = {
  name: string;
  desc: string;
  price: number;
  image: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

const img = (q: string) =>
  `https://images.unsplash.com/${q}?auto=format&fit=crop&w=800&q=80`;

export const menu: MenuCategory[] = [
  {
    id: "chinese",
    label: "Chinese",
    items: [
      { name: "Cottage Cheese Chilli", desc: "Crispy paneer cubes tossed in bell peppers, onions, and spicy chilli garlic sauce", price: 260, image: img("photo-1563379091339-03b21ab4a4f8") },
      { name: "Veg Spring Rolls", desc: "Golden-fried crispy rolls stuffed with seasoned julienned vegetables and glass noodles", price: 210, image: img("photo-1544025162-d76694265947") },
      { name: "Chilli Garlic Noodles", desc: "Stir-fried noodles with fresh vegetables, garlic, chilli paste, and authentic spices", price: 230, image: img("photo-1585032226651-759b368d7246") },
      { name: "Manchurian Gravy", desc: "Deep-fried vegetable balls served in a hot, tangy, soy-garlic based gravy", price: 240, image: img("photo-1626700051175-6818013e1d4f") },
    ],
  },
  {
    id: "continental",
    label: "Continental",
    items: [
      { name: "Penne Alfredo", desc: "Creamy parmesan cheese sauce with fresh herbs, garlic, and mushrooms", price: 340, image: img("photo-1645112411341-6c4fd023714a") },
      { name: "Classic Margherita Pizza", desc: "Stone-baked thin crust topped with fresh buffalo mozzarella, tomato sauce, and basil", price: 360, image: img("photo-1604068549290-dea0e4a305ca") },
      { name: "Garlic Bread with Cheese", desc: "Freshly baked artisan bread with butter, garlic, and melted mozzarella", price: 180, image: img("photo-1573140247632-f8fd74997d5c") },
      { name: "Pesto Pasta", desc: "Fresh penne tossed in rich basil pesto sauce, pine nuts, olive oil, and parmesan", price: 350, image: img("photo-1551183053-bf91a1d81141") },
    ],
  },
  {
    id: "mocktail",
    label: "Mocktail",
    items: [
      { name: "Fresh Mint Mojito", desc: "Refreshing blend of fresh mint leaves, lime juice, brown sugar, and soda", price: 190, image: img("photo-1513558161293-cdaf765ed2fd") },
      { name: "Blue Lagoon Mocktail", desc: "Classic citrusy drink with blue curaçao, lime, mint, and carbonated soda", price: 200, image: img("photo-1536935338788-846bb9981813") },
      { name: "Mango Peach Cooler", desc: "Sweet blended puree of fresh mango and peach slices topped with sparkling tonic", price: 210, image: img("photo-1540189549336-e6e99c3679fe") },
      { name: "Classic Iced Latte", desc: "Chilled double shot of espresso over milk, ice, and sweet syrup", price: 220, image: img("photo-1461023058943-07fcbe16d735") },
    ],
  },
  {
    id: "biryani",
    label: "Biryani",
    items: [
      { name: "Premium Chicken Dum Biryani", desc: "Basmati rice cooked in layers with tender chicken pieces, saffron, and house dum spices", price: 380, image: img("photo-1633945274405-b6c8069047b0") },
      { name: "Subz Paneer Dum Biryani", desc: "Fragrant rice layered with cottage cheese cubes, seasoned garden vegetables, and warm spices", price: 340, image: img("photo-1563379091339-03b21ab4a4f8") },
      { name: "Mutton Dum Biryani", desc: "Slow-cooked tender mutton marinated in rich yogurt and spices, layered with saffron rice", price: 460, image: img("photo-1626777552726-4a6b54c97e46") },
    ],
  },
  {
    id: "dessert",
    label: "Dessert",
    items: [
      { name: "Sizzling Chocolate Brownie", desc: "Warm fudge brownie served on a hot skillet with premium vanilla ice cream", price: 280, image: img("photo-1606313564200-e75d5e30476c") },
      { name: "New York Cheesecake", desc: "Decadent, creamy cheesecake slice with a sweet strawberry compote", price: 290, image: img("photo-1607301401229-e8ec9a8b7006") },
    ],
  },
];