import { Box, Grid, Skeleton } from '@mui/material';

const DetailsLoading = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent={'center'}
        alignItems={'center'}
        component={'article'}
      >
        <Grid item xs={6} sm={3}>
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            gap={1}
          >
            <Box display={'flex'} gap={0.5} alignItems={'center'}>
              <Skeleton variant="circular" width={20} height={20} />
              <Skeleton variant="text" width={80} height={20} />
            </Box>
            <Skeleton variant="text" width={80} height={20} />
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            gap={1}
          >
            <Box display={'flex'} gap={0.5} alignItems={'center'}>
              <Skeleton variant="circular" width={20} height={20} />
              <Skeleton variant="text" width={80} height={20} />
            </Box>
            <Skeleton variant="text" width={80} height={20} />
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            gap={1}
          >
            <Box display={'flex'} gap={0.5} alignItems={'center'}>
              <Skeleton variant="circular" width={20} height={20} />
              <Skeleton variant="text" width={80} height={20} />
            </Box>
            <Skeleton variant="text" width={80} height={20} />
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            gap={1}
          >
            <Box display={'flex'} gap={0.5} alignItems={'center'}>
              <Skeleton variant="circular" width={20} height={20} />
              <Skeleton variant="text" width={80} height={20} />
            </Box>
            <Skeleton variant="text" width={80} height={20} />
          </Box>
        </Grid>
      </Grid>
      <Box mx={3} my={3}>
        <Skeleton variant="rectangular" width={'100%'} height={100} />
      </Box>
    </>
  );
};
export default DetailsLoading;
