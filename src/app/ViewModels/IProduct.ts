export interface IProduct {
    id?: number,
    name: string,
    description: string,
    price: number,
    stock: number,
    image: string,
    images?:string[],
    available: boolean,
    rating: number,
    categoryID: number
}