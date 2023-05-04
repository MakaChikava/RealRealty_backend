const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
// ========= MIDDLEWARE ===== //
app.use(cors());
app.use(express.json());
const MakaURI = process.env.MONGODB;
// ========= ROUTES ========= //

// Create
app.post('/house', async (req, res)=>{
    
})
// Read
app.get('/', async (req, res)=>{
    
})
// Update
app.put('/house', async (req, res)=>{
    
})
// Delete
app.delete('/house', async (req, res)=>{
    
})



mongoose.connect(MakaURI);
mongoose.connection.once('open', ()=>{
    console.log('connected to mongodb')
});

app.listen(8000, ()=>{
    console.log('listening....')
});