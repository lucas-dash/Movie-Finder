// MUI
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import HourglassEmptyRoundedIcon from '@mui/icons-material/HourglassEmptyRounded';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

const TvShowDetail = ({
  release,
  episodeRuntime,
  numSeasons,
  seasons,
  genres,
  overview,
}) => {
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
              <Typography fontWeight={600}>Relase Date:</Typography>
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
            <Box
              display={'flex'}
              gap={0.5}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <HourglassEmptyRoundedIcon />
              <Typography fontWeight={600}>Episode Runtime:</Typography>
            </Box>
            <Typography>
              {episodeRuntime ? `${episodeRuntime} min.` : 'missing'}
            </Typography>
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
              <LiveTvRoundedIcon />
              <Typography fontWeight={600} textAlign={'center'}>
                Seasons:
              </Typography>
            </Box>
            <Typography>{numSeasons}</Typography>
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
              <Typography fontWeight={600}>Genre:</Typography>
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

      <Box mx={2}>
        {seasons.map((season) => {
          return (
            <Accordion
              sx={{ backgroundColor: 'secondary.main' }}
              key={season.id}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreRoundedIcon />}
                aria-controls={`${season.name}-content`}
                id={season.id}
              >
                <Typography color={'#fff'}>{season.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography
                      textAlign={'center'}
                      fontWeight={600}
                      sx={{
                        borderBottom: '1px solid #fff',
                      }}
                    >
                      Episode Count:
                    </Typography>
                    <Typography color={'primary'} textAlign={'center'}>
                      {season.episode_count ? season.episode_count : 'missing'}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      textAlign={'center'}
                      fontWeight={600}
                      sx={{
                        borderBottom: '1px solid #fff',
                      }}
                    >
                      Release Date:
                    </Typography>
                    <Typography color={'primary'} textAlign={'center'}>
                      {season.air_date
                        ? dateFormat.format(new Date(season.air_date))
                        : 'missing'}
                    </Typography>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>

      <Box mx={3} my={3}>
        <Typography variant="body1">{overview}</Typography>
      </Box>
    </Box>
  );
};
export default TvShowDetail;
