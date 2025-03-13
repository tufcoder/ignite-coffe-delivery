import styled from "styled-components";

import { robotoS, robotoXS } from "../styles/typograph";
import { pixelsToRem } from "../styles/utils";

export const InputContainer = styled.label`
  position: relative;
  width: 100%;
  display: inline-block;

  span {
    position: absolute;
    top: 25%;
    right: 0;
    margin-inline-end: 0.75rem;
    ${robotoXS()}
    color: ${props => props.theme["base-label"]};
  }
`

interface InputElementProps {
  $optional: boolean
}

export const InputElement = styled.input<InputElementProps>`
  width: inherit;
  border: 1px solid ${props => props.theme["base-button"]};
  border-radius: 0.25rem;
  padding: 0.75rem;
  ${props => props.$optional && `padding-inline-end: ${pixelsToRem(64)}`};
  ${robotoS}
  background-color: ${props => props.theme["base-input"]};

  &::placeholder {
    color: ${props => props.theme["base-label"]};
  }

  &:focus {
    border-color: ${props => props.theme["yellow-dark"]};
  }
`
