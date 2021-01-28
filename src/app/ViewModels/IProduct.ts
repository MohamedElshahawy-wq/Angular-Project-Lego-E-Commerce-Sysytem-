export interface IProduct {
    id?: number,
    name: string,
    description: string,
    price: number,
    stock: number,
    image: string,
    available: boolean,
    rating: number,
    categoryID: number
}