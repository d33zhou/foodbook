let express = require("express");
let router = express.Router();

const users = [
  {
    id: 1,
    firstName: "Belle",
    lastName: "leBlanc",
    email: "abc@gmail.com",
    password: "12345",
  },
];

const likes = [
  {
    user_id: 1,
    recipe_id: 1,
  },
  { user_id: 1, recipe_id: 2 },
  { user_id: 1, recipe_id: 3 },
];
/* GET /api/users/:id get a specific user profile. */
router.get("/:id", function(req, res) {
  const user = users.find((user) => user.id === Number(req.params.id));
  const like = likes.find((like) => like.user_id === Number(req.params.id));
  res.json({user,like});
});

module.exports = router;
