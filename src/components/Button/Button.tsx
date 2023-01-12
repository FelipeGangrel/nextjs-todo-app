import React, { HTMLAttributes } from "react";

import * as S from "./Button.styles";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & S.StyledButtonVariants;

const Button: React.FC<ButtonProps> = ({ children, ...buttonProps }) => {
  return <S.Button {...buttonProps}>{children}</S.Button>;
};

export default Button;
