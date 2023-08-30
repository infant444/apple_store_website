import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ADD_PRODUCT } from 'src/app/modules/content/content';
import { ProductItem } from 'src/app/modules/product/product';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  addproduct(x:any):Observable<ProductItem>{
    return this.http.post<ProductItem>(ADD_PRODUCT,x);
  }
}
