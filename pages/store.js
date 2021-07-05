import Button from '@components/Button/Button';
import styles from '@styles/Store.module.scss';
import React, { useState } from 'react';
import products from '../store/products.json';

const Product = ({ title, id, description, price, images, tags }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div key={id} className={styles.storeGrid__item}>
      <img src={images[0]} alt='placeholder' />
      {!showInfo ? (
        <Button type='flat' onClick={() => setShowInfo(!showInfo)}>
          Info
        </Button>
      ) : (
        <Button type='outline' onClick={() => setShowInfo(!showInfo)}>
          X
        </Button>
      )}
      <div
        style={showInfo ? { display: 'flex' } : { display: 'none' }}
        className={styles.storeGrid__itemInfo}>
        <h3>{title || 'Product Title'}</h3>
        <p>{description || 'Product description'}</p>
        <p>${price || 'N/A'}</p>
        {<p>{tags.map(tag => `#${tag} `)}</p>}
        <Button type='primary'>Add to Cart</Button>
      </div>
    </div>
  );
};

const Store = ({ children }) => {
  return (
    <div className={styles.page}>
      <h1 className='page_title'>Store</h1>
      <h2>Feed our capitalist hunger!</h2>
      <div className={styles.storeGrid}>
        {products.map(product => (
          <Product
            title={product.title}
            description={product.description}
            images={product.images}
            price={product.price}
            tags={product.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Store;
