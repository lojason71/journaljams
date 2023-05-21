const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:3000';

const dbName = 'mydatabase';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

module.exports = { client, dbName, connectToDatabase };