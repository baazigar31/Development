
import { Router } from "express";
import controllers from "./user-controller";
const router = Router();

router
    .route('/')
    .get(controllers.getAll)
    .post(controllers.createOne)

router
    .route('/:id')
    .delete(controllers.removeOne)

export default router;