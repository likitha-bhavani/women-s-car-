// front-end/products-data.js
const products = [
  {
    _id: "1",
    name: "Women's Multivitamin",
    images: ["Women's Multivitami.jpg", "Women's Multivitami2.jpg"],
    description: "Complete daily multivitamin for women's overall health, energy, and immunity.",
    ingredients: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E", "B Vitamins", "Iron", "Zinc"],
    usage: "Take 1 tablet daily after a meal.",
    warnings: "Consult your doctor if pregnant or breastfeeding.",
    reviews: [
      { user: "Asha", rating: 5, comment: "Great for daily energy!" },
      { user: "Priya", rating: 4, comment: "Helped improve my immunity." }
    ],
    requiresPrescription: false,
    category: "Multivitamin",
    price: 540
  },
  {
    _id: "2",
    name: "Metformin",
    images: ["Metformin.jpg"],
    description: "Prescription medicine for PCOS and blood sugar management in women.",
    ingredients: ["Metformin Hydrochloride"],
    usage: "Take as prescribed by your doctor.",
    warnings: "May cause nausea or stomach upset. Not for use during pregnancy unless prescribed.",
    reviews: [
      { user: "Ritu", rating: 5, comment: "Effective for PCOS!" }
    ],
    requiresPrescription: true,
    category: "Prescription",
    price: 200
  },
  {
    _id: "3",
    name: "Myo-Inositol",
    images: ["Myo-Inosito.jpg", "Myo-Inosito2.jpg"],
    description: "Supports hormonal balance, ovarian function, and menstrual health.",
    ingredients: ["Myo-Inositol", "D-Chiro Inositol"],
    usage: "Take 1-2 capsules daily or as directed by your physician.",
    warnings: "Consult your doctor if you are pregnant or breastfeeding.",
    reviews: [
      { user: "Sneha", rating: 5, comment: "Helped regulate my cycle." }
    ],
    requiresPrescription: false,
    category: "Supplement",
    price: 750
  },
  {
    _id: "4",
    name: "PCOS Balance Capsules",
    images: ["pcos.jpg"],
    description: "Herbal blend to help manage PCOS symptoms and support hormone balance.",
    ingredients: ["Shatavari", "Ashoka", "Lodhra", "Gokshur", "Manjistha", "Red Chandan"],
    usage: "Take 2 capsules daily after meals.",
    warnings: "Consult your doctor before use if you have a medical condition.",
    reviews: [
      { user: "Megha", rating: 4, comment: "Reduced my bloating and stress." }
    ],
    requiresPrescription: false,
    category: "PCOS",
    price: 699
  },
  {
    _id: "5",
    name: "Wellwoman Capsules",
    images: ["wellwomen.jpg"],
    description: "Advanced vitamin and mineral formula for women's vitality and wellbeing.",
    ingredients: ["Evening Primrose Oil", "Starflower Oil", "Vitamins", "Minerals"],
    usage: "Take 1 capsule daily with water.",
    warnings: "Do not exceed the recommended dose.",
    reviews: [
      { user: "Anjali", rating: 5, comment: "Feel more energetic!" }
    ],
    requiresPrescription: false,
    category: "Multivitamin",
    price: 630
  },
  {
    _id: "6",
    name: "OZiva HerBalance for PCOS",
    images: ["herbalance.jpg"],
    description: "Plant-based supplement for better cycle and hormonal balance in women.",
    ingredients: ["Chasteberry", "Ashoka", "Red Raspberry"],
    usage: "Mix 1 scoop in water and drink daily.",
    warnings: "Consult your doctor if you are on medication.",
    reviews: [
      { user: "Divya", rating: 4, comment: "Tastes good and works well." }
    ],
    requiresPrescription: false,
    category: "PCOS",
    price: 799
  }
  // ...add more products as needed
];