import React from 'react';

const Input = (props) => {
  const { type, name, label, placeholder } = props;

  return (
    <>
      {label !== '' && <label htmlFor={name}>{label}</label>} <br />
      {type === 'textarea' ? (
        <textarea id={name} name={name} placeholder={placeholder} />
      ) : (
        <input type={type} id={name} name={name} placeholder={placeholder} />
      )}
    </>
  );
};

export default Input;
