import moment from "moment";
import { Cita } from "../interfaces/Cita";
import { Filter } from "../interfaces/Filter";

function removeAccents(str: string): string {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const filterCitas = (citas: Cita[], filter: Filter) => {
  return citas.filter(
    (cita) =>
      cita.dni.toLowerCase().startsWith(filter.dni) &&
      removeAccents(cita.nombre)
        .toLowerCase()
        .startsWith(removeAccents(filter.nombre).toLowerCase()) &&
      removeAccents(cita.sintomas)
        .toLowerCase()
        .startsWith(removeAccents(filter.sintomas).toLowerCase()) &&
      cita.genero.includes(filter.genero) &&
      (filter.fechaInicio === null ||
        moment(cita.fecha).isSameOrAfter(filter.fechaInicio)) &&
      (filter.fechaFin === null ||
        moment(cita.fecha).isSameOrBefore(filter.fechaFin))
  );
};

export default filterCitas;
