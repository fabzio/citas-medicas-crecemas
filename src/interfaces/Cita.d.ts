import { Moment } from "moment";

export interface Cita {
  _id: string;
  nombre: string;
  dni: string;
  fecha: Moment | null;
  hora: Moment | null;
  sintomas: string;
  genero: string;
}
