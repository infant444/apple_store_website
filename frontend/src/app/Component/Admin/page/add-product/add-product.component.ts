import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductItem } from 'src/app/modules/product/product';
import { AdminService } from 'src/app/services/Admin/admin.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  addproduct!:FormGroup;
  isSubmited=false;
 x:any;
  constructor(private formbuilder:FormBuilder,private adminService:AdminService){

  }
  ngOnInit(): void {
    this.addproduct=this.formbuilder.group({
      name:['',[Validators.required]],
      image:['',[Validators.required]],
      price:[0,Validators.required],
      color:['',Validators.required],
      model:['',Validators.required],
    })
  }
  get Fc(){
    return this.addproduct.controls;
  }

submit(event:any){
this.isSubmited=true;
if(this.addproduct.invalid){
  return;
}
const fc=this.addproduct.value;
console.log(event.target.files);
    if(event.target.files.length>0){
      for (const file of event.target.files) {
        console.log(file);
        let  img =new FormData();
        img.append('images', file);
      }

    }
var color=fc.color.split(',');
const x:ProductItem={
  id: '',
  color: color,
  name: fc.name,
  price: fc.price,
  fav: false,
  model: fc.model,
  rating: 0,
  img:''
  // img:Image,
}
console.log(x);
this.adminService.addproduct(x).subscribe((product)=>{
  console.log(product);
})
}
}
