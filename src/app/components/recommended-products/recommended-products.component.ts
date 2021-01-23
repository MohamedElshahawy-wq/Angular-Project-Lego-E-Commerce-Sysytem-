import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/ViewModels/IProduct';

@Component({
  selector: 'app-recommended-products',
  templateUrl: './recommended-products.component.html',
  styleUrls: ['./recommended-products.component.scss']
})
export class RecommendedProductsComponent implements OnInit {
  ProductList: IProduct[] = [];
  constructor() { }

  ngOnInit(): void {
    this.ProductList = [
      {
        id: 1,
        name: "Forbidden Forest: Umbridge's Encounter",
        description: "this is product 1",
        price: 29.9,
        stock: 10,
        image: "assets/images/75967.jpeg",
        available: true,
        rating: 5,
        categoryID: 1
      },
      {
        id: 2,
        name: "Fairground MF Acc. Set",
        description: "this is product 2",
        price: 12.99,
        stock: 10,
        image: "assets/images/40373.jpeg",
        available: true,
        rating: 5,
        categoryID: 1
      },
      {
        id: 3,
        name: "Botanical Accessories",
        description: "this is product 3",
        price: 3.99,
        stock: 10,
        image: "assets/images/40376.jpeg",
        available: true,
        rating: 5,
        categoryID: 1
      },
      {
        id: 4,
        name: "Bicycles",
        description: "this is product 4",
        price: 29.9,
        stock: 10,
        image: "assets/images/40313.jpeg",
        available: true,
        rating: 5,
        categoryID: 1
      }
    ]
  }

}
