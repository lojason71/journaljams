const express = require('express');
const app = express();
const { client, dbName, connectToDatabase } = require('./database');

app.use(express.json());

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    await connectToDatabase();

    const db = client.db(dbName);

    const usersCollection = db.collection('users');

    const user = await usersCollection.findOne({ username });

    if (user && user.password === password) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

connectToDatabase().catch(console.error);
