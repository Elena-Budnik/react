type Product = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
}

const productsArray: Product[] = [
    {
        title: "iPhone 14 Pro",
        description: "This is iPhone 14 Pro",
        type: "phone",
        capacity: "256",
        price: 1200,
},
{
    title: "iPhone 13 Pro",
    description: "This is iPhone 13 Pro",
    type: "phone",
    capacity: "128",
    price: 1000,
},
{
    title: "iPhone 12 Pro",
    description: "This is iPhone 12 Pro",
    type: "phone",
    capacity: "64",
    price: 500,
},
{
    title: "iPhone X",
    description: "This is iPhone X",
    type: "phone",
    capacity: "256",
    price: 1000,
},
{
title: "iPhone 6",
description: "This is iPhone 6 ",
type: "phone",
capacity: "128",
price: 600,
},
{
title: "iPhone 6S ",
description: "This is iPhone 6S ",
type: "phone",
capacity: "64",
price: 700,
},
]
export default productsArray