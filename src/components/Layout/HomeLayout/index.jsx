import Footer from '@/components/Container/Footer';
import Navbar from '@/components/Container/Navbar';
import React from 'react';
import styles from './Layout.module.css';

const HomeLayout = (props) => {
  const { children } = props;

  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
