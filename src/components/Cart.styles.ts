import styled from "styled-components";

import { robotoXS } from "../styles/typograph";

interface CartContainerProps {
  $items: number
}

export const CartContainer = styled.div<CartContainerProps>`
  position: relative;
  display: grid;
  align-content: center;
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;
  background-color: ${props => props.theme["yellow-light"]};
  cursor: pointer;

  svg {
    fill: ${props => props.theme["yellow-dark"]};
  }

  &:hover {
    background-color: ${props => props.theme["yellow-light"]};
  }

  ${props => {
    return props.$items > 0 && `
      &::after {
        position: absolute;
        content: '${props.$items}';
        top: -0.5rem;
        right: -0.5rem;
        width: 1.25rem;
        height: 1.25rem;
        display: grid;
        align-content: center;
        justify-content: center;
        border-radius: 50%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${props.theme["yellow-light"]};
        background-color: ${props.theme["yellow-dark"]};
      }
    `
  }}

  &::after {
    ${robotoXS()}
  }
`
