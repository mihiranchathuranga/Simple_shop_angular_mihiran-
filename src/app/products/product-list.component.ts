/*by using export it allows to use this class to other parts of the project*/
/*we create the @Component to show that this is a component*/
/*then we import the {Component } from @angular/core*/
import {Component} from '@angular/core';

@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html', /*we provide the path to our url.we create this 
    html file in the same directory we ccreate .ts file.therefore we can use ./ */

})


export class ProductListComponent {
    

}