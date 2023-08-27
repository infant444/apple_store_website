import { model,Schema,Types } from "mongoose";


export interface ProductItem{
    name:string;
    img:Buffer[];
    price:number;
    // Spec?:string[];
    color:string[];
    fav:boolean;
    model:string;
    rating:number;
} 

export const productSchema= new Schema<ProductItem>({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    color:{type:[String],required:true},
    model:{type:String,required:true},
    rating:{type:Number,default:0},
    img:{type:[Buffer],contentType:String}

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
