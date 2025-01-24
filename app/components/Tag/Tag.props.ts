import { ReactNode } from "react";

export interface ITAg
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  size: "s" | "l";
  children: ReactNode;
  color?: "ghost" | "red" | "grey" | "green" | "primary";
  href?: string;
}
