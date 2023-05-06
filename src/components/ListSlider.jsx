import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MovieCard from './Movie/MovieCard';
import { Box, Typography } from '@mui/material';

const ListSlider = ({ loading, dataList, listName }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      // sx={{ boxShadow: 'inset 0px 0px 5px lightgray' }}
      my={1}
    >
      <Typography variant="h5" color={'secondary'} fontWeight={600} ml={2}>
        {listName}
      </Typography>
      <div className="slider">
        <Slider {...settings}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            dataList.map((movie) => {
              return (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  img={movie.backdrop_path}
                  movieId={movie.id}
                />
              );
            })
          )}
        </Slider>
      </div>
    </Box>
  );
};
export default ListSlider;
