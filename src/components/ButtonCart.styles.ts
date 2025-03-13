import styled from "styled-components";
import { transitionEase } from "../styles/utils";

export const ButtonCartContainer = styled.button`
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme["purple-dark"]};
  cursor: pointer;
  ${transitionEase('background-color')}

  &:hover {
    background-color: ${props => props.theme["purple"]};
  }
`
