import React, { Children } from 'react';
import { Button } from 'antd';

const BaseButton = ({ value, type, children, ...rest }) => {
  return (
    <Button type={type} {...rest}>
      {children}
    </Button>
  );
};

export default BaseButton;
