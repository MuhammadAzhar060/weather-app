const express=require('express');
const path=require('path');
const hbs=require('hbs');
const geocode = require('./utils/geocode');

const app=express();

// Define Path for Express Configuration
const publicDirectoryPath=path.join(__dirname,'../public');
const viewsPath=path.join(__dirname,'../templates/views');
const partialPath=path.join(__dirname,'../templates/partials')

// Setup Handlers engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath);
hbs.registerPartials(partialPath);

// Setup static directory to serve dfsdsdf
app.use(express.static(publicDirectoryPath));


app.get('',(req,res)=>{
  res.render('index',{
     title:'Weather Page',
     name:'Muhammad Azhar'
  })
});


app.get('/about',(req,res)=>{
  res.render('about',{
    title:"About Page",
    name:'Muhammad Azhar',
  })
});
app.get('/help',(req,res)=>{
  res.render('help',{
    helpText:'This is some helpfull text',
    title:"Help Page",
     name:'Muhammad Azhar',
  })
});


app.get('/weather',(req,res)=>{
  if(!req.query.address){
   return res.send({
      error:'Please provide Address in the query params'
    })
  }
   geocode(req.query.address,(error,response)=>{
       if(error){
          return res.send({error});
       }
       res.send({
          Email:response['email'],
          Name:response['name']
      })
   })
});
app.get('/products',(req,res)=>{
  if(!req.query.name){
    return res.send({
      error:'Provide name is the query params'
    })
  }
  console.log(req.query.name);
  res.send({
   products:[]
 })
});
app.get('/help/*',(req,res)=>{
  res.render('notFound',{
     title:"This is help Page",
     errorMessage:'Help Article not Found',
  })
});
app.get('*',(req,res)=>{
  res.render('notFound',{
     title:"This is help Page",
     errorMessage:'This is my 404 Page',
  });
});
app.listen(3000,()=>{
   console.log('Server are up and running');
});