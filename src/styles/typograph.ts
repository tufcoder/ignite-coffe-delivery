import { css } from "styled-components";

/**
 * Interface defining the `bold` property as `true` or `false`.
 */
interface FontProps {
  isBold: boolean
}

/**
 * Constant defining the font-weight value to `normal`.
 */
const fontNormal = 400
/**
 * Constant defining the font-weight value to `bold`.
 */
const fontBold = 700
/**
 * Constant defining the font-weight value to `extra-bold`.
 */
const fontExtraBold = 800

/**
 * Rules defining the defaults for the font-family `Baloo 2`.
 */
export const baloo2 = css`
  font-style: normal;
  font-family: 'Baloo 2', sans-serif;
  line-height: 1.3;
`

/**
 * Rules defining the defaults for the font-family `Roboto`.
 */
export const roboto = css`
  font-style: normal;
  font-family: 'Roboto', sans-serif;
  line-height: 1.3;
`

/**
 * Rules for font Baloo 2 `extra-large` 48px.
 */
export const baloo2XL = css`
  ${baloo2}
  font-size: 3rem;
  font-weight: ${fontExtraBold};
`

/**
 * Rules for font Baloo 2 `large` 32px.
 */
export const baloo2L = css`
  ${baloo2}
  font-size: 2rem;
  font-weight: ${fontExtraBold};
`

/**
 * Rules for font Baloo 2 `medium` (regular) 24px.
 */
export const baloo2M = css`
  ${baloo2}
  font-size: 1.5rem;
  font-weight: ${fontExtraBold};
`

/**
 * Rules for font Baloo 2 `small` 20px.
 */
export const baloo2S = css`
  ${baloo2}
  font-size: 1.25rem;
  font-weight: ${fontBold};
`

/**
 * Rules for font Baloo 2 `extra-small` 18px.
 */
export const baloo2XS = css`
  ${baloo2}
  font-size: 1.125rem;
  font-weight: ${fontBold};
`

/**
 * Rules for font Roboto `large` 20px.
 * @param props Optional. Pass an object `{isBold: true}` if you want a bold
 * font.
 *
 * @example
 * const style = css`
 *  ${robotoL()} // normal 400
 *  ${robotoL({ isBold: true })} // bold 700
 * `
 */
export const robotoL = (props?: FontProps) => css`
  ${roboto}
  font-size: 1.25rem;
  font-weight: ${props?.isBold ? fontBold : fontNormal};
`

/**
 * Rules for font Roboto `medium` (regular) 16px.
 * @param props Optional. Pass an object `{isBold: true}` if you want a bold
 * font.
 *
 * @example
 * const style = css`
 *  ${robotoM()} // normal 400
 *  ${robotoM({ isBold: true })} // bold 700
 * `
 */
export const robotoM = (props?: FontProps) => css`
  ${roboto}
  font-size: 1rem;
  font-weight: ${props?.isBold ? fontBold : fontNormal};
`

/**
 * Rules for font Roboto `small` 14px.
 */
export const robotoS = css`
  ${roboto}
  font-size: 0.875rem;
  font-weight: ${fontNormal};
`

/**
 * Rules for font Roboto `extra-small` 12px.
 */
export const robotoXS = (props?: FontProps) => css`
  ${roboto}
  font-size: 0.75rem;
  font-weight: ${props?.isBold ? fontBold : fontNormal};
`

/**
 * Rules for font Roboto in a `TAG` 10px.
 */
export const robotoTag = css`
  ${roboto}
  font-size: 0.75rem;
  font-weight: ${fontBold};
`

/**
 * Rules for font Roboto in a `large` button 14px.
 */
export const robotoButtonG = css`
  ${roboto}
  font-size: 0.875rem;
  font-weight: ${fontBold};
  line-height: 1.6;
`

/**
 * Rules for font Roboto in a `medium` button 12px.
 */
export const robotoButtonM = css`
  ${roboto}
  font-size: 0.75rem;
  font-weight: ${fontNormal};
  line-height: 1.6;
`
