import styled from "styled-components";

import { above } from "../styles/breakpoints";
import { pixelsToRem } from "../styles/utils";

export const DefaultLayoutContainer = styled.div`
  min-width: ${pixelsToRem(300)};
  display: grid;
  align-content: center;
  padding: 0.75rem;
  overflow-x: hidden;

  ${above('tablet')} {
    padding: 1rem 2rem;
  }

  ${above('desktop')} {
    max-width: ${pixelsToRem(1440)};
    margin: 0 auto;
    padding: 2rem 10rem;
    overflow-x: unset;
  }
`
