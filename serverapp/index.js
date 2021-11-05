const express = require('express');
const mongoose = require('mongoose');

const dbConString = require('./enviroment');
const router = require('./routes/router');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use('/api', router);
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

const start = async () => {
  try {
    await mongoose.connect(dbConString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
  } catch (err) { console.error(err); }
};

start();
