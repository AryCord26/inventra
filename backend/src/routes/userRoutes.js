const router = require('express').Router();

const userController =
  require('../controllers/userController');

const authMiddleware =
  require('../middlewares/authMiddleware');

router.get(
  '/',
  authMiddleware,
  userController.index
);

router.get(
  '/:id',
  authMiddleware,
  userController.show
);

router.post(
  '/',
  authMiddleware,
  userController.create
);

router.put(
  '/:id',
  authMiddleware,
  userController.update
);

router.delete(
  '/:id',
  authMiddleware,
  userController.delete
);

module.exports = router;
