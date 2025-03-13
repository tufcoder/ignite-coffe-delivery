import styled from "styled-components";

import { above, media } from "../styles/breakpoints";
import { flexColumnCenter, pixelsToRem } from "../styles/utils";
import { robotoS } from "../styles/typograph";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  ${media("max-width", 275)} {
    ${flexColumnCenter}
    gap: 0.25rem;
  }

  ${above("desktop")} {
    padding-bottom: 2rem;
  }

  aside {
    display: flex;
    align-items: center;
    gap: ${pixelsToRem(12)};

    address {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      border-radius: 6px;
      padding: 0.5rem;
      ${robotoS}
      color: ${props => props.theme["purple-dark"]};
      background-color: ${props => props.theme["purple-light"]};
    }
  }
`
