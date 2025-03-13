import styled from "styled-components";
import { flexRowCenter, transitionEase } from "../styles/utils";
import { robotoButtonM } from "../styles/typograph";

export const ButtonRemoveContainer = styled.button`
  height: 2rem;
  ${flexRowCenter}
  gap: 0.25rem;
  border: 0;
  border-radius: 6px;
  padding: 0 0.5rem;
  ${robotoButtonM}
  text-transform: uppercase;
  background-color: ${props => props.theme["base-button"]};
  cursor: pointer;
  ${transitionEase('background-color')}

  &:hover {
    background-color: ${props => props.theme["base-hover"]};

    svg {
      color: ${props => props.theme["purple-dark"]};
    }
  }

  svg {
    color: ${props => props.theme.purple};
  }
`
