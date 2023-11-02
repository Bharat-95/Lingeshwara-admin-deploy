const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const {MongoClient, ObjectId} = require('mongodb')
const cors = require('cors')
const multer = require('multer')


app.use(cors())
app.use(express.json());


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const url = 'mongodb+srv://tillu0201:Tillu0201@bharat.e7hqicd.mongodb.net/';
const client = new MongoClient(url);


async function run() {

  try {

    await client.connect();

    

    app.get('/', (req, res) => {
      res.send('Hello World!')
    })


    app.post('/login', (req, res) => {
      
      const { username, password } = req.body;
    
      if (username === 'admin' && password === 'Tillu0201') {
        res.status(200).send('Logged in successfully');
      } else {
        res.status(401).send('Invalid username or password');
      }
    });



    app.post('/hall', upload.single('image'), async (req, res) => {

      try {


        const db = client.db('Lingeshwara');

        const collection = db.collection('Hall')

        const insert = req.body;

        insert.image= req.file.buffer;

        const result = await collection.insertOne(insert);

        res.status(200).send('Uploaded data successfully')
        
      } catch (error) {
        console.error('Unable to post details', error);
        res.status(202).send('Unable to post details to Mongodb');

        
      }
    })

    app.get('/hall', async(req, res) => {
   
      try {

        const db = client.db ('Lingeshwara');

        const collection = db.collection('Hall');

        const data = await collection.find({}).toArray();

            res.json(data);
        
      } catch (error) {

        console.error('Unable to fetch hall details from Mongodb', error);
        
      }


      app.delete('/hall/:id', async (req, res) => {
        try {
          
          const db = client.db ('Lingeshwara');

          const collection = db.collection('Hall');
  
          const id = req.params.id;
          const result = await collection.deleteOne({ _id: new ObjectId(id) });
          res.json({ message: 'Data deleted from MongoDB' });
        } catch (error) {
          console.error('Error deleting product', error);
          res.status(500).send('Unable to delete data from MongoDB');
        }
      });




    app.post('/bedroom', upload.single('image'),  async(req, res) => {

      try {

        const db = client.db('Lingeshwara');
        const collection = db.collection('Bedroom');

        const insert = req.body;

        insert.image = req.file.buffer;

        const result = await collection.insertOne(insert); 

        res.status(200).send('Uploaded data successfully');

        
      } catch (error) {

        console.error("Unable to add data to Bedroom collection", error);

        res.status(202).send('Unable to add data to Bedroom collection')
        
      }
      
    })

    app.get('/bedroom', async(req, res) => {
   
      try {

        const db = client.db ('Lingeshwara');

        const collection = db.collection('Bedroom');

        const data = await collection.find({}).toArray();

            res.json(data);
        
      } catch (error) {

        console.error('Unable to fetch hall details from Mongodb', error);
        
      }
  })


    
  
        app.delete('/bedroom/:id', async (req, res) => {
          try {
            
            const db = client.db ('Lingeshwara');
  
            const collection = db.collection('Bedroom');
    
            const id = req.params.id;
            const result = await collection.deleteOne({ _id: new ObjectId(id) });
            res.json({ message: 'Data deleted from MongoDB' });
          } catch (error) {
            console.error('Error deleting product', error);
            res.status(500).send('Unable to delete data from MongoDB');
          }
        });




    app.post('/elevation', upload.single('image'),  async(req, res) => {

      try {

        const db = client.db('Lingeshwara');
        const collection = db.collection('Elevation');

        const insert = req.body;

        insert.image = req.file.buffer;

        const result = await collection.insertOne(insert); 

        res.status(200).send('Uploaded data successfully');

        
      } catch (error) {

        console.error("Unable to add data to Bedroom collection", error);

        res.status(201).send('Unable to add data to Bedroom collection')
        
      }
      
    })

    app.get('/elevation', async(req, res) => {
   
      try {

        const db = client.db ('Lingeshwara');

        const collection = db.collection('Elevation');

        const data = await collection.find({}).toArray();

            res.json(data);
        
      } catch (error) {

        console.error('Unable to fetch hall details from Mongodb', error);
        
      }
  })


    
  
        app.delete('/elevation/:id', async (req, res) => {
          try {
            
            const db = client.db ('Lingeshwara');
  
            const collection = db.collection('Elevation');
    
            const id = req.params.id;
            const result = await collection.deleteOne({ _id: new ObjectId(id) });
            res.json({ message: 'Data deleted from MongoDB' });
          } catch (error) {
            console.error('Error deleting product', error);
            res.status(500).send('Unable to delete data from MongoDB');
          }
        });



    app.post('/kitchen', upload.single('image'),  async(req, res) => {

      try {

        const db = client.db('Lingeshwara');
        const collection = db.collection('Kitchen');

        const insert = req.body;

        insert.image = req.file.buffer;

        const result = await collection.insertOne(insert); 

        res.status(200).send('Uploaded data successfully');

        
      } catch (error) {

        console.error("Unable to add data to Bedroom collection", error);

        res.status(201).send('Unable to add data to Bedroom collection')
        
      }
      
    })

    app.get('/kitchen', async(req, res) => {
   
      try {

        const db = client.db ('Lingeshwara');

        const collection = db.collection('Kitchen');

        const data = await collection.find({}).toArray();

            res.json(data);
        
      } catch (error) {

        console.error('Unable to fetch hall details from Mongodb', error);
        
      }
  })

  
        app.delete('/kitchen/:id', async (req, res) => {
          try {
            
            const db = client.db ('Lingeshwara');
  
            const collection = db.collection('Kitchen');
    
            const id = req.params.id;
            const result = await collection.deleteOne({ _id: new ObjectId(id) });
            res.json({ message: 'Data deleted from MongoDB' });
          } catch (error) {
            console.error('Error deleting product', error);
            res.status(500).send('Unable to delete data from MongoDB');
          }
        });




    app.post('/parking', upload.single('image'),  async(req, res) => {

      try {

        const db = client.db('Lingeshwara');
        const collection = db.collection('Parking');

        const insert = req.body;

        insert.image = req.file.buffer;

        const result = await collection.insertOne(insert); 

        res.status(200).send('Uploaded data successfully');

        
      } catch (error) {

        console.error("Unable to add data to Bedroom collection", error);

        res.status(201).send('Unable to add data to Bedroom collection')
        
      }
      
    })

    app.get('/parking', async(req, res) => {
   
      try {

        const db = client.db ('Lingeshwara');

        const collection = db.collection('Parking');

        const data = await collection.find({}).toArray();

            res.json(data);
        
      } catch (error) {

        console.error('Unable to fetch hall details from Mongodb', error);
        
      }
  })


    
  
        app.delete('/parking/:id', async (req, res) => {
          try {
            
            const db = client.db ('Lingeshwara');
  
            const collection = db.collection('Parking');
    
            const id = req.params.id;
            const result = await collection.deleteOne({ _id: new ObjectId(id) });
            res.json({ message: 'Data deleted from MongoDB' });
          } catch (error) {
            console.error('Error deleting product', error);
            res.status(500).send('Unable to delete data from MongoDB');
          }
        });



    app.post('/pooja', upload.single('image'),  async(req, res) => {

      try {

        const db = client.db('Lingeshwara');
        const collection = db.collection('Pooja Room');

        const insert = req.body;

        insert.image = req.file.buffer;

        const result = await collection.insertOne(insert); 

        res.status(200).send('Uploaded data successfully');

        
      } catch (error) {

        console.error("Unable to add data to Bedroom collection", error);

        res.status(201).send('Unable to add data to Bedroom collection')
        
      }
      
    })

    app.get('/pooja', async(req, res) => {
   
      try {

        const db = client.db ('Lingeshwara');

        const collection = db.collection('Pooja Room');

        const data = await collection.find({}).toArray();

            res.json(data);
        
      } catch (error) {

        console.error('Unable to fetch hall details from Mongodb', error);
        
      }
  })


    
  
        app.delete('/pooja/:id', async (req, res) => {
          try {
            
            const db = client.db ('Lingeshwara');

            const collection = db.collection('Pooja Room');
    
            const id = req.params.id;
            const result = await collection.deleteOne({ _id: new ObjectId(id) });
            res.json({ message: 'Data deleted from MongoDB' });
          } catch (error) {
            console.error('Error deleting product', error);
            res.status(500).send('Unable to delete data from MongoDB');
          }
        });




    app.post('/bathroom', upload.single('image'),  async(req, res) => {

      try {

        const db = client.db('Lingeshwara');
        const collection = db.collection('Bathroom');

        const insert = req.body;

        insert.image = req.file.buffer;

        const result = await collection.insertOne(insert); 

        res.status(200).send('Uploaded data successfully');

        
      } catch (error) {

        console.error("Unable to add data to Bedroom collection", error);

        res.status(201).send('Unable to add data to Bedroom collection')
        
      }
      
    })

    
    app.get('/bathroom', async(req, res) => {
   
      try {

        const db = client.db ('Lingeshwara');

        const collection = db.collection('Bathroom');

        const data = await collection.find({}).toArray();

            res.json(data);
        
      } catch (error) {

        console.error('Unable to fetch hall details from Mongodb', error);
        
      }
  })


    
  
        app.delete('/bathroom/:id', async (req, res) => {
          try {
            
            const db = client.db ('Lingeshwara');

            const collection = db.collection('Bathroom');
    
            const id = req.params.id;
            const result = await collection.deleteOne({ _id: new ObjectId(id) });
            res.json({ message: 'Data deleted from MongoDB' });
          } catch (error) {
            console.error('Error deleting product', error);
            res.status(500).send('Unable to delete data from MongoDB');
          }
        });




      

   
      

    }
    
    )


 



    
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
    
  } catch (error) {
    
    console.error('unable to connect', error);
    
  }
}


run();