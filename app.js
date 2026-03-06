const express = require('express');
const croute = require('./route/croute');
const proute = require('./route/proute');

const app = express();

app.set("view engine","ejs");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/categories",croute);
app.use("/products",proute);
app.use((req,resp,next)=>{
    resp.status(404).render('404');
})

app.listen(4000,()=>{
    console.log("Running");
})

