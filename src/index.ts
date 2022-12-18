import express from "express";
import routers from "./routers/index.js";

const app = express();

app.listen(4000, ()=>{
    console.log('server is running on port 4000')
})

app.use(routers);