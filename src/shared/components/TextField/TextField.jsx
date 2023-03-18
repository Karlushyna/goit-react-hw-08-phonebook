import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Input, Label } from './TextField.styled';

const TextField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} onChange={handleChange} {...props} />
    </div>
  );
};

export default TextField;

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  props: PropTypes.any,
};
