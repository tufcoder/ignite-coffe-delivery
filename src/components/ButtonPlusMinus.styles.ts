import styled from "styled-components";
import { flexRowCenter } from "../styles/utils";
import { robotoM } from "../styles/typograph";

export const ButtonPlusMinusContainer = styled.span`
  ${flexRowCenter}
  gap: 0.25rem;
  border-radius: 6px;
  padding: 0.5rem;
  background-color: ${props => props.theme["base-button"]};

  button {
    border: 0;
    color: ${props => props.theme.purple};
    cursor: pointer;
  }
`

export const AmountSpan = styled.span`
  min-width: 1.25rem;
  ${robotoM()}
  text-align: center;
  color: ${props => props.theme["base-title"]};
`
