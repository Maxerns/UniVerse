import React from 'react';
import nextArrowImage from '../../assets/chevron-right.png'; 

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, backgroundImage: `url(${nextArrowImage})`, width: '50px', height: '50px' }}
      onClick={onClick}
    />
  );
};

export default CustomNextArrow;
