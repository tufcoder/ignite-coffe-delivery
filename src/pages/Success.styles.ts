import styled from "styled-components";

import { pixelsToRem } from "../styles/utils";
import { above, media } from "../styles/breakpoints";
import { baloo2L, robotoL, robotoM } from "../styles/typograph";

export const SuccessContainer = styled.section`
  margin-block-start: ${pixelsToRem(40)};

  ${above('desktop')} {
    margin-block-start: ${pixelsToRem(80)};
  }

  header {
    margin-block-end: ${pixelsToRem(20)};

    ${above('desktop')} {
      margin-block-end: ${pixelsToRem(40)};
    }

    h1 {
      ${baloo2L}
      color: ${props => props.theme["yellow-dark"]};
    }

    p {
      ${robotoL({ isBold: false })}
    }
  }
`

export const MainContainer = styled.main`
  display: grid;
  align-content: center;
  gap: ${pixelsToRem(20)};

  ${above('tablet')} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${pixelsToRem(30)};
  }

  img {
    align-self: center;
    object-fit: cover;
  }
`

export const ContentContainerGradient = styled.div`
  padding: 1px;
  border-radius: 6px 36px;
  background: linear-gradient(
    .25turn,
    ${props => props.theme["yellow"]},
    ${props => props.theme["yellow-dark"]},
    ${props => props.theme["purple-dark"]}
  );

  ${above('tablet')} {
    max-width: ${pixelsToRem(436)};
    max-height: ${pixelsToRem(272)};
  }
`

export const ContentContainer = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${pixelsToRem(16)};
  border-radius: inherit;
  padding: ${pixelsToRem(20)};
  background: ${props => props.theme.background};

  ${above('tablet')} {
    gap: ${pixelsToRem(24)};
    padding: ${pixelsToRem(32)};
  }

  ${media("max-width", 991)} {
    gap: ${pixelsToRem(28)};
    padding: ${pixelsToRem(36)};
  }

  ${above('notebook')} {
    gap: ${pixelsToRem(32)};
    padding: ${pixelsToRem(40)};
  }

  li {
    display: flex;
    align-items: center;
    gap: ${pixelsToRem(12)};

    div {
      address {
        ${robotoM({ isBold: true })}

        p, span {
          ${robotoM()}
        }

        p {
          strong {
            ${robotoM({ isBold: true })}
          }
        }
      }
    }
  }
`

interface IconContainerProps {
  $icon: 'map' | 'clock' | 'currency'
}

export const IconContainer = styled.div<IconContainerProps>`
  display: grid;
  align-content: center;
  border-radius: 50%;
  padding: 0.5rem;
  color: ${props => props.theme.white};
  background-color: ${props => {
    switch (props.$icon) {
      case "map":
        return props.theme["purple-dark"]
      case "clock":
        return props.theme["yellow"]
      case "currency":
        return props.theme["yellow-dark"]
      default:
        return props.theme["purple-dark"]
    }
  }};
`
