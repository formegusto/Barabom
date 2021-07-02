import React from 'react';
import styled, { css } from 'styled-components';

interface Props
  extends React.StyleHTMLAttributes<HTMLInputElement>,
    StyleProps {}

function TextInput(props: Props) {
  return <Input {...props} />;
}

type StyleProps = {
  block?: boolean;
  value?: string;
};

const Input = styled.input<StyleProps>`
  ${(props) =>
    props.block &&
    css`
      width: 100%;
      display: block;
    `}

  font-size: 1.75rem;
  padding: 0.75rem 1rem;

  color: #666;
  box-sizing: border-box;
  border-radius: 2rem;
  border: none;
  outline: none;

  box-shadow: 2px 2px 10px #ccc;

  &::placeholder {
    color: #eee;
  }
`;

export default TextInput;
