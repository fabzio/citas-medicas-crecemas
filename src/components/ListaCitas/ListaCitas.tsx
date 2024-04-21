import { Grid } from "@mui/material";
import useCitasStore from "../../hooks/useCitasStore";
import CardCita from "./CardCita";

export default function ListaCitas() {
  const { citas } = useCitasStore();
  return (
    <Grid
      container
      spacing={1}
      sx={{
        mt: 2,
      }}
    >
      {citas.map((cita) => (
        <Grid item xs={12} md={6} lg={4} key={cita._id}>
          <CardCita key={cita._id} cita={cita} />
        </Grid>
      ))}
    </Grid>
  );
}
