const Router = require('express');
const router = new Router();
const authController = require('./authController');
const { check } = require('express-validator');
const authMiddleware = require('./middleware/authMiddleware');
const roleMiddleware = require('./middleware/roleMiddleware');

router.post(
  '/registration',
  [
    check('username', 'Username can not be empty').notEmpty(),
    check(
      'password',
      'Password have to be more than 4 and less than 10 symbols'
    ).isLength({ min: 4, max: 10 }),
  ],
  authController.registration
);
router.post('/login', authController.login);
router.post('/users', roleMiddleware(['USER']), authController.getUsers);

module.exports = router;
