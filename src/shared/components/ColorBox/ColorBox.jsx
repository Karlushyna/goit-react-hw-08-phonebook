import PropTypes from 'prop-types';
import { Box, Text } from './ColorBox.stayled';

const ColorBox = ({ text }) => {
  return (
    <Box>
      <Text>{text}</Text>
    </Box>
  );
};

export default ColorBox;

ColorBox.propTypes = {
  text: PropTypes.string,
};
