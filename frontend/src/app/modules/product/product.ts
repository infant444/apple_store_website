import { Productimg } from "./images";

export class ProductItem{
  id!:string;
  name!:string;
  img!:any;
  price!:number;
  // Spec?:string[];
  color?:string[];
  fav!:boolean;
  model!:string;
  rating!:number;
}
