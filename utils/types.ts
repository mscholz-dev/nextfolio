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
  asterix: boolean;
}

export type TInspectData = Record<string, any>;

export type TInspectDataErrors = {
  key: string;
  message: string;
}[];

export type TContactData = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
};
