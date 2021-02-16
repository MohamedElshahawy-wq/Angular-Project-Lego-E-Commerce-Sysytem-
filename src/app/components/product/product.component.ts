import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/Products/products.service';
import { IProduct } from 'src/app/ViewModels/IProduct';
import { ActivatedRoute, Router } from '@angular/router';
import { ParamMap } from '@angular/router';
import { ReviewsService } from 'src/app/Services/Reviews/Reviews.service';
import { IReveiw } from 'src/app/ViewModels/iReveiw';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: IProduct;
  review: IReveiw;
  reviewNumber:number =0;
  count:number=1;
  prdID: number = 0;
  isCustomerReviews: boolean = false;
  reviews: IReveiw[] = [];
  recommendValue: boolean;
  rateValue: number;
  reviewTitle: string;
  reviewBody: string;
  constructor(
    private productser: ProductsService,
    private activatedroute: ActivatedRoute,
    private revservece: ReviewsService) { }
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((params: ParamMap) => {
      let PID: string | null = params.get('PID');
      this.prdID = PID ? parseInt(PID) : 0;
      this.productser.getProductByID(this.prdID).subscribe((res) => {
        this.product = res;
      })
    });
    this.activatedroute.paramMap.subscribe((params: ParamMap) => {
      let PID: string | null = params.get('PID');
      this.prdID = PID ? parseInt(PID) : 0;
      this.revservece.getReviewsByProductId(this.prdID).subscribe((res) => {
        this.reviews = res;
        this.reviewNumber=this.reviews.length;
      })
    });
    
  }
  CustomerReviews() {
    this.isCustomerReviews = !this.isCustomerReviews;
    console.log(this.isCustomerReviews)
    if (this.isCustomerReviews === true)
      document.getElementById("CustomerReviews").style.display = "block";
    else
      document.getElementById("CustomerReviews").style.display = "none";
  }
  radioforRecommendChange(event: any) {
    this.recommendValue = event.target.value;
  }
  radioforRatingChange(event: any) {
    this.rateValue = event.target.value;
  }
  addReview() {
    this.review = {
      "productId": this.prdID, "OverallRating": this.rateValue, "recommend": this.recommendValue,
      "reviewTitle": this.reviewTitle, "review": this.reviewBody
    }
    this.revservece.addReview(this.review).subscribe(
      (res) => {
        console.log(res)
      },
      (err) => { console.log(err) }
    )
  }
  plus(){
    if(this.count>=3)
      this.count=3;
    else
      this.count++;
  }
  minus(){
    if(this.count ===1){
      this.count=1;
    }
    else
      this.count--;
  }
  addToBag(){
    //this.count
  }
  ChangeImage(img:string){
    this.product.image=img;
  }

}
