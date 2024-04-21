import { create } from "zustand";

interface CitaState {
  citas: Cita[];
  addCita: (cita: Cita) => void;
  removeCita: (id: string) => void;
}

const citasStore = create<CitaState>((set) => ({
  citas: [],
  addCita: (cita) => set((state) => ({ citas: [...state.citas, cita] })),
  removeCita: (id) =>
    set((state) => ({ citas: state.citas.filter((cita) => cita._id !== id) })),
}));

export default citasStore;
