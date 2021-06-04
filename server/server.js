const express =require ('express')
const app = express()
const cors = require("cors");

const { json } = require('body-parser');

//middlewares
app.use(json())
app.use(cors());
app.use(express.json());



app.post('/string', (req,res) => {
    let String = req.body.string;
    res.send(String);
    console.log(String);
    //res.send("waiting for string");
})



app.post('/addition', (req, res) =>{
    Firstnumber = parseInt(req.body.firstnumber)
  
    Secondnumber  = parseInt(req.body.secondnumber)
   
    sum = Number(Firstnumber + Secondnumber)
  
    res.send(JSON.stringify(sum));
    console.log(sum)
    
})

app.post('/', (req, res) => {
    res.send('hello there...');
})

app.listen(5001, () => {
    console.log('App running on port: 5001');

})