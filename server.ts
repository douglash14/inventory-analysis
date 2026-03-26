import * as dotenv from 'dotenv';
import express from 'express';

import InventoryRoutes from './src/application/inventory/routes/routes';

dotenv.config();

const port = process.env.PORT;
const host = process.env.HOST;

const app = express();

app.use(InventoryRoutes);

app.listen(port, () => {
  console.log(`Server running on http://${host}:${port}`);
});
