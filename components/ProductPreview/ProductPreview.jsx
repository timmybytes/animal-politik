import Button from '@components/Button/Button';
import React from 'react';
import styles from './ProductPreview.module.scss';

const ProductPreview = ({
  onClick,
  title,
  id,
  description,
  price,
  images = [],
  tags = [],
}) => {
  const handleClick = e => {
    onClick();
  };
  return (
    <div className={styles.productPreview} key={id || '1'}>
      {/* Column One */}
      <div className={styles.productPreview__columnOne}>
        {images.map((img, idx) => (
          <img key={idx} src={img} alt={title || 'product image'} />
        ))}
      </div>
      {/* Column two */}
      <div className={styles.productPreview__columnTwo}>
        <Button onClick={handleClick}>X</Button>
        <h3>{title || 'Product Title'}</h3>
        <p>{description || 'Product description'}</p>
        <p>${price || 'N/A'}</p>
        {<p>{tags.map(tag => `#${tag} `)}</p>}
        <Button type='primary'>Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductPreview;
