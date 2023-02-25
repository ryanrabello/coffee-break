import { ButtonHTMLAttributes, FC } from "react";
import { x } from "@xstyled/styled-components";

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...props
}) => <x.button bg={"primary"} borderRadius color="text" {...props} />;
