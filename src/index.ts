import express from "express";

const app = express();

app.listen(4000, ()=>{
    console.log('server is running on port 4000')
})


app.get('/', (req, res)=>{
    res.send('olá mundo')
})