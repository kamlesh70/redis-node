import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import redisClient from './utils/redisClient';

const app = express();

async function bootStrap() {
  try {
    const client = await redisClient.redisClient();
    await client.set('name', "kamlesh", 'EX', 60);
    console.log(await client.get('name'))
    app.listen(3000, () => console.log('listing on port 3000'));
  } catch (error) {
    console.log(error);
  }
}

bootStrap();