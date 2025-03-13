import { InputHTMLAttributes } from "react"

import {
  InputContainer,
  InputElement
} from "./Input.styles"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  optional?: boolean
}

export function Input({ label, optional = false, ...props }: InputProps) {
  return (
    <InputContainer htmlFor={label && props.id}>
      <InputElement {...props} $optional={optional} />
      {optional && <span>Opcional</span>}
    </InputContainer>
  )
}
