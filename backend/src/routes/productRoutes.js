const router = require('express').Router();

const productController =
  require('../controllers/productController');

const authMiddleware =
  require('../middlewares/authMiddleware');

router.get(
  '/',
  authMiddleware,
  productController.index
);

router.get(
  '/:id',
  authMiddleware,
  productController.show
);

router.post(
  '/',
  authMiddleware,
  productController.create
);

router.put(
  '/:id',
  authMiddleware,
  productController.update
);

router.delete(
  '/:id',
  authMiddleware,
  productController.delete
);

module.exports = router;
