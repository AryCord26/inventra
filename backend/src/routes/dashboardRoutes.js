const router = require('express').Router();

const dashboardController =
  require('../controllers/dashboardController');

const authMiddleware =
  require('../middlewares/authMiddleware');

router.get(
  '/',
  authMiddleware,
  dashboardController.index
);

module.exports = router;
