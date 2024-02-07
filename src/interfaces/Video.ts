import { IDetails } from "./Details";

export interface IVideo {
  details: IDetails[];
  videoLink: string;
  img: string;
  likes: number;
}