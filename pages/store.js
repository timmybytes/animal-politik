import Product from '@components/Product/Product';
import ProductPreview from '@components/ProductPreview/ProductPreview';
import styles from '@styles/Store.module.scss';
import React, { useState } from 'react';
import products from '../store/products.json';

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
      {children}
    </div>
  );
};

export default Store;
