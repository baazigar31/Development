import {Router} from "express";
import controllers from "./post-controller";
const router=Router();

router
    .route('/')
    // .get((req,res)=>{
    //         console.log("This is a GET request");
    //         res.send({message : "Router OK"})
    // })
    // .post((req,res)=>{
    //     res.send({message : "Router OK"})
    // });  
    .get(controllers.getAll)
    .post(controllers.createOne);

router
    .route('/:id')
    .get(controllers.getOne)
    // .put((req,res)=>{
    //     // console.log("This is a GET request and the id is ",req.params);
    //     console.log(res.params);
    //     res.send({message : "Router OK PUT"})
    // })
    .patch(controllers.updateOne)
    .delete(controllers.removeOne)


export default router;