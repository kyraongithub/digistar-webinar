import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import React from 'react';
import styles from './Searchbar.module.css';

const Searchbar = (props) => {
  const { isButtonRight, classname } = props;
  return (
    <div className={`${styles.search} ${classname}`}>
      {!isButtonRight && <Button>Search</Button>}
      <Input type="text" placeholder="Search" />
      {isButtonRight && <Button>Search</Button>}
    </div>
  );
};

export default Searchbar;
