import { Router, Request, Response } from 'express';
import { getChampion, allChampion } from '../db/models';
import { filterChamp, shuffleChamps } from './filters'
export const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const role = req.query.role;
  const category = req.query.category
  try {
    if (role && category) {

      const condition = `${category}.${role}`;
      const champions: any = await getChampion(condition);
      const filteredChampions = filterChamp(champions);
      res.send(filteredChampions).status(200);

    } else {

      if (category) {
        const condition = category + ''
        const fetchAll: any = await allChampion(condition);
        const filteredChampions = shuffleChamps(fetchAll)
        res.send(filteredChampions).status(200)
      }
    }
  } catch (err) {
    res.sendStatus(404)
    console.log(err)
  }


});
