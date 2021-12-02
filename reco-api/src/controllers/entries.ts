import Clarifai from 'clarifai';
import { Request, Response } from 'express';
import { Knex } from 'knex';

const app = new Clarifai.App({
  apiKey: process.env.CLARIFAI_API_KEY
});

export const handleApiCall = async (req: Request, res: Response) => {
  const { input } = req.body;
  try {
    const data = await app.models.predict(Clarifai.COLOR_MODEL, input);
    res.json(data);
  } catch (err) {
    res.status(400).json({ message: 'unable to load form api', err });
  }
};

export const handleEntries = (req: Request, res: Response, db: Knex) => {
  const { id } = req.body;
  db('users')
    .where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
      if (entries.length) {
        res.json(entries[0]);
      } else {
        res.status(400).json('did not found user id');
      }
    })
    .catch(err => res.status(400).json('could not update user rank'));
};
