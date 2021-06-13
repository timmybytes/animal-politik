import React, { useState } from 'react';
import styles from './Button.module.scss';

const Button = ({ type, children, value, onClick, selected, ...props }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = e => {
    onClick ? onClick(e) : console.log('No click handler!');
  };

  return (
    <button
      value={value}
      onClick={e => handleClick(e)}
      className={[
        styles.button,
        styles[type],
        isSelected ? styles.selected : '',
      ].join(' ')}>
      {children}
    </button>
  );
};

export default Button;
