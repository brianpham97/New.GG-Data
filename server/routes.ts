import { Router, Request, Response } from 'express';
import { getChampion, loadData } from '../db/models';
export const router = Router();

router.get('/:role/:category', async (req: Request, res: Response) => {
  const role = req.params.role
  const category = req.params.category;
  const condition = `${category}.${role}`

  const champions = await getChampion(condition);
  res.send(champions).status(200)
});
