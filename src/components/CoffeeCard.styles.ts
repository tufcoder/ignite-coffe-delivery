import styled from "styled-components";

import { flexColumnCenter, pixelsToRem } from "../styles/utils";
import { baloo2M, baloo2S, robotoS, robotoTag } from "../styles/typograph";

export const CoffeeCardContainer = styled.div`
  position: relative;
  max-width: ${pixelsToRem(256)};
  ${flexColumnCenter}
  gap: 1rem;
  border-radius: 6px 36px;
  padding: 1rem;
  background-color: ${props => props.theme["base-card"]};

  img {
    position: absolute;
    top: ${pixelsToRem(-25)};
  }
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-block-start: ${pixelsToRem(90)};

  span {
    border-radius: 100px;
    padding: 0.25rem 0.5rem;
    ${robotoTag}
    text-transform: uppercase;
    color: ${props => props.theme["yellow-dark"]};
    background-color: ${props => props.theme["yellow-light"]};
  }
`

export const CoffeeCardTitle = styled.p`
  ${baloo2S}
  color: ${props => props.theme["base-subtitle"]};
  text-align: center;
`

export const CoffeeCardDescription = styled.p`
  max-width: ${pixelsToRem(216)};
  ${robotoS}
  text-align: center;
  color: ${props => props.theme["base-label"]};
`

export const CoffeeCardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  margin-block-start: ${pixelsToRem(33)};

  span {
    ${robotoS}

    strong {
      ${baloo2M}
    }
  }

  div {
    display: flex;
    gap: 0.5rem;
  }
`
