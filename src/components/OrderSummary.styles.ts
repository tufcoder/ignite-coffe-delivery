import styled from "styled-components";
import { pixelsToRem } from "../styles/utils";
import { robotoM } from "../styles/typograph";

export const OrderSummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme["base-button"]};
  padding-block: 1.5rem;

  strong {
    ${robotoM({ isBold: true })}
  }
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const ButtonsContainer = styled.p`
  margin-block-start: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    max-height: ${pixelsToRem(32)};
  }
`
