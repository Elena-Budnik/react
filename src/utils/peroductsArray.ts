type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
}

const productsArray: Product[] = [
{       id:1,
        title: "iPhone 14 Pro",
        description: "This is iPhone 14 Pro",
        type: "phone",
        capacity: "256",
        price: 1200,
},
{   id:2,
    title: "iPhone 13 Pro",
    description: "This is iPhone 13 Pro",
    type: "phone",
    capacity: "128",
    price: 1000,
},
{   id:3,
    title: "iPhone 12 Pro",
    description: "This is iPhone 12 Pro",
    type: "phone",
    capacity: "64",
    price: 500,
},
{   id:4,
    title: "iPhone X",
    description: "This is iPhone X",
    type: "phone",
    capacity: "256",
    price: 1000,
},
{       id:5,
        title: "iPhone 6",
        description: "This is iPhone 6 ",
        capacity: "128",
        type: "phone",
        price: 600,
},
{       id:6,
        title: "iPhone 6S ",
        description: "This is iPhone 6S ",
        type: "phone",
        capacity: "64",
        price: 700,
},
]
export default productsArray