import citasStore from "../store/storeCitas";

const useCitasStore = () => {
  const { citas, addCita, removeCita } = citasStore();
  return { citas, addCita, removeCita };
};

export default useCitasStore;
