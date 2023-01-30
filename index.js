const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
  try {
    await mongoose
      .connect(
        'mongodb+srv://admin:admin@cluster0.liui6d4.mongodb.net/?retryWrites=true&w=majority'
      )
      .then(() => {
        console.log('Connected');
      });

    app.listen(PORT, () => {
      console.log('Running...');
    });
  } catch (err) {
    console.log(err);
  }
};

start();
