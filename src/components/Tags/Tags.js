import React from 'react';
import { Tag } from 'antd';

const Tags = ({ onClose, closable, className, value, ...rest }) => {
  return (
    <Tag closable={closable} onClose={onClose} className={className}>
      {value}
    </Tag>
  );
};

export default Tags;

//<Tag value="Abc" closable={true} className="tag-grey" />
