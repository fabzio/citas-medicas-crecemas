import citasStore from "../store/storeCitas";

const useCitasStore = () => {
  const { citas, addCita, removeCita, addManyCitas } = citasStore();
  return { citas, addCita, removeCita, addManyCitas };
};

export default useCitasStore;
