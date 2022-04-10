import { FC } from "react";

export type ButtonProps = {
  onClick: () => void
}

const Button: FC<ButtonProps> = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="rounded-md py-1 px-2 bg-blue-200 hover:bg-blue-300 text-blue-500 hover:text-blue-600"
  >
    {children}
  </button>
)

export default Button
