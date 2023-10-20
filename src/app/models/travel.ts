import { Activity } from "./activity";
import { Agency } from "./agency";
import { Tip } from "./tip";

export interface Travel {
    id?: number;
    name: string;
    photoLogo: string;
    description: string;
    stars: number;
    price: number;
    location: string; 
    photoPortada: string;
    photo1: string;
    photo2: string;
    photo3: string;
    photo4: string;
    createdDate: Date;
    agency: Agency;
    activities?: Activity[];
    tips?: Tip[];
  }
  