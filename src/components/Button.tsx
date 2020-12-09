import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

const Btn = styled.button``;

type ButtonFieldProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  name: string;
};

const Button: React.FC<ButtonFieldProps> = ({ name, ...props }) => {
  return <Btn {...props}>{name}</Btn>;
};

export default Button;
