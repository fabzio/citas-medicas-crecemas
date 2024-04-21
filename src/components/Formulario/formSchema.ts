import { z } from "zod";
import moment, { Moment } from "moment";

const schema = z.object({
  nombre: z
    .string({
      required_error: "El nombre es requerido",
    })
    .trim()
    .min(1, {
      message: "El nombre es requerido",
    }),
  fecha: z.custom((value) => {
    if (!value || !moment(value as Moment).isValid()) {
      return false;
    }
    return true;
  }, "La fecha es requerida"),
  dni: z
    .string({
      required_error: "El documento de identidad es requerido",
    })
    .length(8, {
      message: "El documento de identidad debe tener 8 dígitos",
    }),
  hora: z.custom((value) => {
    if (!value || !moment(value as Moment).isValid()) {
      return false;
    }
    return true;
  }, "La hora es requerida"),
  sintomas: z
    .string({
      required_error: "Los síntomas son requeridos",
    })
    .trim()
    .min(1, {
      message: "Los síntomas son requeridos",
    }),
  genero: z
    .string({
      required_error: "El género es requerido",
    })
    .min(1, {
      message: "El género es requerido",
    }),
});

export default schema;
