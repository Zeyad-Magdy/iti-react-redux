import { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import { useDispatch } from "react-redux";
import { moviesContext } from "../Contexts/MoviesContextProvider";
import { toggleFavourite } from "../redux/store/movies";

export default function Movie({ movie }) {
  const [fav, setFav] = useState(movie.favorite);
  const { moviesArr, setMovies } = useContext(moviesContext);
  const dispatch = useDispatch();

  const toggleFav = () => {
    if (movie.favorite) {
      // movie.favorite = false;
      //dispatch unfavourite
      dispatch(toggleFavourite({...movie,favorite:false}));
    } else {
      console.log();
      //change the favorite attribute before dispatching
      // movie.favorite = true;
      //dispatch facourite
      dispatch(toggleFavourite({...movie,favorite:true}));
    }
    setFav(!fav);
  };

  return (
    <Card
      sx={{
        width: 400,
        height: 540,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardHeader
        sx={{ height: 100 }}
        title={movie.title}
        subheader={parseInt(movie.vote_average).toFixed(1)}
      />
      <CardMedia
        component="img"
        height="194"
        image={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {movie.overview}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ mt: "auto" }}>
        <IconButton
          color={fav ? "secondary" : "disabled"}
          onClick={toggleFav}
          aria-label="add to favorites"
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
