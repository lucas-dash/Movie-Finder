// MUI
import { Grid, Skeleton } from '@mui/material';

const GridLoading = () => {
  return (
    <Grid container gap={4} justifyContent={'center'} component={'section'}>
      <Grid item xs={10} sm={3} md={3} lg={2} justifyContent={'center'}>
        <Skeleton variant="rectangular" height={300} width={200} />
      </Grid>
      <Grid item xs={10} sm={3} md={3} lg={2} justifyContent={'center'}>
        <Skeleton variant="rectangular" height={300} width={200} />
      </Grid>
      <Grid item xs={10} sm={3} md={3} lg={2} justifyContent={'center'}>
        <Skeleton variant="rectangular" height={300} width={200} />
      </Grid>
    </Grid>
  );
};
export default GridLoading;
