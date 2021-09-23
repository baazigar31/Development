import express from "express";
import morgan from "morgan";
import { json, urlencoded } from "body-parser";
import postRouter from "./post/post-router";
import userRouter from "./user/user-router";
import { connect } from "./util/database";

const app = express();
const router=express.Router();

app.use(morgan('dev'));
app.use(express.json());
app.use(urlencoded({extended : true}));


//This is a custom middleware
const customLogger=(req,res,next)=>{
    console.log("Hi, Shubham How are you? ");
    next();
}

app.use('/api/post',postRouter);
app.use('/api/user',userRouter);

// Her to pass more than one middleware we can pass array in it.
app.get('/',customLogger, (req, res) => {
    console.log(req.body);
    res.send({message: "OK GET"});
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send({message: "OK POST"});
});


// Here code redundancy exist for post and get request to avoid this chaining is done.
// router.get('/post',(req,res)=>{
//     res.send({message : "Router OK"})
// });

// router.post('/post',(req,res)=>{
//     res.send({message : "Router OK"})
// });


//THROUGH this chaining we can reduce the code redundancy.
// router
//     .route('/post')
//     .get((req,res)=>{
//             console.log("This is a GET request");
//             res.send({message : "Router OK"})
//     })
//     .post((req,res)=>{
//         res.send({message : "Router OK"})
//     });  

// router
//     .route('/post/:id')
//     .get((req,res)=>{
//         console.log("This is a GET request and the id is ",req.params);
//         res.send({message : "Router OK"})
//     })
//     .post((req,res)=>{
//         console.log("This is a POST request and the id is ",req.params);
//         res.send({message : "Router OK"})
//     });     


export const start = async () => {
        await connect();
        app.listen(3000, () => {
            console.log("Server started at 3000");
    });
}

// console.log("Heyyy shubham anand");
