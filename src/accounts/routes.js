const Router = require('koa-router');
const passport = require('koa-passport');
const ctrl = require('./controllers');

const router = new Router();

router.post('/sign-in', ctrl.signIn);
router.post('/sign-up', ctrl.signUp);
router.get('/profile', passport.authenticate('jwt', { session: false }), ctrl.profile);
router.post('/email', ctrl.testEmail);
router.get('/users', passport.authenticate('jwt', { session: false }), ctrl.users);
router.get('/user', passport.authenticate('jwt', { session: false }), ctrl.user);
router.get('/user/:id', passport.authenticate('jwt', { session: false }), ctrl.userById);

module.exports = router;
