import styled from "styled-components"

interface IconSpanProps {
  $bg?: string
}

export const IconSpan = styled.span<IconSpanProps>`
  display: grid;
  align-content: center;

  ${(props) => {
    return props.$bg && `
      border-radius: 50%;
      padding: 0.5rem;
      color: ${props.theme.white};
      background-color: ${props.$bg};
    `;
  }};
`;
