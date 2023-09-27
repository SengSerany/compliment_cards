const express = require('express');
require('dotenv').config();
const app = express();
// const { errorHandler } = require('./middleware/errorMiddleware');

const port = process.env.PORT || 5000;

// Call router
const homepageRouter = require('./routes/homepageRoutes');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set routes
app.use('/api/compliment_card/v1', homepageRouter);

// Error middleware
// app.use(errorHandler);

// Listining
app.listen(port, () => {
  console.log(`> Server is listening on port ${port}`);
});
