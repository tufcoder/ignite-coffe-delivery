import styled from "styled-components";

import { pixelsToRem } from "../styles/utils";
import { baloo2L } from "../styles/typograph";
import { above } from "../styles/breakpoints";

export const CatalogContainer = styled.section`
  header {
    h2 {
      margin-block-end: ${pixelsToRem(54)};
      ${baloo2L}
      color: ${props => props.theme['base-subtitle']};
    }
  }

  main {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: ${pixelsToRem(40)};
    justify-items: center;

    ${above("mobile")} {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 0.5rem;
    }

    ${above("tablet")} {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 1rem;
    }

    ${above("desktop")} {
      grid-template-columns: repeat(4, 1fr);
      column-gap: 2rem;
    }
  }
`
