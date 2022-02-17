import { Box, Chip, Stack, Typography } from "@mui/material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import DinnerDiningOutlinedIcon from "@mui/icons-material/DinnerDiningOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import { useEffect, useState } from "react";
import { useAuth } from "../providers/AuthContext";
import axios from "axios";

const RecipeListItem = (props) => {
  const {
    image_link,
    title,
    instructions,
    id,
    cuisine,
    prepTime,
    restrictions,
  } = props;
  // console.log(id);
  const { user } = useAuth();
  console.log(user.id);
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
    if (!like) {
      const likeURL = `http://localhost:3001/api/like`;
      axios.post(likeURL, { user_id: user.id, recipe_id: id }).then((res) => {
        console.log(res);
      });
    } else {
      const unlikeURL = `http://localhost:3001/api/unlike`;
      axios.post(unlikeURL, { user_id: user.id, recipe_id: id }).then((res) => {
        console.log(res);
      });
    }
  };

  
    const getLikesURL = `http://localhost:3001/api/like`;
    axios.get(getLikesURL, {params: {user_id: 1}}).then((res) => {
      console.log(res.data);
      for(let obj of res.data){
        if(obj.recipe_id === id){
          setLike(true);
        }
      }
    }).catch(err => console.log(err.message));
  

  return (
    <Box
      sx={{
        textAlign: "left",
        paddingRight: "4rem",
      }}
    >
      <Link to={`/recipe/${id}`}>
        <img src={image_link} alt="" />
      </Link>
      <Stack direction="row" spacing={1}>
        <Chip icon={<DinnerDiningOutlinedIcon />} label={`${cuisine}`} />
        <Chip icon={<AccessTimeOutlinedIcon />} label={`${prepTime} minutes`} />
        {restrictions && (
          <Chip
            icon={<CheckCircleOutlineOutlinedIcon />}
            label={restrictions}
          />
        )}
        {like && (
          <FavoriteOutlinedIcon
            fontSize="medium"
            onClick={handleLike}
            sx={{
              "&:hover": {
                color: "orangered",
              },
            }}
          />
        )}
        {!like && (
          <FavoriteBorderOutlinedIcon
            fontSize="medium"
            onClick={handleLike}
            color=""
            sx={{
              "&:hover": {
                color: "orangered",
              },
            }}
          />
        )}

        <BookmarkBorderOutlinedIcon
          fontSize="medium"
          color="orangered"
          sx={{
            "&:hover": {
              color: "orangered",
            },
          }}
        />
      </Stack>
      <Link to={`/recipe/${id}`}></Link>
      <Typography variant="h3" color="primary" fontWeight="bold" gutterBottom>
        {title}
      </Typography>
      <Typography variant="p">{instructions}</Typography>
    </Box>
  );
};

export default RecipeListItem;
