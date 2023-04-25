import { ChangeEvent } from "react";

export interface TFormInput {
  icon: JSX.Element;
  id: string;
  handleChange: (e: ChangeEvent) => void;
  label: string;
  type: "text" | "email" | "number";
  value: string;
  min: number;
  max: number;
  ariaDescribedby: string;
}
