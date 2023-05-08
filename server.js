const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const House = require('./models/houses');
// ========= MIDDLEWARE ===== //
app.use(cors());
app.use(express.json());
const MakaURI = process.env.MONGODB;
// ========= ROUTES ========= //
// Read
app.get('/', async (req, res)=>{
    const allHouses = await House.find({});
    res.json(allHouses);
})

app.get('/house/:id', async (req, res)=>{
    const oneHouse = await House.findById(req.params.id);
    res.json(oneHouse);
})
// Create
app.post('/house', async (req, res)=>{
    const newHouse = await House.create(req.body);
    res.json(newHouse);
})

// Update
app.put('/house/:id', async (req, res)=>{
    const updateHouse = await House.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(updateHouse);
})

// Delete
app.delete('/house/:id', async (req, res)=>{
    const deleteHouse = await House.findByIdAndRemove(req.params.id);
    res.json(deleteHouse);
})



mongoose.connect(MakaURI);
mongoose.connection.once('open', ()=>{
    console.log('connected to mongodb')
});

app.listen(8000, ()=>{
    console.log('listening....')
});