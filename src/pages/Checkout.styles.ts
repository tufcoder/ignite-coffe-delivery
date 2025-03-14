import styled from "styled-components";

import { pixelsToRem } from "../styles/utils";
import { above, media } from "../styles/breakpoints";
import {
  baloo2XS,
  robotoButtonM,
  robotoL,
  robotoM,
  robotoS,
} from "../styles/typograph";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  ${media("min-width", 1437)} {
    flex-direction: row;
    gap: 2rem;
  }
`

export const MainContainer = styled.main`
  margin-block-start: ${pixelsToRem(10)};
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  span {
    cursor: pointer;
  }

  h2 {
    ${baloo2XS}
    color: ${props => props.theme["base-subtitle"]};
  }
`

const SectionContainerBase = styled.section`
  max-width: ${pixelsToRem(580)};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 6px;
  padding: ${pixelsToRem(12)};
  background-color: ${props => props.theme["base-card"]};

  ${above("notebook")} {
    padding: ${pixelsToRem(40)};
    max-width: ${pixelsToRem(640)};
  }

  header {
    display: flex;
    gap: 0.5rem;

    span {
      align-self: flex-start;
    }

    h3 {
      ${robotoM()}
      color: ${props => props.theme["base-subtitle"]};
    }

    p {
      ${robotoS}
    }
  }
`

export const SectionAddressContainer = styled(SectionContainerBase)`
  header {
    span {
      color: ${props => props.theme["yellow-dark"]};
    }
  }
`

export const SectionPaymentContainer = styled(SectionContainerBase)`
  header {
    span {
      color: ${props => props.theme.purple};
    }
  }
`

export const FormInputsContainer = styled.div`
  display: flex;
  flex-direction: column;

  div {
    ${above("tablet")} {
      display: flex;
      gap: 0.5rem;
    }

    ${above("desktop")} {
      gap: 0.75rem;
    }

    label {
      ${above("tablet")} {
        &:first-child {
          width: ${pixelsToRem(200)};
        }

        &:has(#street) {
          flex: 1;

          input {
            width: 100%;
          }
        }

        &:has(#uf) {
          width: ${pixelsToRem(60)};
          input {
            text-transform: uppercase;
          }
        }
      }
    }

    input {
      margin-block-end: 0.5rem;

      ${above("tablet")} {
        margin-inline-end: 0.5rem;

        &:last-child {
          margin-inline-end: unset;
        }
      }

      ${above("desktop")} {
        margin-block-end: 1rem;
      }
    }
  }
`

export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  ${above("tablet")} {
    flex-direction: row;
    gap: 0.75rem;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    border: 1px solid transparent;
    border-radius: 6px;
    padding: 1rem;
    text-transform: uppercase;
    ${robotoButtonM}
    background-color: ${props => props.theme["base-button"]};

    ${above('tablet')} {
      width: ${pixelsToRem(178)};
    }

    svg {
      color: ${props => props.theme.purple};
    }

    &:has(input[type=radio]:checked) {
      border: 1px solid ${props => props.theme.purple};
      background-color: ${props => props.theme["purple-light"]};
    }

    input[type=radio] {
      display: none;
    }
  }
`

export const AsideContainer = styled.aside`
  max-width: ${pixelsToRem(580)};
  flex: 1;
  margin-block-start: ${pixelsToRem(40)};

  ${above("notebook")} {
    max-width: ${pixelsToRem(640)};
  }

  h2 {
    ${baloo2XS}
    color: ${props => props.theme["base-subtitle"]};
  }
`

export const AsideContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-block-start: 1rem;
  border-radius: 6px;
  padding: ${pixelsToRem(12)};
  background-color: ${props => props.theme["base-card"]};

  ${above("notebook")} {
    border-radius: 6px 36px;
    padding: ${pixelsToRem(40)};
  }
`

export const Summary = styled.div`
  p, strong {
    display: flex;
    justify-content: space-between;
  }
`

export const SummaryItem = styled.p`
  ${robotoS}
`

export const SummaryTotal = styled.strong`
  ${robotoL({ isBold: true })}
`
