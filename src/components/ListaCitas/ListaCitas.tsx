import { Container, Grid } from "@mui/material";
import useCitasStore from "@/hooks/useCitasStore";
import CardCita from "./CardCita";
import FiltersButton from "./FiltersButton";
import { useState } from "preact/hooks";
import { Filter } from "@/interfaces/Filter";
import filterCitas from "@/utils/filterCitas";

export default function ListaCitas() {
  const { citas } = useCitasStore();
  const filters = {
    dni: "",
    nombre: "",
    sintomas: "",
    genero: "",
    fechaInicio: null,
    fechaFin: null,
  };
  const [filter, setFilter] = useState<Filter>(filters);

  const filteredCitas = filterCitas(citas, filter);

  return (
    <Container>
      {citas.length > 0 && (
        <FiltersButton filter={filter} setFilter={setFilter} />
      )}
      <Grid
        container
        spacing={1}
        sx={{
          mt: 1,
        }}
      >
        {filteredCitas.map((cita) => (
          <Grid item xs={12} md={6} lg={4} key={cita._id}>
            <CardCita key={cita._id} cita={cita} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
