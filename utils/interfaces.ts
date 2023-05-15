import { ChangeEvent } from "react";

// types
import { TFormInput } from "./types";

export interface IPage {
  children: JSX.Element;
  title: string;
  description: string;
  padding?: boolean;
  className?: string;
  center?: boolean;
}

export interface IFormInput extends TFormInput {}

export interface IProjectItem {
  id: number;
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
  id: number;
  imgSrc: string;
  imgAlt: string;
  title: string;
  url: string;
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
  hover: { [id: number]: boolean };
  handleFocus: (id: number) => void;
  handleBlur: (id: number) => void;
  handleClick: (id: number) => void;
}

export interface IFormTextarea {
  id: string;
  handleChange: (e: ChangeEvent) => void;
  label: string;
  value: string;
  min: number;
  max: number;
  rows: number;
  asterix: boolean;
}

export interface IFormCheckbox {
  id: string;
  handleChange: (e: ChangeEvent) => void;
  label: string;
  checked: boolean;
  asterix: boolean;
}

export interface INetworkLoader {
  tiny?: boolean;
}

export interface INewsletterUnsubscribe {
  token: string;
}

export interface IFormUnsubscribe {
  email: string;
}

export interface IArticleUrl {
  id: number;
  imgSrc: string;
  imgAlt: string;
  title: string;
  url: string;
  description: string;
  category: string;
  date: string;
  content: string;
}

export interface ContactDelete {
  token: string;
}

export interface ITagTitle {
  title: string;
}

export interface ITagSubtitle {
  subtitle: string;
}
