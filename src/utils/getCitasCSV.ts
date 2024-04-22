import { Cita } from "@/interfaces/Cita";
import { ExtFile } from "@files-ui/react";
import moment from "moment";
import Papa from "papaparse";

const getCitasCSV = async (files: ExtFile[]) => {
  const manyCitas: Cita[] = [];
  return new Promise<Cita[]>((resolve) => {
    Papa.parse(files[0].file as File, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const { data: citas } = result;
        citas.forEach((cita: any) => {
          const newCita: Cita = {
            _id: crypto.randomUUID(),
            nombre: cita["Nombre"],
            fecha: moment(cita["Fecha"], "DD/MM/YYYY"),
            dni: cita["DNI"],
            hora: moment(cita["Hora"], "HH:mm"),
            sintomas: cita["Síntomas"],
            genero: cita["Género"],
          };

          manyCitas.push(newCita);
          resolve(manyCitas);
        });
      },
    });
  });
};

export default getCitasCSV;
