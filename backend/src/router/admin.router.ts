import Router from 'express';
import asynceHandler from 'express-async-handler';
import multer from "multer";
import { ProductItem, ProductModel } from '../models/product.model';

const router=Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
router.post('/addproduct',upload.array("files"),asynceHandler(
    async (req, res) => {
    const { name, img, price, color, model } = req.body;
    console.log("X");
    try{
        if(img.length>0){
            res.status(404).send("wrong");
            return;
        }
        console.log(img);
        // const images = img.map((file: any) => {
        //     return {
        //       data: file.buffer,
        //       contentType: file.mimetype,
        //     };
        //   });
          const x:ProductItem={
              name: name,
              img: [],
              price: price,
              color: color,
              fav: false,
              model: model,
              rating: 0
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