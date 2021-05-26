import React from 'react';
import { Card } from 'antd';

const CustomCard = ({ children, ...otherProps }) => (
  <div>
    <Card {...otherProps}>{children}</Card>
  </div>
);

export default CustomCard;
