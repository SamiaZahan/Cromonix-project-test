const express = require('express');
const { MongoClient } = require('mongodb');
const ObjectId= require ('mongodb').ObjectId;
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nqgzx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run(){
    try{
        await client.connect();
        console.log('Database Connect Successfully');
        const database = client.db ('todoList-system');
        const tasksCollection = database.collection('tasks');
     
        //POST TASK API
        app.post('/tasks', async (req, res)=> {
            const task = req.body;
            const result = await tasksCollection.insertOne(task);
            res.json(result)
        });
        //GET TASK API
        app.get('/tasks', async(req,res)=> {
            let cursor = tasksCollection.find({});
            const tasks= await cursor.toArray();
            res.send(tasks);
        });
        //GET SINGLE TASK
        app.get('/tasks/:id', async(req,res)=>{
            const id= req.params.id;
            const query = { _id: ObjectId(id)};
            const task = await tasksCollection.findOne(query);
            res.json(task);
        })
       
    }
    finally{
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req,res) => {
    res.send ('Server Running');
})

app.listen(port, () => {
    console.log('Server running on port', port);
})