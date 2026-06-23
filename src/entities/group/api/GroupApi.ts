import type IGroup from "../model/IGroup";
import type IGroupProduct from "../model/IGroupProduct";

const groups:Array<IGroup> = [
    {
        id: "1",
        name: "Shop gaming",
        description: "Get your game on",
        slug: "game",
        imageUrl: "/img/group1.jpg"
    },
    {
        id: "2",
        name: "Jeans",
        description: "Shop Fashion for less",
        slug: "jeans",
        imageUrl: "/img/group2.jpg"
    },
    {
        id: "3",
        name: "Watches",
        description: "Wireless Tech",
        slug: "watches",
        imageUrl: "/img/group3.jpg"
    },
    {
        id: "4",
        name: "Smartphones",
        description: "Wireless Tech",
        slug: "smartphones",
        imageUrl: "/img/group4.jpg"
    },
    {
        id: "5",
        name: "Tablets",
        description: "Wireless Tech",
        slug: "tablets",
        imageUrl: "/img/group5.jpg"
    },
    {
        id: "6",
        name: "Headphones",
        description: "Wireless Tech",
        slug: "headphones",
        imageUrl: "/img/group6.jpg"
    },
    {
        id: "7",
        name: "PC",
        description: "Deals on top categories",
        slug: "pc",
        imageUrl: "/img/group7.jpg"
    },
    {
        id: "8",
        name: "Men",
        description: "Most-loved watches",
        slug: "men-watches",
        imageUrl: "/img/group8.jpg"
    },
    {
        id: "9",
        name: "Laptops",
        description: "Level up your PC here",
        slug: "laptops",
        imageUrl: "/img/group9.jpg"
    },
    {
        id: "10",
        name: "Equipment",
        description: "Gear up to get fit",
        slug: "equipment",
        imageUrl: "/img/group10.jpg"
    },
    {
        id: "11",
        name: "Kitchen & dining",
        description: "New home arrivals under $50",
        slug: "kitchen_dining",
        imageUrl: "/img/group11.jpg"
    }
];
const groupProducts:Record<string,IGroupProduct> = {
    "game": {
        group: groups[0],
        products: [
            {id: "1-1", name: "Fortnite", description: "Fortnite: Battle Royale",
            price: 1.0, imageUrl: "/img/Gemini_Generated_Image_Fortnite.png", 
            stock: -1, slug: "fortnite"},
            {id: "1-2", name: "Goat Simulator", // description: "Fortnite: Battle Royale",
            price: 49.99, imageUrl: "/img/Gemini_Generated_Image_Goat_Simulator_3.png", 
            actionPrice: 29.99, stock: -1 },
        ]
    },
    "watches": {
        group: groups[2],
        products: [
            {
                id: "3-1",
                name: "Smart Watches for Women",
                description: '1.91" HD Fitness Tracker (Answer/Make Calls), IP68 Waterproof, 120+ Sport Modes with Heart Rate and Sleep Monitor, Fitness Watch for iPhone/Android',
                price: 129.99,
                imageUrl: "/img/81al6p-pKuL._AC_UY218_.jpg",                
            },
            {
                id: "3-2",
                name: "SAMSUNG Galaxy FIT 3 [2024]",
                description: '1.6" AMOLED Display | 14 Days Battery Life | 100+ Watchfaces | 100+ Exercise Modes | International Model - (Gray)',
                price: 45,
                imageUrl: "/img/41KyLKvro-L._AC_UY218_.jpg",                
            },
            {
                id: "3-3",
                name: "Samsung Galaxy Watch 8 (2025)",
                description: '40mm Bluetooth Smartwatch, Cushion Design, Fitness Tracker, Sleep Coaching, Running Coach, Energy Score, Heart Rate Tracking, Graphite [US Version, 2 Yr Warranty]',
                price: 223.01,
                imageUrl: "/img/61IpkAmVjwL._AC_UY218_.jpg",                
            },
            {
                id: "3-4",
                name: "Garmin vívoactive 5",
                description: 'Health and Fitness GPS Smartwatch, AMOLED Display, Up to 11 Days of Battery, Ivory',
                price: 169.95,
                imageUrl: "/img/610Jl4dUB7L._AC_UY218_.jpg",                
            },
            {
                id: "3-5",
                name: "Smart Watch for Men Women",
                description: '1.91"Smartwatch with Answer/Make Call, Fitness Tracker with 100+ Sport Modes, Watches IP68 Waterproof/Heart Rate/Sleep Monitor/Pedometer, Activity Tracker for Android iOS',
                price: 13.99,
                imageUrl: "/img/71y74-RugbL._AC_UY218_.jpg",                
            },
        ]
    }
}

export default class GroupApi {

    static allGroups(): Promise<Array<IGroup>> {
        return new Promise<Array<IGroup>>( (resolve, reject) => {
            setTimeout(
                () => resolve(groups),
                500
            )
        } );
    }

    static groupDetails(slug:string): Promise<IGroupProduct> {
        return new Promise<IGroupProduct>( (resolve, reject) => {
            setTimeout(
                () => {
                    let group = groups.find(g => g.slug == slug);
                    if(group) {
                        resolve({
                            group,
                            products: typeof groupProducts[slug] == 'undefined'
                            ? [] 
                            : groupProducts[slug].products,
                        });
                    }
                    else {
                        reject("Not Found");
                    }
                },
                500
            )
        } );
    }

}
/*
Д.З. Створити сторінку "Політика конфіденційності (Privacy)"
Наповнити її стандартною інформацією (дозволяється ШІ)
Розмістити посилання на неї в шаблоні сторінок для доступності
з усіх сторінок сайту
*/