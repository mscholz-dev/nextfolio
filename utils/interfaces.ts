// types
import { TFormInput } from "./types";

export interface IPage {
  children: JSX.Element;
  title: string;
  description: string;
  padding?: boolean;
  className?: string;
}

export interface IFormInput extends TFormInput {}
