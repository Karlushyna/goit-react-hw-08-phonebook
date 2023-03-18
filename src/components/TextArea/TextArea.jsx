import { useMemo } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import styles from './text-area.module.css';

const TextArea = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>{label}</label>
      <input
        className={styles.field}
        id={id}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export default TextArea;
