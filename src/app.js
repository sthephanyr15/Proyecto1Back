import express from 'express';
import productsRoute from './routes/productsRoute.js';
import restaurantsRoute from './routes/restaurantsRoute.js';
import ordersRoute from './routes/ordersRoute.js';
import usersRoute from './routes/usersRoute.js';
import morgan from "morgan"
import mongoose from 'mongoose';
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.use('/products', productsRoute);
app.use('/restaurants', restaurantsRoute);
app.use('/orders', ordersRoute);
app.use('/users', usersRoute);

mongoose.connect('mongodb://127.0.0.1:27017/delivery', 
)
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });
app.listen(3000, () => console.log('Server running on port 3000'));
