import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';



import useStyles from './styles';

function FeaturedMovie({ movie }) {
  const classes = useStyles();
  const customStyle = {
    fontSize: '16px', // You can adjust the font size as needed
    fontFamily: 'SF Pro Text, SF Pro Icons, "Helvetica Neue", Helvetica, Arial, sans-serif',
    marginTop: '10px', // Add margin from the top
    marginBottom: '10px', // Add margin from the bottom
  };



  if (!movie) return null;

  return (
    <Box component={Link} to={`/movie/${movie.id}`} className={classes.featuredCardContainer}>
      <Card className={classes.card} classes={{ root: classes.cardRoot }}>
        <CardMedia
          media="picture"
          alt={movie.title}
          image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          title={movie.title}
          className={classes.cardMedia}
        />
        <Box padding="20px">
          <CardContent className={classes.cardContent} classes={{ root: classes.cardContentRoot }}>
            <Typography variant="h2" style={{ color: 'yellow' }}>
              {movie.title}
            </Typography>
            <Typography variant="body2" style={customStyle}>
              {movie.overview}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}

export default FeaturedMovie;
