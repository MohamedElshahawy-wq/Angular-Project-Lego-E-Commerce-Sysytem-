export class OrderModel {
    id?: number;
    userID: number;
    amount: number;
    date: string;
    productsIDs: number[];
}