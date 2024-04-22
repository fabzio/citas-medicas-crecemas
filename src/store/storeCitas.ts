import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-hot-toast";
import { type Cita } from "../interfaces/Cita";
import schema from "@/components/Formulario/formSchema";
import { ZodError } from "zod";

interface CitaState {
  citas: Cita[];
  addCita: (cita: Cita) => void;
  addManyCitas: (citas: Cita[]) => void;
  removeCita: (id: string) => void;
}

const citasStore = create<CitaState>()(
  persist(
    (set) => ({
      citas: [],
      addCita: (cita) => {
        const isDuplicated = citasStore
          .getState()
          .citas.some((existingCita) => {
            const { _id: _, ...existingCitaWithoutId } = existingCita;
            const { _id: __, ...citaWithoutId } = cita;
            return (
              JSON.stringify(existingCitaWithoutId) ===
              JSON.stringify(citaWithoutId)
            );
          });
        if (!isDuplicated) {
          set((state) => ({ citas: [...state.citas, cita] }));
          toast.success("Cita agregada correctamente", {
            position: "top-right",
          });
        } else {
          toast.error("La cita ya existe", {
            position: "top-right",
          });
        }
      },
      addManyCitas: (citas) => {
        let parsedCitas: Cita[];
        const newCitas = citas.filter((cita) => {
          const isDuplicated = citasStore
            .getState()
            .citas.some((existingCita) => {
              const { _id: _, ...existingCitaWithoutId } = existingCita;
              const { _id: __, ...citaWithoutId } = cita;
              return (
                JSON.stringify(existingCitaWithoutId) ===
                JSON.stringify(citaWithoutId)
              );
            });
          return !isDuplicated;
        });
        if (newCitas.length === 0) {
          toast.error("No hay citas nuevas para agregar", {
            position: "top-right",
          });
          return;
        }
        try {
          parsedCitas = newCitas.map((cita) => {
            const validated = schema.parse(cita);
            return { _id: cita._id, ...validated } as Cita;
          });
        } catch (error: unknown) {
          const zodError = error as ZodError;
          toast.error(
            `${zodError.errors.length} errores en el archivo: ${zodError.errors[0].message}`,
            {
              position: "top-right",
            }
          );
          return;
        }

        set((state) => ({ citas: [...state.citas, ...parsedCitas] }));
        toast.success(`${parsedCitas.length} citas agregadas correctamente`, {
          position: "top-right",
        });
      },
      removeCita: (id) => {
        set((state) => ({
          citas: state.citas.filter((cita) => cita._id !== id),
        })),
          toast.success("Cita eliminada correctamente", {
            position: "top-right",
          });
      },
    }),
    {
      name: "citas-storage",
    }
  )
);

export default citasStore;
