import { Box } from '@mui/material';
import footerTheme from '../assets/footerTheme.svg';

const Footer = () => {
  return (
    <Box
      component={'footer'}
      sx={{
        position: 'relative',
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <img
        src={footerTheme}
        alt="wawe footer"
        style={{
          margin: 0,
          padding: 0,
          position: 'fixed',
          bottom: 0,
          zIndex: -1,
        }}
      />
    </Box>
  );
};
export default Footer;
