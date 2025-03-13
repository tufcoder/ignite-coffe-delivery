import { cloneElement, ReactElement } from "react"

import { IconSpan } from "./IconWrapper.styles"

interface IconWrapperProps {
  icon: ReactElement<HTMLElement>
  title: string
  bg?: string
}

export function IconWrapper({ icon, title, bg }: IconWrapperProps) {
  const clonedIcon = cloneElement(icon, { title })
  return bg ? (
    <IconSpan title={title} $bg={bg}>
      {clonedIcon}
    </IconSpan>
  ) : (
    <IconSpan title={title}>
      {clonedIcon}
    </IconSpan>
  );
}
