import { ButtonHTMLAttributes } from "react"
import { Trash } from "@phosphor-icons/react"

import { IconWrapper } from "./IconWrapper"
import { IconTitles } from "../utils/constants"

import { ButtonRemoveContainer } from "./ButtonRemove.styles"

type ButtonRemoveProps = ButtonHTMLAttributes<HTMLButtonElement>

export function ButtonRemove({ ...props }: ButtonRemoveProps) {
  return (
    <ButtonRemoveContainer {...props}>
      <IconWrapper icon={<Trash size={16} />} title={IconTitles.Trash} />
      remover
    </ButtonRemoveContainer>
  )
}
