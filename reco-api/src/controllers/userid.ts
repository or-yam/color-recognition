import { Request, Response } from 'express';
import { Knex } from 'knex';

export const handleUserId = (req: Request, res: Response, db: Knex) => {
  const { id } = req.params;

  db.select('*')
    .from('users')
    .where({
      id: id
    })
    .then(user => {
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json('did not found user id');
      }
    })
    .catch(err => res.status(400).json('Error getting user'));
};
