import db from "../db/db.js";
import { collection, addDoc } from "firebase/firestore";

const products = [

    {
      id: "1",
      name: "Ryzen 5 5600",
      description: "Todavía no se agregó descripción",
      price: 326,
      stock: 10,
      image: ["/img/ryzen5.jpg","/img/ryzen5_2.jpg","/img/ryzen5_3.jpg","/img/ryzen5_4.jpg"],
      category: "Cpu"
    },
    {
        id: "2",
        name: "Ryzen 7 5700",
        description: "Todavía no se agregó descripción",
        price: 359,
        stock: 10,
        image: ["/img/ryzen7.jpg","/img/ryzen7_2.jpg","/img/ryzen7_3.jpg","/img/ryzen7_4.jpg"],
        category: "Cpu"
      },
      {
        id: "3",
        name: "Intel i5 13400",
        description: "Todavía no se agregó descripción",
        price: 228,
        stock: 5,
        image: ["/img/i5.jpg","/img/i5_2.jpg","/img/i5_3.jpg","/img/i5_4.jpg"],
        category: "Cpu"
      },
      {
        id: "4",
        name: "Intel i7 13700",
        description: "Todavía no se agregó descripción",
        price: 347,
        stock: 5,
        image: ["/img/i7.jpg","/img/i7_2.jpg","/img/i7_3.jpg","/img/i7_4.jpg"],
        category: "Cpu"
      },
      {
        id: "5",
        name: "Corsair Vengeance",
        description: " 16gb (2x8) ddr4 3200",
        price: 39,
        stock: 20,
        image: ["/img/corsair16.jpg","/img/corsair16_2.jpg","/img/corsair16_3.jpg","/img/corsair16_4.jpg"],
        category: "Ram"
      },
      {
        id: "6",
        name: "Corsair Vengeance Pro",
        description: "16gb (2x8) ddr4 3200",
        price: 64,
        stock: 15,
        image: ["/img/corsairPro32.jpg","/img/corsairPro32_2.jpg","/img/corsairPro32_3.jpg","/img/corsairPro32_4.jpg"],
        category: "Ram"
      },
      {
        id: "7",
        name: "Asus Strix RTX 4060",
        description: "Todavía no se agregó descripción",
        price: 793,
        stock: 10,
        image: ["/img/strix4060.jpg","/img/strix4060_2.jpg","/img/strix4060_3.jpg","/img/strix4060_4.jpg"],
        category: "Gpu"
      },
      {
        id: "8",
        name: "MSI Radeon 6800 XT",
        description: "Todavía no se agregó descripción",
        price: 739,
        stock: 5,
        image: ["/img/radeon6800.jpg","/img/radeon6800_2.jpg","/img/radeon6800_3.jpg","/img/radeon6800_4.jpg"],
        category: "Gpu"
      },
      {
        id: "9",
        name: "Zotac RTX 3080 ti",
        description: "Todavía no se agregó descripción",
        price: 1329,
        stock: 2,
        image: ["/img/zotac3080.jpg","/img/zotac3080_2.jpg","/img/zotac3080_3.jpg","/img/zotac3080_4.jpg"],
        category: "Gpu"
      },
      {
        id: "10",
        name: "Asus Radeon 6700 XT",
        description: "Todavía no se agregó descripción",
        price: 620,
        stock: 4,
        image: ["/img/radeon6700.jpg","/img/radeon6700_2.jpg","/img/radeon6700_3.jpg","/img/radeon6700_4.jpg"],
        category: "Gpu"
      },
      {
        id: "11",
        name: "Corsair k70 Core",
        description: "Todavía no se agregó descripción",
        price: 80,
        stock: 10,
        image: ["/img/corsairkeyboard.jpg","/img/corsairkeyboard_2.jpg","/img/corsairkeyboard_3.jpg","/img/corsairkeyboard_4.jpg"],
        category: "Periferico"
      },
      {
        id: "12",
        name: "Corsair m65 Pro Wireless",
        description: "Todavía no se agregó descripción",
        price: 40,
        stock: 15,
        image: ["/img/m65pro.jpg","/img/m65pro_2.jpg","/img/m65pro_3.jpg","/img/m65pro_4.jpg"],
        category: "Periferico"
      },
      {
        id: "13",
        name: "Corsair HS80 Wireless",
        description: "Todavía no se agregó descripción",
        price: 133,
        stock: 15,
        image: ["/img/headseths80.jpg","/img/headseths80_2.jpg","/img/headseths80_3.jpg","/img/headseths80_4.jpg"],
        category: "Periferico"
      },
      {
        id: "14",
        name: "HyperX Alloy Origins 60",
        description: "Todavía no se agregó descripción",
        price: 79,
        stock: 20,
        image: ["/img/hyperxkeyboard.jpg","/img/hyperxkeyboard_2.jpg","/img/hyperxkeyboard_3.jpg","/img/hyperxkeyboard_4.jpg"],
        category: "Periferico"
      },
      {
        id: "15",
        name: "HyperX Pulsfire Raid",
        description: "Todavía no se agregó descripción",
        price: 50,
        stock: 25,
        image: ["/img/hyperxmouse.jpg","/img/hyperxmouse_2.jpg","/img/hyperxmouse_3.jpg","/img/hyperxmouse_4.jpg"],
        category: "Periferico"
      },

]

const seedProducts = async() => {
    try {
        const productsRef = collection(db, "products")
        products.map( async ( {id,...dataProduct } ) => {
            await addDoc(productsRef, dataProduct)
        })
    } catch(error){
        console.log(error)
 }}

 seedProducts()