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

  font-size: 2rem;
  padding: 0.5rem;

  color: #666;
  box-sizing: border-box;
  border-radius: 1rem;
  border: 1px solid #ccc;

  &::placeholder {
    color: #eee;
  }
`;

export default TextInput;
