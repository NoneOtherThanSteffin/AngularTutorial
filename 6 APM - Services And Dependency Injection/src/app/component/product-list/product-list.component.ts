import {Component, OnInit} from '@angular/core';
import {IProduct} from '../../models/product';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  private _listFilter: string;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    if (this._listFilter.length > 0) {
      this.filteredProducts = this.productFilter(this._listFilter);
    } else {
      this.filteredProducts = this.products;
    }
  }

  productFilter(filterString: string): IProduct[] {
    filterString = filterString.toLocaleLowerCase();
    return this.products.filter((product) =>
      (product.productName.toLocaleLowerCase().indexOf(filterString) != -1)
    );
  }

  filteredProducts: IProduct[];

  products: IProduct[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
    console.log('OnInit Called');
  }

  buttonShowHideImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(value: string): void {
    console.log('Product List: onRatingClicked(' + value + ') method invoked');
    this.pageTitle = value;
  }

}
