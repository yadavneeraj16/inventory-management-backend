const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const User = require('./models/User');

async function createAdmin() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const hash = await bcrypt.hash('admin123', 10);
    const admin = new User({ username: 'admin', password: hash });
    await admin.save();
    console.log('Admin user created');
    mongoose.disconnect();
  } catch (error) {
    console.error(error);
  }
}

createAdmin();
