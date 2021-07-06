import Button from '@components/Button/Button';
import React from 'react';
import styles from './Product.module.scss';

const Product = ({ onClick, title, id, description, price, images, tags }) => {
  const handleClick = e => {
    onClick(e.currentTarget.value);
  };
  return (
    <div key={id} className={styles.product}>
      <img src={images[0]} alt='placeholder' />
      <div className={styles.productInfo}>
        <h3>{title || 'Product Title'}</h3>
        <p>{description || 'Product description'}</p>
        <p>${price || 'N/A'}</p>
        <Button type='primary' value={id} onClick={e => handleClick(e)}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default Product;
