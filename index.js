const express = require('express');
const mongoose = require('mongoose');
const Product= require('./models/product.model.js')
const productRoute= require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//roues
app.use("/api/products",productRoute);

app.get('/',(req,res)=>{
    // res.send("Hellof fdasf from Node API");
});


// app.get('/api/products/:id',)
// app.post('/api/products',);
// app.put('/api/products/:id', });

// app.delete('/api/products/:id',)

mongoose.connect("mongodb+srv://alislman798:vHpRrg5uCEhbQB1b@backenddb.cuzt7wm.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
    console.log("Connected to database!");
    app.listen(3000,()=>{
        console.log('Server is running on port 3000');
    });
})
.catch(()=>{
    // console.log(err);
    console.log("connection failed!");
    // console.error();
});
