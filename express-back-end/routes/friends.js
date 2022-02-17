const express = require("express");
const router = express.Router();

module.exports = (dbhelpers) =>{
  
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
  router.post("/unfollow", function(req, res) { // delete by :id (then use params, otherwise body)
    const { user_id_1, user_id_2 } = req.params;

    dbhelpers.removeFriend(user_id_1,user_id_2)
      .then(() => {
        res.send('Removed!');
      })
      .catch(err => res.json({
        error: err.message
      }));
  });

  return router;
};