const express = require('express');

const app = express();
const path = require('path');
const hbs = require('hbs');


const port = process.env.port || 4000;


//setting the path 
const staticpath = path.join(__dirname,"../public");

const templatepath = path.join(__dirname , "../template/views");

const partialspath = path.join(__dirname , "../template/partials");



// middleware
app.use('/css' ,express.static(path.join(__dirname , "../node_modules/bootstrap/dist/css")));
app.use('/js' ,express.static(path.join(__dirname , "../node_modules/bootstrap/dist/js")));

app.use('/jq' ,express.static(path.join(__dirname , "../node_modules/jquery/dist")));


app.use(express.static(staticpath));

app.set('view engine', 'hbs');

app.set('views',templatepath);


 
hbs.registerPartials(partialspath);

app.get('/', (req,res)=>{
    res.render('index');
});

app.get('/about', (req,res)=>{
    res.render('about');
});

app.get('/contact', (req,res)=>{
    res.render("contact");

})





app.listen(port , ()=>{
    console.log(`you are use port is ${port}`);
})