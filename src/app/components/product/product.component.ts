import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/firebaseServices/Product/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ParamMap } from '@angular/router';
import { ReviewsService } from 'src/app/firebaseServices/Reviews/reviews.service';
import { ReviewModel } from 'src/app/models/reviewsModel';
import { Subscription } from 'rxjs';
import { BagsService } from 'src/app/firebaseServices/MyBag/bags.service';
import { WishlistService } from 'src/app/firebaseServices/WishList/wishlist.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { CategoriesService } from 'src/app/firebaseServices/Category/categories.service';
import { NgAuthService } from 'src/app/Services/Authentication/ng-auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  product;
  review: ReviewModel;
  reviewNumber: number = 0;
  count: number = 1;
  prdID;
  isCustomerReviews: boolean = false;
  reviews = [];
  recommendValue: boolean =true;
  rateValue: any =1;

  subscription: Subscription[] = [];
  userID: any;
  bag: any;
  wishlist: any;
  productsInBag: any;
  productsInWishlist: any;
  categoryList: any;

  nickname:string = "";
  email :string= "";
  reviewTitle: string ="";
  reviewBody: string="";

 
  constructor(
    private productser: ProductsService,
    private activatedroute: ActivatedRoute,
    private revservece: ReviewsService,
    private bagSrv: BagsService,
    private wishSrv: WishlistService,
    private toastr: ToastrService,
    public translate: TranslateService,
    private catService: CategoriesService,
    public ngAuthService: NgAuthService) { }

  ngOnInit(): void {
    if (this.ngAuthService.isLoggedIn === true) {
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
    }
    this.activatedroute.paramMap.subscribe((params: ParamMap) => {
      let PID: string | null = params.get('PID');
      this.prdID = PID;
      this.subscription.push(this.productser.getSpcProduct(this.prdID).subscribe(data => {
        this.product = { id: data.payload.id, ...(data.payload.data() as {}) };
      })
      )
      this.subscription.push(this.revservece.getReviewsByProductId(this.prdID).subscribe(data => {
        this.reviews = data.map(e => {
          return { id: e.payload.doc.id, ...(e.payload.doc.data() as {}) };
        })
        this.reviewNumber = this.reviews.length;
      }))
    });
    this.catService.getCategories().subscribe(data => {
      this.categoryList = data.map(e => {
        return { id: e.payload.doc.id, ...(e.payload.doc.data() as {}) };
      })
    })
  }
  ngOnDestroy(): void {
    this.subscription.forEach(element => {
      element.unsubscribe();
    });
  }

  addToBag(prdID: any) {
    if (this.ngAuthService.isLoggedIn === true) {

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
      // alert('Added to cart')
      this.toastr.success(`Added to cart.`, 'Done', {
        closeButton: true,
        timeOut: 5000,
        progressBar: true
      });
    } else {
      this.toastr.error(`You need to login first.`, 'Error', {
        closeButton: true,
        timeOut: 5000,
        progressBar: true
      });
    }
  }

  getlogoByID(id: any): string {
    let x = this.categoryList?.find(element => element.id == id);
    return `${x?.logo}`
  }

  addToWishlist(prdID: any) {
    if (this.ngAuthService.isLoggedIn === true) {

      let theProducts = [...this.productsInWishlist];

      theProducts.push(prdID);

      this.wishSrv.updateWishlistByUserID(theProducts, this.userID);
      // alert('Added to wishlist')
      this.toastr.success(`Added to wishlist.`, 'Done', {
        closeButton: true,
        timeOut: 5000,
        progressBar: true
      });
    } else {
      this.toastr.error(`You need to login first.`, 'Error', {
        closeButton: true,
        timeOut: 5000,
        progressBar: true
      });
    }
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
    if (event.target.value == "true") {
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
      }
      console.log(this.review)
      this.revservece.createReview(this.review)
      var rate = this.overallRating();
      this.productser.updateRate(rate, this.prdID)
      
  
  }
  plus() {
    if (this.count >= this.product.stock)
      this.count = this.product.stock;
    else
      this.count++;
  }
  minus() {
    if (this.count <= 1) {
      this.count = 1;
    }
    else
      this.count--;
  }
  ChangeImage(img: string) {
    this.product.image = img;
  }
  overallRating() {
    var sum = 0;
    var avg;
    if (this.reviews.length > 0) {
      for (let i = 0; i < this.reviews.length; i++) {
        sum += this.reviews[i].OverallRating;
      }
      avg = sum / this.reviews.length;
      return Math.ceil(avg);
    }
    else return 0;

  }

}
