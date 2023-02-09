type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const productsArray: Product[] = [
{       id:1,
        title: "iPhone 14 Pro",
        description: "<p class=red>This is iPhone 14 Pro</p>",
        type: "phone",
        capacity: "256",
        price: 1200,
        image:"/images/iPhone-purple.jpg",
},
{   id:2,
    title: "iPhone 13 Pro",
    description: "This is iPhone 13 Pro",
    type: "phone",
    capacity: "128",
    price: 1000,
    image:"/images/iPhone-black.jpg",
},
{   id:3,
    title: "iPhone 12 Pro",
    description: "This is iPhone 12 Pro",
    type: "phone",
    capacity: "64",
    price: 500,
    image:"/images/iPhone-blue.jpg",
},
{   id:4,
    title: "iPhone X",
    description: "This is iPhone X",
    type: "phone",
    capacity: "256",
    price: 1000,
    image:"/images/iPhone-white.jpg",
},
{       id:5,
        title: "iPhone 6",
        description: "This is iPhone 6 ",
        capacity: "128",
        type: "phone",
        price: 600,
        image:"/images/iPhone-gold.jpg",
},
{       id:6,
        title: "iPhone 6S ",
        description: "This is iPhone 6S ",
        type: "phone",
        capacity: "64",
        price: 700,
        image:"/images/iPhone-silver.jpg",
},
]
export default productsArray