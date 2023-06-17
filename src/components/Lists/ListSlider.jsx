// react slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// components
import ListCard from './ListCard';
// MUI
import { Box, Skeleton, Typography } from '@mui/material';

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
      component={'article'}
    >
      <Typography variant="h5" color={'secondary'} fontWeight={600} ml={2}>
        {listName}
      </Typography>
      <div className="slider">
        <Slider {...settings}>
          {loading ? (
            <Skeleton variant="rounded" height={300} width={200} />
          ) : (
            dataList.map((movie) => {
              const title = movie.title ? movie.title : movie.name;

              return (
                <ListCard
                  key={movie.id}
                  title={title}
                  img={movie.poster_path}
                  movieId={movie.id}
                  type={movie.title ? 'movie' : 'tvshow'}
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
