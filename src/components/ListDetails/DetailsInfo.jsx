// MUI
import { Box, Grid, Stack, Typography } from '@mui/material';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import HourglassEmptyRoundedIcon from '@mui/icons-material/HourglassEmptyRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';

const DetailsInfo = ({ release, runtime, revenue, genres, overview }) => {
  const moneyFormat = new Intl.NumberFormat('en', { notation: 'compact' });
  const dateFormat = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });

  return (
    <Box my={2} maxWidth={850} mx={'auto'}>
      <Grid
        container
        spacing={2}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Grid item xs={6} sm={3}>
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            gap={1}
          >
            <Box display={'flex'} gap={0.5} alignItems={'center'}>
              <CalendarMonthRoundedIcon fontSize="small" />
              <Typography>Relase Date:</Typography>
            </Box>
            <Typography>{dateFormat.format(new Date(release))}</Typography>
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
              <HourglassEmptyRoundedIcon />
              <Typography>Runtime:</Typography>
            </Box>
            <Typography>{runtime} min.</Typography>
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
              <AttachMoneyRoundedIcon />
              <Typography>Revenue:</Typography>
            </Box>
            <Typography>
              {revenue ? moneyFormat.format(revenue) : 'missing'}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3} width={'max-content'}>
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            gap={1}
          >
            <Box display={'flex'} gap={0.5} alignItems={'center'}>
              <CategoryRoundedIcon />
              <Typography>Genre:</Typography>
            </Box>
            <Stack direction={'column'} alignItems={'center'}>
              {genres?.map((genre) => {
                return (
                  <Typography fontWeight={500} key={genre.id}>
                    {genre.name}
                  </Typography>
                );
              })}
            </Stack>
          </Box>
        </Grid>
      </Grid>

      <Box mx={3} my={3}>
        <Typography variant="body1">{overview}</Typography>
      </Box>
    </Box>
  );
};
export default DetailsInfo;
