import express from 'express';
import cors from 'cors';
import {channels} from './channels.js';

const app = express();

app.use(cors({
  // FIXME: use specific origin
  origin: '*'
}));
app.use(express.json());

app.get('/onlineusers', (req, res) => {
  res.json({ status: 200, data: 49 });
});

app.get('/channels', (req, res) => {
  let currentPage = req.query.page;
  let pageSize = req.query.pageSize;
  
  res.json({
    status: 200,
    data: channels.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize,
    ),
    totalChannels: channels.length
  });
});


const PORT = 8000;

app.listen(PORT, () => {
  console.log('Server is listening at', PORT);
});
