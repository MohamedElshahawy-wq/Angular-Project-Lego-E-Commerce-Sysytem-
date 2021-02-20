export class OrderModel {
    id?: any;
    userID: any;
    totalPrice: number;
    date: string;
    productsIDs: any[];
    address?: {
       city: string;
       street:string;
       zip: string;
    };
    mobilePhone:string;
}