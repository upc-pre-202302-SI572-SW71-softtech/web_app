import { Activity } from "./activity";

export interface Travel{
    titulo: string;
    descripcion: string;
    logo: string;
    nombreAgencia: string;
    lugar: string;
    correo: string;
    telefono: number;
    fechaRegistro: string;
    precio: number;
    photo1: string;
    photo2: string;
    photo3: string;
    photo4: string;
    photo5: string;
    activities: Activity[];
}