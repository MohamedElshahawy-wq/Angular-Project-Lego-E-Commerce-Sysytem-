export interface IOrder {
    id?: number,
    userID: number,
    amount: number,
    date: string
    productsIDs: number[]
}
