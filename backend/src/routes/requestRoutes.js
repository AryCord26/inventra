const router = require('express').Router();

const requestController =
  require('../controllers/requestController');

const authMiddleware =
  require('../middlewares/authMiddleware');

router.get(
  '/',
  authMiddleware,
  requestController.index
);

router.get(
  '/:id',
  authMiddleware,
  requestController.show
);

router.post(
  '/',
  authMiddleware,
  requestController.create
);

router.put(
  '/:id',
  authMiddleware,
  requestController.update
);

router.delete(
  '/:id',
  authMiddleware,
  requestController.delete
);

module.exports = router;
