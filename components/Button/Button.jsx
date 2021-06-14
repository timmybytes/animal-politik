import React from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

const Button = ({ type, children, value, onClick, ...props }) => {
  const buttonClass = cn(type, styles.button, {
    [styles.primary]: type === 'primary',
    [styles.info]: type === 'info',
    [styles.success]: type === 'success',
    [styles.warning]: type === 'warning',
    [styles.disabled]: type === 'disabled',
    [styles.selected]: type === 'selected',
    [styles.flat]: type === 'flat',
    [styles.outline]: type === 'outline',
    [styles.tracklist__flat]: type === 'tracklist__flat',
    [styles.tracklist__outline]: type === 'tracklist__outline',
    [styles.tracklist__filled]: type === 'tracklist__filled',
  });

  const handleClick = e => {
    onClick ? onClick(e) : console.log('No click handler!');
  };

  console.log(buttonClass);

  return (
    <button value={value} onClick={e => handleClick(e)} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
