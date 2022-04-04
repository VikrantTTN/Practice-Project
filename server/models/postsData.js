const mongoose=require('mongoose')
const postsDataSchema= new mongoose.Schema({
    heading:String,
    content:String,
    author:String,
    tags:[String],
    image:String,
    likes:{
        type:Number,
        default:0
    },
    creationTime:{
        type:Date,
        default:new Date()
    }
});
const PostsData=mongoose.model('PostsData',postsDataSchema)