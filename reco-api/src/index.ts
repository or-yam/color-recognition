import express from 'express';
import bcrypt from 'bcrypt-nodejs';
import cors from 'cors';
import db from './db';
import { handleRegister } from './controllers/register';
import { handleSignin } from './controllers/signin';
import { handleEntries, handleApiCall } from './controllers/entries';
import { handleUserId } from './controllers/userid';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const app = express();

app.use(express.json());
app.use(cors());

db.select('*')
  .from('users')
  .then(data => {});

app.get('/', (req, res) => {
  res.send('this is working');
});

app.post('/signin', (req, res) => {
  handleSignin(req, res, db, bcrypt);
});

app.post('/register', (req, res) => {
  handleRegister(req, res, db, bcrypt);
});

app.put('/image', (req, res) => {
  handleEntries(req, res, db);
});

app.post('/imageurl', (req, res) => {
  handleApiCall(req, res);
});

app.get('/profile/:id', (req, res) => {
  handleUserId(req, res, db);
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`app is running on port ${process.env.PORT}`);
});
