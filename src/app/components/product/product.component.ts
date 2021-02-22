import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/firebaseServices/Product/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ParamMap } from '@angular/router';
import { ReviewsService } from 'src/app/firebaseServices/Reviews/reviews.service';
import { ReviewModel } from 'src/app/models/reviewsModel';
import { Subscription } from 'rxjs';
import { BagsService } from 'src/app/firebaseServices/MyBag/bags.service';
import { WishlistService } from 'src/app/firebaseServices/WishList/wishlist.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  product;
  review: ReviewModel;
  reviewNumber:number =0;
  count:number=1;
  prdID;
  isCustomerReviews: boolean = false;
  reviews = [];
  recommendValue: boolean;
  rateValue: any;
  reviewTitle: string;
  reviewBody: string;
  subscription:Subscription[] = [];

  userID: any;
  bag: any;
  wishlist: any;
  productsInBag: any;
  productsInWishlist: any;

  constructor(
    private productser: ProductsService,
    private activatedroute: ActivatedRoute,
    private revservece: ReviewsService,
    private bagSrv: BagsService,
    private wishSrv: WishlistService) { }

  ngOnInit(): void {
    this.userID = JSON.parse(localStorage.getItem('user')).uid;
    this.subscription.push(this.bagSrv.getSpcMyBag(this.userID).subscribe(data => {
      this.bag = { id: data.payload.id, ...(data.payload.data() as {}) };

      this.productsInBag = this.bag.productsIDs;
    })
    );

    this.subscription.push(this.wishSrv.getSpcWishlist(this.userID).subscribe(data => {
      this.wishlist = { id: data.payload.id, ...(data.payload.data() as {}) };

      this.productsInWishlist = this.wishlist.productsIDs;
    })
    );
    this.activatedroute.paramMap.subscribe((params: ParamMap) => {
      let PID: string | null = params.get('PID');
      this.prdID = PID;
      this.subscription.push(this.productser.getSpcProduct(this.prdID).subscribe(data => {
        this.product = {id: data.payload.id, ...(data.payload.data() as {})};
        })
      )
      this.subscription.push(this.revservece.getReviewsByProductId(this.prdID).subscribe(data => {
        this.reviews = data.map(e => {
          return {id: e.payload.doc.id, ...(e.payload.doc.data() as {})};
        })
        this.reviewNumber = this.reviews.length;
      }))
    });
  }
  ngOnDestroy(): void {
    this.subscription.forEach(element => {
      element.unsubscribe();
    });
  }

  addToBag(prdID: any) {
    let theProducts = [...this.productsInBag];
    let prd;

    var result = theProducts.find(obj => {
      return obj.id === prdID
    })

    if (result) {
      const index = theProducts.indexOf(result);
      const totalQty = theProducts[index].qty + this.count;
      if (index > -1) {
        theProducts.splice(index, 1);
      }
      prd = {
        id: prdID,
        qty: totalQty
      }
    } else {
      prd = {
        id: prdID,
        qty: this.count
      }
    }

    
    theProducts.push(prd);

    this.bagSrv.updateBagByUserID(theProducts, this.userID);
    alert('Added to cart')
  }

  addToWishlist(prdID: any) {
    let theProducts = [...this.productsInWishlist];
    
    theProducts.push(prdID);

    this.wishSrv.updateWishlistByUserID(theProducts, this.userID);
    alert('Added to wishlist')
  }

  CustomerReviews() {
    this.isCustomerReviews = !this.isCustomerReviews;
    if (this.isCustomerReviews === true)
      document.getElementById("CustomerReviews").style.display = "block";
    else
      document.getElementById("CustomerReviews").style.display = "none";
  }
  radioforRecommendChange(event: any) {
    this.recommendValue = event.target.value;
    if(event.target.value == "true") {
      this.recommendValue = true;
    } else {
      this.recommendValue = false;
    }
  }
  radioforRatingChange(event: any) {
    this.rateValue = event.target.value;
  }
  addReview() {
    this.review = {
      productId: this.prdID,
      OverallRating: parseInt(this.rateValue),
      recommend: this.recommendValue,
      reviewTitle: this.reviewTitle,
      review: this.reviewBody,
      // userId: "0"
    }
    this.revservece.createReview(this.review).then(
      (res) => {
        console.log(res)
      },
      (err) => { console.log(err) }
    )
  }
  plus(){
    if(this.count>=this.product.stock)
      this.count=this.product.stock;
    else
      this.count++;
  }
  minus(){
    if(this.count <=1){
      this.count=1;
    }
    else
      this.count--;
  }
  ChangeImage(img:string){
    this.product.image=img;
  }

}
