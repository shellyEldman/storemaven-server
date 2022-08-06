let leaderboard = {};

const get_leaderboard_results = (req, res) => {
    res.status(200).json(leaderboard);
}
const update_user_leaderboard = (req, res) => {
    const userName = req.body.userName;
    const successCount = req.body.successCount;

    if (!userName) {
        res.status(400).json({ error: `User name was not provided` });
    }

    if (leaderboard[userName]) {
        // check if need to update
        if (successCount > leaderboard[userName]) {
            leaderboard[userName] = successCount;
        }
    } else {
        // new user
        leaderboard[userName] = successCount;
    }

    res.status(200).json({ success: `Successfully updated user - ${userName}` });
}

module.exports = {
    get_leaderboard_results,
    update_user_leaderboard
}