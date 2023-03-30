const express = require('express');
const ejs = require('ejs');

const app = express();

// Templte engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'))

// Index
app.get('/',(req,res)=>{
  res.render("index")
})

// About
app.get('/about',(req,res)=>{
  res.render("about")
})

// Add Post
app.get('/add-post',(req,res)=>{
  res.render("add_post")
})

const port = 8080;

app.listen(port, () => {
  console.log(`Server started at ${port} port`);
});
