import styled, { css } from "styled-components";

import { pixelsToRem } from "../styles/utils";
import { above, media } from "../styles/breakpoints";
import { baloo2L, baloo2M, baloo2XL, robotoL } from "../styles/typograph";

const vectorYellow = css`
  position: absolute;
  filter: blur(2rem);
  opacity: 0.5;
  z-index: -1;
  user-select: none;
`

const vectorPurple = css`
  ${vectorYellow}
  opacity: 0.35;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-block-start: ${pixelsToRem(40)};
  position: relative;

  ${above('tablet')} {
    flex-direction: row;
    gap: ${pixelsToRem(40)};
  }

  ${above('desktop')} {
    margin-block-start: ${pixelsToRem(80)};
    gap: ${pixelsToRem(80)};
  }

  & .vector1 {
    ${vectorPurple}
    top: ${pixelsToRem(105)};
    left: ${pixelsToRem(-210)};
  }

  & .vector2 {
    ${vectorPurple}
    bottom: ${pixelsToRem(50)};
    left: ${pixelsToRem(384)};
  }

  & .vector3 {
    ${vectorPurple}
    top: ${pixelsToRem(30)};
    right: ${pixelsToRem(-177)};
  }

  section {
    display: grid;
    justify-items: center;

    header {
      h1 {
        position: relative;
        ${baloo2M}

        ${above("notebook")} {
          ${baloo2L}
        }

        ${media("min-width", 1438)} {
          ${baloo2XL}
        }

        & .vector {
          ${vectorYellow}
          left: ${pixelsToRem(-100)};
        }
      }

      p {
        ${robotoL()};
        color: ${props => props.theme["base-subtitle"]};
      }
    }

    ul {
      position: relative;
      display: grid;
      grid-template-columns: 1fr;
      gap: ${pixelsToRem(20)};
      margin-block: ${pixelsToRem(40)};

      ${above('tablet')} {
        max-width: ${pixelsToRem(567)};
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, auto);
        gap: 1.25rem;
      }

      & .vector {
        ${vectorYellow}
        top: ${pixelsToRem(-50)};
        left: 0;
        transform: rotate(191.5deg);
      }

      & .vector-middle {
        ${vectorYellow}
        opacity: 0.5;
        top: ${pixelsToRem(-182)};
        right: ${pixelsToRem(-170)};
        transform: rotate(180deg);
        scale: .75;
      }

      li {
        display: flex;
        align-items: center;
        gap: ${pixelsToRem(12)};
      }

      ${media("min-width", 1437)} {
        li:last-child {
          width: ${pixelsToRem(294)};
        }
      }
    }
  }

  aside {
	  position: relative;
    align-self: center;

    ${above('desktop')} {
      max-width: ${pixelsToRem(476)};
      max-height: ${pixelsToRem(360)};
      flex: 100%;
    }

    & .vector-top {
      ${vectorYellow}
      top: 0;
      right: -2rem;
      transform: rotate(25deg);
      scale: 1.3;
    }

    & .vector-bottom {
      ${vectorYellow}
      bottom: -0.5rem;
      transform: rotate(180deg);
    }

    & .vector-purple-bottom {
      ${vectorPurple}
      right: -12.5rem;
      bottom: 0;
    }

    img {
      object-fit: cover;
    }
  }
`
