import {Router} from "express";

const router=Router();
router
    .route('/post')
    .get((req,res)=>{
            console.log("This is a GET request");
            res.send({message : "Router OK"})
    })
    .post((req,res)=>{
        res.send({message : "Router OK"})
    });  

router
    .route('/post/:id/num')
    .get((req,res)=>{
        console.log("This is a GET request and the id is ",req.params);
        res.send({message : "Router OK"})
    })
    .post((req,res)=>{
        console.log("This is a POST request and the id is ",req.params);
        res.send({message : "Router OK"})
    }); 


export default router;