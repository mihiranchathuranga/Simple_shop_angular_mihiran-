/*by using export it allows to use this class to other parts of the project*/
/*we create the @Component to show that this is a component*/
/*then we import the {Component } from @angular/core*/
import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';

@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html', /*we provide the path to our url.we create this 
    html file in the same directory we ccreate .ts file.therefore we can use ./ */
    styleUrls:['./product-list.component.css']

})


export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'cart';
    
    filteredProducts: IProduct[];
    /*imageWidth and imageMargin are properties of the ProductListComponent Class"*/
    products: IProduct[] = [{
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2019",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "assets/images/leaf_rake.png"
      },
      {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2019",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "assets/images/garden_cart.png"
      }
    ];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
      console.log('In OnInit');
    }

}