import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[]
  publishers: Publisher[]
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; // array of platform objects with each plaform having Platform array
  metacritic: number;
  rating_top: number;
  released: string;
  playtime: number;
}
