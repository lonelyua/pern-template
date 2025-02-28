import { Router } from 'express';
import itemController from '../controllers/item.controller';

const router = Router();

router.post('/', itemController.create);
router.get('/', itemController.getAll);
router.get('/:id', itemController.getOne);
router.put('/:id', itemController.update);
router.delete('/:id', itemController.remove);

export default router;
