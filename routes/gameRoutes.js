const express = require('express');
const gameController = require('../controllers/gameCotroller');

const router = express.Router();

router.get('/get_leaderboard_results', gameController.get_leaderboard_results);
router.post('/update_user_leaderboard', gameController.update_user_leaderboard);

module.exports = router;