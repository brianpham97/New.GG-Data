import { Router, Request, Response } from 'express';
import { getChampion, allChampion } from '../db/models';
import { filterChamp, shuffleChamps } from './filters'
export const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const role = req.query.role;
  const category = req.query.category

  if (role && category) {

    const condition = `${category}.${role}`;
    const champions = await getChampion(condition);
    const filteredChampions = filterChamp(champions);
    res.send(filteredChampions).status(200);

  } else {
    if (category) {
      const condition = category + ''
      const fetchAll = await allChampion(condition);
      const filteredChampions = shuffleChamps(fetchAll)
      res.send(filteredChampions).status(200)
    }
  }
});
