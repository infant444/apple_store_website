import { Injectable } from '@angular/core';
import { sampleimg } from 'src/app/modules/data';
import { Productimg } from 'src/app/modules/product/images';

@Injectable({
  providedIn: 'root'
})
export class PorductService {

  constructor() { }

  getimg():Productimg[]{
    return sampleimg;
  }
}
