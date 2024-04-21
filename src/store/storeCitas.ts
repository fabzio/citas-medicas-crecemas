import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-hot-toast";
import { type Cita } from "../interfaces/Cita";

interface CitaState {
  citas: Cita[];
  addCita: (cita: Cita) => void;
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
          toast.success("Cita agregada correctamente");
        } else {
          toast.error("La cita ya existe");
        }
      },
      removeCita: (id) =>
        set((state) => ({
          citas: state.citas.filter((cita) => cita._id !== id),
        })),
    }),
    {
      name: "citas-storage",
    }
  )
);

export default citasStore;
