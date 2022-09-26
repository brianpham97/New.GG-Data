import { Router, Request, Response } from 'express';
import { getChampion } from '../db/models';
import { filterChamp } from './filters'
export const router = Router();

router.get('/:role/:category', async (req: Request, res: Response) => {
  const role = req.params.role
  const category = req.params.category;
  const condition = `${category}.${role}`;

  const champions = await getChampion(condition);
  const filteredChampions = filterChamp(champions);
  res.send(filteredChampions).status(200);
});
