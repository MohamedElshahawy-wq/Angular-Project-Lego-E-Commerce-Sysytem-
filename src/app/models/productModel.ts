export class ProductModel {
    id?: any;
    name?: string;
    arabicName?: string;
    arabicDescription?: string;
    description?: string;
    price?: number;
    stock?: number;
    image?: string;
    images?:string[];
    relatedProducts?:string[];
    available?: boolean;
    rating?: number;
    categoryID?: any
}