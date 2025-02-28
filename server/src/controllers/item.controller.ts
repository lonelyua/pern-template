/* eslint-disable @typescript-eslint/no-unused-vars */
// TO DO: Need handle errors

import { Request, Response } from 'express';
import itemService from '../services/item.service';

const create = async (req: Request, res: Response) => {
  try {
    const item = await itemService.create(req.body);
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getAll = async (_req: Request, res: Response) => {
  try {
    const items = await itemService.getAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getOne = async (req: Request, res: Response) => {
  try {
    const item = await itemService.getOne(Number(req.params.id));
    if (!item) {
      return res.status(404).json({ message: 'Not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const item = await itemService.update(Number(req.params.id), req.body);
    if (!item) {
      return res.status(404).json({ message: 'Not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const success = await itemService.remove(Number(req.params.id));
    if (!success) {
      return res.status(404).json({ message: 'Not found' });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export default { create, getAll, getOne, update, remove };
