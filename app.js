const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const blog = {
    id: 1,
    title: 'Blog Title',
    description: 'Blog Description',
  };

  res.send(blog)
});

const port = 8080;


app.listen(port,()=>{
    console.log(`Server started at ${port} port`);
})