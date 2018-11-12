import React from 'react';

const Button = ({ onClick,value }) => {
  return (
    <input type="button" value={value} onClick={onClick} />
  )
}

export default Button;