import { IDetails } from "./Details";

export interface IVideo {
  details: IDetails[];
  videoLink: string;
  title: string;
  img: string;
  likes?: number;
}

export interface IVideoFromSB {
  id: number;
  details: IDetails[];
  videoLink: string;
  title: string;
  img: string;
  user_id: string;
}