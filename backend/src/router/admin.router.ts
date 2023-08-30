import Router from 'express';
import asynceHandler from 'express-async-handler';
import multer from "multer";
import { ProductItem, ProductModel, image } from '../models/product.model';

const router=Router();

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null,'./uploads/')
    },
    filename:(req, file, callback)=>{
        callback(null,new Date().toISOString()+'-'+file.originalname)
    }
});

const upload = multer({ 
    storage: storage,
    limits:{fieldSize:1024*1024}
 });

router.post('/addproduct',upload.array("file"),asynceHandler(
    async (req, res) => {
    const { name, price, color, model,qty } = req.body;
    console.log("X");
    try{
        // if(img.length<0){
        //     res.status(404).send("wrong");
        //     return;
        // }
        // console.log(img);
        const img=req.files as Express.Multer.File[];
        const img1=img;
        console.log(img);
        console.log();
        var i=0
       
            // var x:image[]=[
                
            // ]
        
       
          
        
          const x:ProductItem={
              name:name,
              img: [],
              price: price,
              color: color,
              fav: false,
              model: model,
              rating: 0,
              qty:qty
          }
          const y=await ProductModel.create(x);
          res.send(y);

    }catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      }
}
))

export default router;