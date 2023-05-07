import { Typography } from '@mui/material';

const DetailHeader = ({ title }) => {
  return (
    <Typography variant="h2" ml={3} my={2} fontWeight={500}>
      {title}
    </Typography>
  );
};
export default DetailHeader;
