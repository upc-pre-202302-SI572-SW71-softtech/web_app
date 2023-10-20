import { Travel } from "./travel";

export interface Tip {
    id: number;
    name: string;
    description: string;
    travel: Travel;
}  