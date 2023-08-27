import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Component/page/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { BeforeLoginComponent } from './Component/page/before-login/before-login.component';
import { MainpageComponent } from './Component/page/mainpage/mainpage.component';
import { SearchComponent } from './Component/module/search/search.component';
import { TagsComponent } from './Component/module/tags/tags.component';
import { SlideshowComponent } from './Component/module/slideshow/slideshow.component';
import { AddProductComponent } from './Component/Admin/page/add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BeforeLoginComponent,
    MainpageComponent,
    SearchComponent,
    TagsComponent,
    SlideshowComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
