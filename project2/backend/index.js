const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()
const userRouter = require('./routes/userRouter'); 
const todoRouter =require('./routes/todoRouter');
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());
app.use(cors())

mongoose.connect(process.env.DATABASE_URL);


app.use('/api/v1/users', userRouter)
app.use('/api/v1/todos', todoRouter)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening on ${port}`);
});

 

