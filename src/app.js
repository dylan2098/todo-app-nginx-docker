const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')
const swaggerUi = require('swagger-ui-express');
const todoRoutes = require('./routes/todo.routes');
const swaggerDocument = require('./swagger.json');


require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors())

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/todos', todoRoutes);

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
