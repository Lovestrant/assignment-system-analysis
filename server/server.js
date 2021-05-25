const express =require ('express')
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());


app.post('/string/get', (req,res) => {
    const String = req.body.string;
    res.send(String);
    console.log(string);
})


app.post('/addition', (req, res) =>{
    const Firstnumber = req.body.firstnumber;
    const Secondnumber = req.body.secondnumber;
    const sum = Firstnumber + Secondnumber;
    res.send(sum);
    console.log(sum);
})

app.post('/', (req, res) => {
    res.send('hello there...');
})

app.listen(5001, () => {
    console.log('App running on port: ${PORT}')
})