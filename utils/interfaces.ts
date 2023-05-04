// types
import { Dispatch, SetStateAction } from "react";
import { TFormInput } from "./types";

export interface IPage {
  children: JSX.Element;
  title: string;
  description: string;
  padding?: boolean;
  className?: string;
}

export interface IFormInput extends TFormInput {}

export interface IProjectItem {
  imgSrc: string;
  imgAlt: string;
  category: string;
  title: string;
}

export interface IDiploma {
  id: number;
  title: string;
  school: string;
  category: string;
  year: number;
}

export interface IArticle {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  category: string;
  date: string;
}

export interface IBanner {
  words: {
    id: number;
    word: string;
  }[];
}

export interface ITestimonyItem {
  firstName: string;
  lastName: string;
  job: string;
  company: string;
  audio: string;
  img: string;
}

export interface IMerntItem {
  id: number;
  icon: JSX.Element;
  color: string;
  title: string;
  subtitle: string;
  text: string;
  open: { [id: number]: boolean };
  setOpen: Dispatch<
    SetStateAction<{ [id: number]: boolean }>
  >;
  hover: { [id: number]: boolean };
  handleFocus: (id: number) => void;
  handleBlur: (id: number) => void;
}
