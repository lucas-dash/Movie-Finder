import { Stack, Box, Typography, IconButton, Tooltip } from '@mui/material';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';

const DetailHeader = ({ title }) => {
  return (
    <Stack
      direction={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={'100%'}
    >
      <Typography variant="h2" ml={3} my={2} fontWeight={500}>
        {title}
      </Typography>
      <Box sx={{ mr: 2 }}>
        <Tooltip title="Watchlist">
          <IconButton
            aria-label="add to watchlist"
            onClick={() => {}}
            sx={{
              border: '2px solid',
              borderColor: 'secondary.main',
              borderRadius: 5,
              p: 0.5,
            }}
          >
            <BookmarkBorderRoundedIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Stack>
  );
};
export default DetailHeader;
