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
  images: any;

  constructor(private formbuilder:FormBuilder,private adminService:AdminService){

  }
  ngOnInit(): void {
    this.addproduct=this.formbuilder.group({
      name:['',[Validators.required]],
      image:['',[Validators.required]],
      price:[0,Validators.required],
      color:['',Validators.required],
      model:['',Validators.required],
      qty:['',Validators.required],
    })
  }
  get Fc(){
    return this.addproduct.controls;
  }


  change(event:any){

    console.log(event.target.files);
    if(event.target.files.length>0){
this.images=event.target.files;

    }
  }
submit(){
this.isSubmited=true;
// if(this.addproduct.invalid){
//   return;
// }
const fc=this.addproduct.value;
const formdata =new FormData();

for(let x of this.images){
  console.log(x.webkitRelativePath);
  formdata.append('file',x);
}
console.log(formdata.getAll('file'))
formdata.append('name',fc.name);



var color=fc.color.split(',');
formdata.append('color',color);
formdata.append('price',fc.price);
formdata.append('model',fc.model);
formdata.append('qty',fc.qty);

// const x:ProductItem={
//   id: '',
//   color: color,
//   name: fc.name,
//   price: fc.price,
//   fav: false,
//   model: fc.model,
//   rating: 0,
//   // img:formdata
//   img:formdata.getAll('file'),
// }

// console.log(x);
this.adminService.addproduct(formdata).subscribe((product)=>{
  console.log(product);
})
}
}
