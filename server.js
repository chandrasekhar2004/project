const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const randomstring = require('randomstring');

const app = express();
const port = 5000;

app.use(cors({
  origin: 'http://localhost:3000',  
  credentials: true,
}));

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Personinfo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'geethika.bodapati@gmail.com',  // replace with your Gmail email
    pass:'oiox jtiw apnj xgcf'    // replace with your Gmail password
  }
});
const loginSchema = new mongoose.Schema({
  Email: String,
  Password: String,
});
const registerSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  Password: String,
  Confirmpassword: String,
  otp: String, // Note the lowercase 'otp' field
});

const RegisterDetails=mongoose.model('RegisterDetails', registerSchema,'SignInData');

const LoginDetails = mongoose.model('LoginDetails', loginSchema, 'login');

// API endpoint for user login
app.post('/login', async (req, res) => {
  try {
    const { Email, Password } = req.body;

    console.log('Received login request:', { Email, Password });

    const user = await LoginDetails.findOne({ Email, Password });

    if (user) {
      console.log('Login successful:', { Email, Password });
      res.status(200).json({ message: 'Login successful' });
    } else {
      console.log('Login failed: User not found or invalid password', { Email, Password });
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.post('/register', async (req, res) => {
  try {
    const { Name, Email, Password, Confirmpassword } = req.body;

    console.log('Received registration request:', { Name, Email, Password });

    // Check if the password and confirm password fields match
    if (Password !== Confirmpassword) {
      console.log('Registration failed: Password and confirm password do not match');
      res.status(400).json({ message: 'Password and confirm password do not match' });
      return; // Exit the function early
    }

    // Check if the user already exists
    const existingUser = await LoginDetails.findOne({ Email });

    if (existingUser) {
      console.log('Registration failed: User with the same email already exists', { Email });
      res.status(409).json({ message: 'User with the same email already exists' });
    } else {
      // Generate and send OTP
      const otp = randomstring.generate({
        length: 6,
        charset: 'numeric',
      });

      const mailOptions = {
        from: 'geethika.bodapati@gmail.com',
        to: Email,
        subject: 'Registration OTP',
        text: `Your OTP for registration is: ${otp}`,
      };

      transporter.sendMail(mailOptions, async (error, info) => {
        if (error) {
          console.error('Error sending OTP email:', error);
          res.status(500).json({ error: 'Error sending OTP email' });
        } else {
          console.log('OTP email sent:', info.response);

          // Save the user details and OTP to the database
          const newEntry = new RegisterDetails({ Name, Email, Password, otp: otp });
          await newEntry.save();

          const newUser = new LoginDetails({ Email, Password });
          newUser.save();
          

          res.status(200).json({ message: 'OTP sent successfully' });
        }
      });
    }
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/forget', async (req, res) => {
  try {
    const { enteredOTP, email } = req.body;
    const user = await RegisterDetails.findOne({ Email: email });
    
    if (user) {
      const actualOTP = user.otp;

      if (enteredOTP === actualOTP) {
        res.status(200).json({ message: 'OTP verified successfully' });
      } else {
        res.status(401).json({ message: 'Invalid OTP' });
      }
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error during OTP verification:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/verify-otp', async (req, res) => {
  try {
    const { enteredOTP, email } = req.body;

    // Retrieve the OTP from the database based on the userEmail
    const user = await RegisterDetails.findOne({ Email: email });

    if (user) {
      const actualOTP = user.otp;

      if (enteredOTP === actualOTP) {
        res.status(200).json({ message: 'OTP verified successfully' });
      } else {
        res.status(401).json({ message: 'Invalid OTP' });
      }
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error during OTP verification:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.post('/gotp', async (req, res) => {
  try {
    const {  email } = req.body;

    // Retrieve the OTP from the database based on the userEmail
    const user = await RegisterDetails.findOne({ Email: email });
    const otp = randomstring.generate({
      length: 6,
      charset: 'numeric',
    });

    const mailOptions = {
      from: 'geethika.bodapati@gmail.com',
      to: email,
      subject: 'Registration OTP',
      text: `Your OTP for registration is: ${otp}`,
    };

    transporter.sendMail(mailOptions, async (error, info) => {
      if (error) {
        console.error('Error sending OTP email:', error);
        res.status(500).json({ error: 'Error sending OTP email' });
      } else {
        console.log('OTP email sent:', info.response);}});
    if (user) {
      user.otp=otp;
      await user.save();
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error during OTP verification:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
