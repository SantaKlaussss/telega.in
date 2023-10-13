import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/onlineusers', (req, res) => {
  console.log(req, 'reqq');
  res.json({ status: 200, data: 49 });
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log('Server is listening at', PORT);
});
