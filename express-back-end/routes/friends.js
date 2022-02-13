let express = require("express");
let router = express.Router();

module.exports = (dbhelpers) =>{
  
  /* POST /api/friend add a friend */
  router.post("/friend", function(req, res) {
    const { user_id_1, user_id_2 } = req.params;

    dbhelpers.addFriend(user_id_1,user_id_2)
      .then(() => {
        res.send('Added!');
      })
      .catch(err => res.json({
        error: err.message
      }));
  });

  /* POST /api/unfriend add a friend */
  router.post("/unfriend", function(req, res) {
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