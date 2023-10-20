import { Travel } from "./travel";

export interface Agency {
    id?: number;
    name?: string;
    photoUrl?: string;
    description?: string;
    email?: string;
    location?: string;
    ruc?: string;
    numberPhone?: string; 
    stars?: number;
    travels?: Travel[];
  }
  