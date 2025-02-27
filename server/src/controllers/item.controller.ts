import { Request, Response } from 'express';
import itemService from '../services/item.service';

const create = async (req: Request, res: Response) => {
  const item = await itemService.create(req.body);
  res.json(item);
};

const getAll = async (_req: Request, res: Response) => {
  const items = await itemService.getAll();
  res.json(items);
};

const getOne = async (req: Request, res: Response) => {
  const item = await itemService.getOne(Number(req.params.id));
  res.json(item);
};

const update = async (req: Request, res: Response) => {
  const item = await itemService.update(Number(req.params.id), req.body);
  res.json(item);
};

const remove = async (req: Request, res: Response) => {
  await itemService.remove(Number(req.params.id));
  res.sendStatus(204);
};

export default { create, getAll, getOne, update, remove };
