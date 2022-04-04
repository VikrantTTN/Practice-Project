const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
const routesRecieved=require('./routes/posts.js');

const app=express();

app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));
app.use(cors());
app.use('/posts',routesRecieved)

const PORT=process.env.PORT||5000;
const connUrl=process.env.CONNECTION_URL;

mongoose.connect(connUrl,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{
        app.listen(PORT,()=>{
            console.log(`Listening on port:${PORT}`)
        })
    }
).catch((error)=>{
    console.log(error.message)
})


