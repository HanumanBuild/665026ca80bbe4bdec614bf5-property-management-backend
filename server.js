const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Import routes
const contactRoutes = require('./routes/contact');
const serviceRequestRoutes = require('./routes/serviceRequest');

app.get('/', (req, res) => {
  res.send('Property Management Backend');
});

// Use routes
app.use('/api/contact', contactRoutes);
app.use('/api/service-request', serviceRequestRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});