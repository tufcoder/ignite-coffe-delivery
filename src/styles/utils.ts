import { css } from "styled-components";

/**
 * Rules for flex `row` containers with `center` alignment.
 */
export const flexRowCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

/**
 * Rules for flex `column` containers with `center` alignment.
 */
export const flexColumnCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

/**
 *
 * @param property A property to apply a transition effect.
 * @returns A CSS with the default: `transition <property> 0.3s ease;`.
 *
 * @example
 * const style = css`
 *  ${transitionEase('background-color')} // transition: background-color 0.3s ease;
 * `
 */
export const transitionEase = (property: string) => css`
  transition: ${property} 0.3s ease;
`

/**
 * Generates a conversion to a value in pixels to rem units.
 *
 * @param pixels Positive number in pixels to be converted in rem.
 * @param base Optional parameter. The default value is 16px for conversion.
 * @returns {string} A string containing the pixels converted in `rem` units.
 * @throws {TypeError} If pixels or base is not a number.
 * @throws {RangeError} If pixels or base is not a positive number.
 * @throws {Error} If base is zero.
 *
 * @example
 * const styles = css`
 *  width: ${pixelsToRem(1440)}; // width: '90rem';
 * `
 */
export function pixelsToRem(pixels: number, base: number = 16): string {
  if (typeof pixels !== 'number' || typeof base !== 'number') {
    throw new TypeError('Pixels and base must be numbers.')
  }

  if (base <= 0) {
    throw new RangeError('Base must be a positive number.')
  }

  return `${pixels / base}rem`
}
