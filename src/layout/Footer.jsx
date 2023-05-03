import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component={'footer'}
      sx={{ position: 'relative', bottom: 0, left: 0, right: 0 }}
    >
      <Typography variant="body1">Hello Footer</Typography>
    </Box>
  );
};
export default Footer;
