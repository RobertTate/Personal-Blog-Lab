import { Router } from 'express';
import blogsRouter from './blogs';
import authRouter from './auth';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';



let router = Router();

router.use('/auth', authRouter);

router.route('*')
    .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);

router.use('/blogs', blogsRouter);

export default router;