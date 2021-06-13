import React from 'react';
import styles from './Button.module.scss';

const Button = ({ type, children, value, onClick }) => {
  const handleClick = e => {
    onClick ? onClick(e) : console.log('No click handler!');
  };
  return (
    <button
      value={value}
      onClick={e => handleClick(e)}
      className={[styles.button, styles[type]].join(' ')}>
      {children}
    </button>
  );
};

export default Button;
