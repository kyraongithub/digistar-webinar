import React from 'react';

const Typography = (props) => {
  const { children, variant = 'h1' } = props;
  const TypographyType = variant;

  return <TypographyType>{children}</TypographyType>;
};

export default Typography;
