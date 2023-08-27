import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeforeLoginComponent } from './Component/page/before-login/before-login.component';
import { MainpageComponent } from './Component/page/mainpage/mainpage.component';
import { AddProductComponent } from './Component/Admin/page/add-product/add-product.component';

const routes: Routes = [
  {path:"home",component:BeforeLoginComponent},
  {path:"",component:MainpageComponent},
  {path:"admin/product/addproduct",component:AddProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
