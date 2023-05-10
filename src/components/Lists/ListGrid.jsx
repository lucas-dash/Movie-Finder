// MUI
import { Grid } from '@mui/material';
// components
import ListCard from './ListCard';

const ListGrid = ({ dataList }) => {
  return (
    <Grid
      container
      component={'section'}
      gap={4}
      justifyContent={'center'}
      my={4}
    >
      {dataList?.results?.map((card) => {
        const title = card.name ? card.name : card.title;

        return (
          <Grid
            item
            component={'article'}
            key={card.id}
            xs={5}
            sm={3}
            md={2}
            lg={2}
            justifyContent={'center'}
          >
            <ListCard title={title} img={card.poster_path} movieId={card.id} />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default ListGrid;
