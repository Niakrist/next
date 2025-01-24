import cn from "classnames";
import React from "react";
import styles from "./P.module.css";
import { IPProps } from "./P.props";

export const P: React.FC<IPProps> = ({
  children,
  size = "size16",
  ...props
}) => {
  return (
    <p {...props} className={cn(styles.p, styles[size])}>
      {children}
    </p>
  );
};
