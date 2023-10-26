import express from 'express';
import productsRoute from './routes/productsRoute.js';
import restaurantsRoute from './routes/restaurantsRoute.js';
import ordersRoute from './routes/ordersRoute.js';
import usersRoute from './routes/usersRoute.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/products', productsRoute);
app.use('/restaurants', restaurantsRoute);
app.use('/orders', ordersRoute);
app.use('/users', usersRoute);

app.listen(3000, () => console.log('Server running on port 3000'));
