export interface IReveiw {
    id?:number,
    userId?:number,
    productId:number,
    OverallRating:number,
    recommend:boolean,
    reviewTitle:string,
    review:string
}