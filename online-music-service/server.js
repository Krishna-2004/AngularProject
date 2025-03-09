// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/online-music-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Middleware
app.use(bodyParser.json());

// Define your mongoose model for songs
const Song = mongoose.model('Song', {
  title: String,
  artist: String,
  genre: String,
  // Add more fields as needed
});

// CRUD operations
// Create a new song
app.post('/api/songs', async (req, res) => {
  try {
    const { title, artist, genre } = req.body;
    const song = new Song({ title, artist, genre });
    await song.save();
    res.status(201).json(song);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Read all songs
app.get('/api/songs', async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Update a song
app.put('/api/songs/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, artist, genre } = req.body;
    const song = await Song.findByIdAndUpdate(id, { title, artist, genre }, { new: true });
    res.json(song);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Delete a song
app.delete('/api/songs/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Song.findByIdAndDelete(id);
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});


// Define mongoose model for user
const User = mongoose.model('User', {
    email: String,
    password: String,
  });
  
  // Signup route
  app.post('/api/signup', async (req, res) => {
    try {
      const { email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ email, password: hashedPassword });
      await user.save();
      res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });
  

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
