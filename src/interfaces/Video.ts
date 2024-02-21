import { IDetails } from "./Details";

export interface IVideo {
  details: IDetails[];
  videoLink: string;
  title: string;
  img: string;
  likes: number;
}