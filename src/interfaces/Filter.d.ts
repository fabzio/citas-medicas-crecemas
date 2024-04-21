import { Moment } from "moment";

export interface Filter {
  dni: string;
  nombre: string;
  genero: string;
  sintomas: string;
  fechaInicio: Moment | null;
  fechaFin: Moment | null;
}
