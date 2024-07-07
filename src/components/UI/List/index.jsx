import React from 'react';
import styles from './List.module.css';

const List = (props) => {
  const { listItems } = props;

  return (
    <ul>
      {listItems.map((item, index) => (
        <li key={index}>
          {item.link ? (
            <a className={styles.link} href={item.link}>
              {item.label}
            </a>
          ) : (
            <span>{item.label}</span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
