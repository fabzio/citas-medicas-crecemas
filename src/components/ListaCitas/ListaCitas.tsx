import { Container, Grid, Pagination } from "@mui/material";
import useCitasStore from "@/hooks/useCitasStore";
import CardCita from "./CardCita";
import FiltersButton from "./FiltersButton";
import { useState } from "preact/hooks";
import { Filter } from "@/interfaces/Filter";
import filterCitas from "@/utils/filterCitas";

const filters = {
  dni: "",
  nombre: "",
  sintomas: "",
  genero: "",
  fechaInicio: null,
  fechaFin: null,
};

export default function ListaCitas() {
  const { citas } = useCitasStore();

  const [filter, setFilter] = useState<Filter>(filters);
  const [page, setPage] = useState(1);
  const filteredCitas = filterCitas(citas, filter);
  const paginatedCitas =
    filteredCitas.length > 6
      ? filteredCitas.slice((page - 1) * 6, page * 6)
      : filteredCitas;

  return (
    <Container>
      {citas.length > 0 && (
        <FiltersButton filter={filter} setFilter={setFilter} />
      )}
      {filteredCitas.length > 6 && (
        <Pagination
          count={Math.ceil(filteredCitas.length / 6)}
          color="primary"
          onChange={(_, value) => setPage(value)}
          sx={{
            mx: "auto",
            mt: 1,
          }}
        />
      )}
      <Grid
        container
        spacing={1}
        sx={{
          mt: 1,
        }}
      >
        {paginatedCitas.map((cita) => (
          <Grid item xs={12} md={6} lg={4} key={cita._id}>
            <CardCita key={cita._id} cita={cita} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
