import { Component,OnInit } from '@angular/core';
import { Productimg } from 'src/app/modules/product/images';
import { PorductService } from 'src/app/services/product/porduct.service';

@Component({
  selector: 'app-before-login',
  templateUrl: './before-login.component.html',
  styleUrls: ['./before-login.component.css']
})
export class BeforeLoginComponent implements OnInit {

  images:Productimg[]=[];
  constructor(private productservice:PorductService){

  }
  ngOnInit(): void {
    this.images=this.productservice.getimg();
  }
}
