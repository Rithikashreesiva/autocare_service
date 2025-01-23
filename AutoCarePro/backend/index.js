const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoute = require('./routes/userRoutes')
const BookingRoute = require('./routes/bookingRoutes')
const mongoose = require('mongoose');
require('dotenv').config();


dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoute);
app.use('/api/bookings', BookingRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} : http://localhost:${PORT}`));
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('MongoDB URI:', process.env.MONGODB_URI);
