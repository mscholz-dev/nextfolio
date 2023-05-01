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
