import React from 'react';
import Searchbar from '../Searchbar';
import styles from './Navbar.module.css';
import List from '@/components/UI/List';
import { listItems } from '@/constant/navbarListItem';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <List listItems={listItems} />
      <Searchbar isButtonRight classname={styles.search} />
    </nav>
  );
};

export default Navbar;
