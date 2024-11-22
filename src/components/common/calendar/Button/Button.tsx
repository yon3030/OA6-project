import { ButtonHTMLAttributes, ReactNode, memo } from "react"
import { Mods, classNames } from "../classNames"

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  size?: ButtonSize
  disabled?: boolean
  children?: ReactNode,
  variant?: "hollow" | "filled" | "link",
  slim?: boolean
}

const oxhome = "py-5 px-15 text-[30px] leading-[38px] flex items-center justify-center gap-[10px]";

export const Button = memo((props: ButtonProps) => {
  const { className, children, disabled, size = ButtonSize.M, ...otherProps } = props

  const mods: Mods = {

  }

  const getButtonStyle = () => {
    switch (props.variant) {
      case "hollow": return ["text-white border border-solid border-white", ""];
      case "filled": return ["text-[17px] text-black bg-white shadow-black", { oxhome }];
      case "link": return ["inline-block color-inherit underline bg-none", { oxhome }];
      default: return ["p-[10px] cursor-pointer flex justify-center items-center"];
    }
  }

  return (
    <button
      type="button"
      className={classNames([...getButtonStyle(), props.slim ? "text-[20px] px-15 py-[10px]" : ""].join(" "), mods, [className])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  )
})
