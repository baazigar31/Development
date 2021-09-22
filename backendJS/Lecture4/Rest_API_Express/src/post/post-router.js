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
    .get(controllers.getOne)
    .post(controllers.createOne);

router
    .route('/:id/num')
    .put((req,res)=>{
        // console.log("This is a GET request and the id is ",req.params);
        console.log(res.params);
        res.send({message : "Router OK PUT"})
    })
    .patch((req,res)=>{
        // console.log("This is a POST request and the id is ",req.params);
        res.send({message : "Router OK PATCH"})
    })
    .delete((req,res)=>{
        res.send({message: "Router OK DELETE"});
    })


export default router;