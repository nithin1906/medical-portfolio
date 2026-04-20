export const products = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    manufacturer: "GSK",
    category: "Medicines",
    mrp: 40,
    sellingPrice: 32,
    discount: "20%",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600",
    prescriptionRequired: false,
    rating: 4.5,
    inStock: true,
    description: "Effective relief from fever and mild to moderate pain including headache, migraine, muscle ache, period pain, and toothache. Gentle on the stomach."
  },
  {
    id: 2,
    name: "Amoxicillin 250mg",
    manufacturer: "Cipla",
    category: "Medicines",
    mrp: 120,
    sellingPrice: 96,
    discount: "20%",
    imageUrl: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=600",
    prescriptionRequired: true,
    rating: 4.8,
    inStock: true,
    description: "A penicillin antibiotic used to treat various types of bacterial infections, such as ear infections, bladder infections, pneumonia, and gonorrhea."
  },
  {
    id: 3,
    name: "Digital Blood Pressure Monitor",
    manufacturer: "Omron",
    category: "Healthcare Devices",
    mrp: 2499,
    sellingPrice: 1999,
    discount: "20%",
    imageUrl: "/assets/products/bp_monitor.png",
    prescriptionRequired: false,
    rating: 4.9,
    inStock: true,
    description: "Fully automatic upper arm blood pressure monitor designed with comfort and accuracy in mind. Large display for easy reading."
  },
  {
    id: 4,
    name: "Vitamin C Chewable Tablets",
    manufacturer: "Abbott",
    category: "Health & Wellness",
    mrp: 150,
    sellingPrice: 120,
    discount: "20%",
    imageUrl: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=600",
    prescriptionRequired: false,
    rating: 4.6,
    inStock: true,
    description: "Essential vitamin supplement to support immune system health. Chewable orange flavor tablets for easy daily consumption."
  },
  {
    id: 5,
    name: "Accu-Chek Active Test Strips",
    manufacturer: "Roche",
    category: "Diabetes Care",
    mrp: 975,
    sellingPrice: 850,
    discount: "13%",
    imageUrl: "/assets/products/accu_check.png",
    prescriptionRequired: false,
    rating: 4.7,
    inStock: true,
    description: "Accurate and reliable blood glucose test strips for use with the Accu-Chek Active meter. Requires only a small blood sample."
  }
];

export const categories = [
  { id: 1, name: "Medicine", icon: "Pill" },
  { id: 2, name: "Lab Tests", icon: "TestTube" },
  { id: 3, name: "Healthcare Devices", icon: "Stethoscope" },
  { id: 4, name: "Health & Wellness", icon: "Activity" },
  { id: 5, name: "Ayurveda", icon: "Leaf" }
];
