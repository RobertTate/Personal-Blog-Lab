import { Router } from 'express';
import blogsRouter from './blogs';
import authRouter from './auth';
import usersRouter from './users';
import stripeDonationsRouter from './stripeDonations';
import contactRouter from './contactform';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

console.log('teffghffst');

let router = Router();

router.use('/auth', authRouter);
router.use('/donate', stripeDonationsRouter);
router.use('/contact', contactRouter);


router.route('/blogs')
    .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);

router.route('/auth')
    .post(tokenMiddleware, isLoggedIn);

router.use('/blogs', blogsRouter);
router.use('/users', usersRouter);

export default router;