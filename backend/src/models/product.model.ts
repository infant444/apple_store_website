import { model,Schema,Types } from "mongoose";

export interface image{
    img:any;
}

export const imageSchema= new Schema<image>({
    img:{data:Buffer,contentType:String},
    
})
export interface ProductItem{
    name:string;
    img:image[];
    price:number;
    // Spec?:string[];
    color:string[];
    fav:boolean;
    model:string;
    rating:number;
    qty:number;
} 

export const productSchema= new Schema<ProductItem>({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    color:{type:[String],required:true},
    model:{type:String,required:true},
    rating:{type:Number,default:0},
    img:{type:[imageSchema],required:true},
    qty:{type:Number,default:1}


},
{
    timestamps: true,
    toJSON:{
        virtuals: true
    },
    toObject:{
        virtuals: true
    }
});
export const ProductModel=model<ProductItem>('Product',productSchema);
