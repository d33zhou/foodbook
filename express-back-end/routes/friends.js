const express = require("express");
const router = express.Router();

module.exports = (dbhelpers) =>{
  
  /* GET /api/friends/status check if following a user */
  router.get("/status", function(req, res) {
    const { auth_user, target_user } = req.query;

    dbhelpers.getFollowStatus(auth_user, target_user)
      .then(result => {
        res.json(result);
      })
      .catch(err => err.message);
  });

  /* POST /api/friends/follow add a friend */
  router.post("/follow", function(req, res) {
    const { user_id_1, user_id_2 } = req.body;

    dbhelpers.addFriend(user_id_1, user_id_2)
      .then(() => {
        res.send('Added!');
      })
      .catch(err => res.json({
        error: err.message
      }));
  });

  /* POST /api/friends/unfollow add a friend */
  router.delete("/unfollow", function(req, res) {
    const { user_id_1, user_id_2 } = req.body;

    dbhelpers.removeFriend(user_id_1, user_id_2)
      .then(() => {
        res.send('Removed!');
      })
      .catch(err => res.json({
        error: err.message
      }));
  });

  return router;
};