
import { CarProduct, Brand, Category } from "@/types";

// Format price in Indian Rupees
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
};

export const brands: Brand[] = [
  {
    id: 1,
    name: "Ferrari",
    logo: "ferrari_logo.png",
    description: "Italian luxury sports car manufacturer based in Maranello, Italy.",
  },
  {
    id: 2,
    name: "Lamborghini",
    logo: "lamborghini_logo.png",
    description: "Italian manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese, Italy.",
  },
  {
    id: 3,
    name: "Rolls-Royce",
    logo: "rolls_royce_logo.png",
    description: "British luxury automobile maker headquartered in Goodwood, England.",
  },
  {
    id: 4,
    name: "Bentley",
    logo: "bentley_logo.png",
    description: "British manufacturer and marketer of luxury cars and SUVs.",
  },
  {
    id: 5,
    name: "Bugatti",
    logo: "bugatti_logo.png",
    description: "French manufacturer of high-performance luxury automobiles.",
  },
  {
    id: 6,
    name: "Aston Martin",
    logo: "aston_martin_logo.png",
    description: "British independent manufacturer of luxury sports cars and grand tourers.",
  },
  {
    id: 7,
    name: "Porsche",
    logo: "porsche_logo.png",
    description: "German automobile manufacturer specializing in high-performance sports cars, SUVs and sedans.",
  },
  {
    id: 8,
    name: "Mercedes-Benz",
    logo: "mercedes_logo.png",
    description: "German global automobile manufacturer and a division of Daimler AG.",
  },
  {
    id: 9,
    name: "BMW",
    logo: "bmw_logo.png",
    description: "German multinational company which produces luxury vehicles and motorcycles.",
  },
  {
    id: 10,
    name: "Audi",
    logo: "audi_logo.png",
    description: "German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles.",
  },
];

export const categories: Category[] = [
  {
    id: 1,
    name: "Sports Car",
    description: "High-performance cars designed for speed and agile handling.",
  },
  {
    id: 2,
    name: "Super Car",
    description: "Exotic automobiles with superior performance and technology.",
  },
  {
    id: 3,
    name: "Luxury Sedan",
    description: "Premium 4-door cars with emphasis on comfort and features.",
  },
  {
    id: 4,
    name: "Luxury SUV",
    description: "High-end sport utility vehicles with premium features.",
  },
  {
    id: 5,
    name: "GT Car",
    description: "Grand Touring cars designed for high speed and comfort over long distances.",
  },
  {
    id: 6,
    name: "Convertible",
    description: "Luxury vehicles with retractable roofs.",
  },
  {
    id: 7,
    name: "Hypercar",
    description: "Highest performing and most expensive road-legal production cars.",
  }
];

export const products: CarProduct[] = [
  {
    id: 1,
    name: "Ferrari 488 GTB",
    brand: "Ferrari",
    category: "Super Car",
    price: 48000000, // ₹4.8 Crore
    priceFormatted: formatPrice(48000000),
    mainImage: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    images: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    ],
    description: "The Ferrari 488 GTB is a mid-engine sports car produced by the Italian automobile manufacturer Ferrari. The car replaced the 458 Italia and was first officially unveiled at the 2015 Geneva Motor Show.",
    color: "Rosso Corsa",
    transmission: "7-speed dual-clutch",
    fuelType: "Petrol",
    engine: "3.9L Twin-Turbocharged V8",
    topSpeed: "330 km/h",
    acceleration: "0-100 km/h in 3.0 seconds",
    power: "661 HP",
    featured: true,
    bestSeller: true,
    inStock: true,
    year: 2022,
  },
  {
    id: 2,
    name: "Lamborghini Aventador",
    brand: "Lamborghini",
    category: "Super Car",
    price: 60000000, // ₹6.0 Crore
    priceFormatted: formatPrice(60000000),
    mainImage: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    images: [
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    ],
    description: "The Lamborghini Aventador is a mid-engine sports car produced by the Italian automotive manufacturer Lamborghini. In keeping with Lamborghini tradition, the Aventador is named after a fighting bull.",
    color: "Nero Aldebaran",
    transmission: "7-speed ISR automated manual",
    fuelType: "Petrol",
    engine: "6.5L V12",
    topSpeed: "350 km/h",
    acceleration: "0-100 km/h in 2.9 seconds",
    power: "730 HP",
    featured: true,
    bestSeller: false,
    inStock: true,
    year: 2022,
  },
  {
    id: 3,
    name: "Rolls-Royce Phantom",
    brand: "Rolls-Royce",
    category: "Luxury Sedan",
    price: 95000000, // ₹9.5 Crore
    priceFormatted: formatPrice(95000000),
    mainImage: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    images: [
      "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    ],
    description: "The Rolls-Royce Phantom is a full-sized luxury saloon manufactured by Rolls-Royce Motor Cars. It is the eighth and current generation of the Rolls-Royce Phantom, debuting in 2017, and the second launched by Rolls-Royce under BMW ownership.",
    color: "Arctic White",
    transmission: "8-speed automatic",
    fuelType: "Petrol",
    engine: "6.75L Twin-Turbocharged V12",
    topSpeed: "250 km/h (limited)",
    acceleration: "0-100 km/h in 5.3 seconds",
    power: "563 HP",
    featured: true,
    bestSeller: false,
    inStock: true,
    year: 2023,
  },
  {
    id: 4,
    name: "Bentley Continental GT",
    brand: "Bentley",
    category: "GT Car",
    price: 35000000, // ₹3.5 Crore
    priceFormatted: formatPrice(35000000),
    mainImage: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    ],
    description: "The Bentley Continental GT is a grand tourer manufactured and marketed by British auto maker Bentley Motors since 2003. It is the first car released by Bentley under Volkswagen AG management.",
    color: "Sequin Blue",
    transmission: "8-speed dual-clutch",
    fuelType: "Petrol",
    engine: "6.0L Twin-Turbocharged W12",
    topSpeed: "333 km/h",
    acceleration: "0-100 km/h in 3.7 seconds",
    power: "626 HP",
    featured: false,
    bestSeller: true,
    inStock: true,
    year: 2023,
  },
  {
    id: 5,
    name: "Bugatti Chiron",
    brand: "Bugatti",
    category: "Hypercar",
    price: 190000000, // ₹19 Crore
    priceFormatted: formatPrice(190000000),
    mainImage: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    images: [
      "https://images.unsplash.com/photo-1600712242805-5f78671b24da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    ],
    description: "The Bugatti Chiron is a mid-engine two-seater sports car developed and manufactured in Molsheim, France by French automobile manufacturer Bugatti Automobiles S.A.S.",
    color: "French Racing Blue",
    transmission: "7-speed dual-clutch",
    fuelType: "Petrol",
    engine: "8.0L Quad-Turbocharged W16",
    topSpeed: "420 km/h (limited)",
    acceleration: "0-100 km/h in 2.4 seconds",
    power: "1479 HP",
    featured: true,
    bestSeller: false,
    inStock: false,
    year: 2022,
  },
  {
    id: 6,
    name: "Aston Martin DBS Superleggera",
    brand: "Aston Martin",
    category: "GT Car",
    price: 45000000, // ₹4.5 Crore
    priceFormatted: formatPrice(45000000),
    mainImage: "https://images.unsplash.com/photo-1617654112368-315206eb9ff0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    images: [
      "https://images.unsplash.com/photo-1617654112368-315206eb9ff0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    ],
    description: "The Aston Martin DBS Superleggera is a high-performance grand tourer produced by British luxury car manufacturer Aston Martin as a replacement to the Vanquish S.",
    color: "Xenon Grey",
    transmission: "8-speed automatic",
    fuelType: "Petrol",
    engine: "5.2L Twin-Turbocharged V12",
    topSpeed: "340 km/h",
    acceleration: "0-100 km/h in 3.4 seconds",
    power: "715 HP",
    featured: false,
    bestSeller: false,
    inStock: true,
    year: 2021,
  },
  {
    id: 7,
    name: "Porsche 911 Turbo S",
    brand: "Porsche",
    category: "Sports Car",
    price: 32000000, // ₹3.2 Crore
    priceFormatted: formatPrice(32000000),
    mainImage: "https://images.unsplash.com/photo-1612825173281-9a193378be4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    images: [
      "https://images.unsplash.com/photo-1612825173281-9a193378be4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    ],
    description: "The Porsche 911 Turbo S is a high-performance sports car made by Porsche. The 911 has a distinctive design with rear-mounted flat-six engine and all round independent suspension.",
    color: "Guards Red",
    transmission: "8-speed PDK",
    fuelType: "Petrol",
    engine: "3.8L Twin-Turbocharged Flat-6",
    topSpeed: "330 km/h",
    acceleration: "0-100 km/h in 2.7 seconds",
    power: "640 HP",
    featured: false,
    bestSeller: true,
    inStock: true,
    year: 2022,
  },
  {
    id: 8,
    name: "Mercedes-Benz S-Class",
    brand: "Mercedes-Benz",
    category: "Luxury Sedan",
    price: 22000000, // ₹2.2 Crore
    priceFormatted: formatPrice(22000000),
    mainImage: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    images: [
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    ],
    description: "The Mercedes-Benz S-Class is a series of luxury vehicles produced by the German automaker Mercedes-Benz. The S-Class designation for top-of-the-line Mercedes-Benz models was officially introduced in 1972.",
    color: "Obsidian Black",
    transmission: "9-speed automatic",
    fuelType: "Petrol",
    engine: "4.0L Twin-Turbocharged V8",
    topSpeed: "250 km/h (limited)",
    acceleration: "0-100 km/h in 4.4 seconds",
    power: "496 HP",
    featured: false,
    bestSeller: false,
    inStock: true,
    year: 2023,
  },
  {
    id: 9,
    name: "BMW M8 Competition",
    brand: "BMW",
    category: "GT Car",
    price: 24000000, // ₹2.4 Crore
    priceFormatted: formatPrice(24000000),
    mainImage: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    images: [
      "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    ],
    description: "The BMW M8 is a high-performance variant of the BMW 8 Series marketed under the BMW M sub-brand. The M8 was introduced in 2019 for the 2020 model year.",
    color: "Marina Bay Blue",
    transmission: "8-speed automatic",
    fuelType: "Petrol",
    engine: "4.4L Twin-Turbocharged V8",
    topSpeed: "305 km/h (with M Driver's Package)",
    acceleration: "0-100 km/h in 3.2 seconds",
    power: "617 HP",
    featured: false,
    bestSeller: false,
    inStock: true,
    year: 2022,
  },
  {
    id: 10,
    name: "Audi RS e-tron GT",
    brand: "Audi",
    category: "Luxury Sedan",
    price: 20500000, // ₹2.05 Crore
    priceFormatted: formatPrice(20500000),
    mainImage: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    ],
    description: "The Audi RS e-tron GT is an electric executive car manufactured by Audi. It is Audi's first all-electric flagship offering, and is marketed as a higher-performance variant of the Audi e-tron GT.",
    color: "Daytona Gray",
    transmission: "2-speed automatic",
    fuelType: "Electric",
    engine: "Dual Electric Motors",
    topSpeed: "250 km/h (limited)",
    acceleration: "0-100 km/h in 3.3 seconds",
    power: "637 HP",
    featured: true,
    bestSeller: false,
    inStock: true,
    year: 2022,
  },
  {
    id: 11,
    name: "Ferrari SF90 Stradale",
    brand: "Ferrari",
    category: "Hypercar",
    price: 72000000, // ₹7.2 Crore
    priceFormatted: formatPrice(72000000),
    mainImage: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    images: [
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    ],
    description: "The Ferrari SF90 Stradale is a mid-engine PHEV (Plug-in Hybrid Electric Vehicle) supercar produced by the Italian automobile manufacturer Ferrari. The car shares its name with the SF90 Formula One car with SF90 standing for the 90th anniversary of the Scuderia Ferrari racing team.",
    color: "Giallo Modena",
    transmission: "8-speed dual-clutch",
    fuelType: "Hybrid (Petrol + Electric)",
    engine: "4.0L Twin-Turbocharged V8 + 3 Electric Motors",
    topSpeed: "340 km/h",
    acceleration: "0-100 km/h in 2.5 seconds",
    power: "986 HP (combined)",
    featured: true,
    bestSeller: true,
    inStock: false,
    year: 2022,
  },
  {
    id: 12,
    name: "Lamborghini Urus",
    brand: "Lamborghini",
    category: "Luxury SUV",
    price: 35000000, // ₹3.5 Crore
    priceFormatted: formatPrice(35000000),
    mainImage: "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    images: [
      "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    ],
    description: "The Lamborghini Urus is an SUV manufactured by Italian automobile manufacturer Lamborghini. It was unveiled on 4 December 2017 and was put on the market for the 2018 model year.",
    color: "Blu Eleos",
    transmission: "8-speed automatic",
    fuelType: "Petrol",
    engine: "4.0L Twin-Turbocharged V8",
    topSpeed: "305 km/h",
    acceleration: "0-100 km/h in 3.6 seconds",
    power: "641 HP",
    featured: false,
    bestSeller: true,
    inStock: true,
    year: 2022,
  },
  // Additional products (13-50)
  // Adding remaining products with realistic details for each
  {
    id: 13,
    name: "Rolls-Royce Ghost",
    brand: "Rolls-Royce",
    category: "Luxury Sedan",
    price: 69000000, // ₹6.9 Crore
    priceFormatted: formatPrice(69000000),
    mainImage: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    images: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    ],
    description: "The Rolls-Royce Ghost is a full-sized luxury car manufactured by Rolls-Royce Motor Cars. The Ghost is based on a heavily modified platform shared with the BMW 7 Series.",
    color: "Diamond Black",
    transmission: "8-speed automatic",
    fuelType: "Petrol",
    engine: "6.75L Twin-Turbocharged V12",
    topSpeed: "250 km/h (limited)",
    acceleration: "0-100 km/h in 4.8 seconds",
    power: "563 HP",
    featured: false,
    bestSeller: false,
    inStock: true,
    year: 2022,
  },
  {
    id: 14,
    name: "Bentley Bentayga",
    brand: "Bentley",
    category: "Luxury SUV",
    price: 42000000, // ₹4.2 Crore
    priceFormatted: formatPrice(42000000),
    mainImage: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    ],
    description: "The Bentley Bentayga is a mid-size luxury crossover SUV marketed by Bentley, beginning with model year 2016. It is the first SUV offered by Bentley.",
    color: "Cricket Ball Red",
    transmission: "8-speed automatic",
    fuelType: "Petrol",
    engine: "4.0L Twin-Turbocharged V8",
    topSpeed: "290 km/h",
    acceleration: "0-100 km/h in 4.5 seconds",
    power: "542 HP",
    featured: false,
    bestSeller: false,
    inStock: true,
    year: 2022,
  },
  {
    id: 15,
    name: "McLaren 720S",
    brand: "McLaren",
    category: "Super Car",
    price: 49000000, // ₹4.9 Crore
    priceFormatted: formatPrice(49000000),
    mainImage: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    images: [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    ],
    description: "The McLaren 720S is a sports car designed and manufactured by British automobile manufacturer McLaren Automotive. It is the second all-new car in the McLaren Super Series, replacing the 650S beginning in May 2017.",
    color: "Azores Orange",
    transmission: "7-speed dual-clutch",
    fuelType: "Petrol",
    engine: "4.0L Twin-Turbocharged V8",
    topSpeed: "341 km/h",
    acceleration: "0-100 km/h in 2.9 seconds",
    power: "710 HP",
    featured: true,
    bestSeller: false,
    inStock: true,
    year: 2022,
  }
];

// Add more products to reach at least 48
for (let i = 16; i <= 50; i++) {
  // Create variations of existing products with different years and colors
  const sourceProduct = products[Math.floor(Math.random() * 15)]; // Choose from first 15 products
  const colorOptions = ["Black", "White", "Silver", "Blue", "Red", "Green", "Yellow", "Orange", "Purple", "Grey"];
  const yearOptions = [2020, 2021, 2022, 2023];
  
  // Create variation
  products.push({
    id: i,
    name: sourceProduct.name + (i % 3 === 0 ? " Limited Edition" : i % 2 === 0 ? " Sport" : " Premium"),
    brand: sourceProduct.brand,
    category: sourceProduct.category,
    price: Math.round(sourceProduct.price * (0.85 + Math.random() * 0.3)), // Vary price by ±15%
    priceFormatted: formatPrice(Math.round(sourceProduct.price * (0.85 + Math.random() * 0.3))),
    mainImage: sourceProduct.mainImage,
    images: sourceProduct.images,
    description: sourceProduct.description,
    color: colorOptions[Math.floor(Math.random() * colorOptions.length)],
    transmission: sourceProduct.transmission,
    fuelType: sourceProduct.fuelType,
    engine: sourceProduct.engine,
    topSpeed: sourceProduct.topSpeed,
    acceleration: sourceProduct.acceleration,
    power: sourceProduct.power,
    featured: Math.random() > 0.8, // 20% chance to be featured
    bestSeller: Math.random() > 0.8, // 20% chance to be best seller
    inStock: Math.random() > 0.3, // 70% chance to be in stock
    year: yearOptions[Math.floor(Math.random() * yearOptions.length)],
  });
}

// Export helper functions for filtering products
export const getProductById = (id: number): CarProduct | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByBrand = (brand: string): CarProduct[] => {
  return products.filter((product) => product.brand === brand);
};

export const getProductsByCategory = (category: string): CarProduct[] => {
  return products.filter((product) => product.category === category);
};

export const getFeaturedProducts = (): CarProduct[] => {
  return products.filter((product) => product.featured);
};

export const getBestSellerProducts = (): CarProduct[] => {
  return products.filter((product) => product.bestSeller);
};
