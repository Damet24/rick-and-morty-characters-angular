import { Gender, Info, Species, Status, Location } from "src/types.d";

export interface CharacterData {
  info: Info;
  results: Character[];
}

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

