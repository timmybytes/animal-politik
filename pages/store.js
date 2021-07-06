import Button from '@components/Button/Button';
import styles from '@styles/Store.module.scss';
import React, { useState } from 'react';
import products from '../store/products.json';

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

const Product = ({ onClick, title, id, description, price, images, tags }) => {
  const handleClick = e => {
    onClick(e.currentTarget.value);
  };
  return (
    <div key={id} className={styles.storeGrid__item}>
      <img src={images[0]} alt='placeholder' />
      <div className={styles.storeGrid__itemInfo}>
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

const Store = ({ children }) => {
  const [showPreview, setShowPreview] = useState({
    visible: false,
    product: '',
  });
  const handleClick = e => {
    if (e) {
      setShowPreview({ visible: true, product: e });
    } else {
      setShowPreview({ visible: false, product: '' });
    }
  };
  return (
    <div className={styles.page}>
      <h1 className='page_title'>Store</h1>
      <h2>Feed our capitalist hunger!</h2>
      <div className={styles.storeGrid}>
        {products.map(({ id, title, description, images, price, tags }) => (
          <Product
            key={id}
            onClick={handleClick}
            id={id}
            title={title}
            description={description}
            images={images}
            price={price}
            tags={tags}
          />
        ))}
      </div>
      {showPreview.visible && (
        <div>
          {products
            .filter(product => product.id === showPreview.product)
            .map(({ id, title, description, images, price, tags }) => {
              console.log(id, title, description, images, price, tags);
              return (
                <ProductPreview
                  onClick={handleClick}
                  id={id}
                  title={title}
                  description={description}
                  images={images}
                  price={price}
                  tags={tags}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Store;
