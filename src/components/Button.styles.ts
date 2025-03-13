import styled from "styled-components";
import { robotoButtonG } from "../styles/typograph";
import { transitionEase } from "../styles/utils";

export const ButtonContainer = styled.button`
  width: 100%;
  border: 0;
  border-radius: 6px;
  padding: 0.75rem 0.5rem;
  ${robotoButtonG}
  text-transform: uppercase;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme["yellow"]};
  cursor: pointer;
  ${transitionEase('background-color')}

  &:hover {
    background-color: ${props => props.theme["yellow-dark"]};
  }
`
