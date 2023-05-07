// MUI
import {
  Grid,
  ImageList,
  ImageListItem,
  Card,
  CardMedia,
  useMediaQuery,
} from '@mui/material';
// react
import { useState } from 'react';

const DetailGallery = ({ loading, images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const matches = useMediaQuery('(max-width:400px)');

  const imgCols = matches ? 3 : 4;

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleImageClose = () => {
    setSelectedImage(null);
  };

  return (
    <Grid
      container
      gap={2}
      justifyContent={'center'}
      alignItems={'center'}
      maxHeight={'max-content'}
      overflow={'hidden'}
    >
      <Grid item>
        <Card>
          {loading ? (
            <p>Loadding...</p>
          ) : (
            <CardMedia
              component={'img'}
              image={`https://image.tmdb.org/t/p/w500${
                selectedImage?.file_path || images?.posters[0]?.file_path
              }`}
              height={500}
              onClick={handleImageClose}
            />
          )}
        </Card>
      </Grid>
      <Grid item>
        <ImageList variant="masonry" cols={imgCols} rowHeight={130}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            images?.posters?.slice(0, 12).map((image, index) => {
              return (
                <ImageListItem key={index} cols={4} rows={1}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                    alt={image.iso_639_1}
                    loading="lazy"
                    style={{
                      objectFit: 'cover',
                      height: '100%',
                      width: '100%',
                      borderRadius: 7,
                      cursor: 'pointer',
                      border:
                        selectedImage?.file_path === image.file_path
                          ? '3px solid #ff6b6b'
                          : 'none',
                    }}
                    onClick={() => handleImageClick(image)}
                  />
                </ImageListItem>
              );
            })
          )}
        </ImageList>
      </Grid>
    </Grid>
  );
};

export default DetailGallery;
