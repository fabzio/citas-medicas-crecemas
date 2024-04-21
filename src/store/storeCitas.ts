import { create } from "zustand";
import { persist } from "zustand/middleware";
interface CitaState {
  citas: Cita[];
  addCita: (cita: Cita) => void;
  removeCita: (id: string) => void;
}

const citasStore = create<CitaState>()(
  persist(
    (set) => ({
      citas: [],
      addCita: (cita) => set((state) => ({ citas: [...state.citas, cita] })),
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
