const Mongoose= require('mongoose');

const connect=()=>{
     return Mongoose.connect('mongodb://localhost:27017/MongoDemo'); /*This is a promise */
}

//Here schema is defined for the data but this does not establish the connection
const blog=new Mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description: String,
    tags:[{type:String}]
},{timestamps:true});

const Blog=Mongoose.model('blog',blog)  /* {Document name, schema} blog will be the name of collection */




connect()
.then(async connection=>{
     const b= await Blog.create({title:'learn dp',description:'It is important topic  '});
     console.log(b);
    //  console.log(typeof b);
})
.catch(err=>console.error(err))
