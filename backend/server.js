const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/user_locations', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// User Location Schema
const userLocationSchema = new mongoose.Schema({
  userId: String,
  name: String,
  lat: Number,
  lng: Number,
});

const UserLocation = mongoose.model('UserLocation', userLocationSchema);

// Middleware to parse JSON bodies
app.use(express.json());

// API to fetch all user locations
app.get('/api/locations', async (req, res) => {
  try {
    const locations = await UserLocation.find();
    res.json(locations);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
