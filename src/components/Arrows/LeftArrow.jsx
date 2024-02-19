
import React from 'react';
import prevArrowImage from '../../assets/chevron-left.png';

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, backgroundImage: `url(${prevArrowImage})`, width: '50px', height: '50px' }}
      onClick={onClick}
    />
  );
};

export default CustomPrevArrow;
