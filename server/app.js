import express from 'express';
import cors from 'cors';
import {channels} from './channels.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/onlineusers', (req, res) => {
  res.json({ status: 200, data: 49 });
});

app.get('/channels', (req, res) => {
  res.json({ status: 200, data: channels });
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log('Server is listening at', PORT);
});
