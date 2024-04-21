import { Button, Card, CardContent, Typography } from "@mui/material";
import useCitasStore from "../../hooks/useCitasStore";

export default function CardCita({ cita }: { cita: Cita }) {
  const { removeCita } = useCitasStore();
  return (
    <Card
      sx={{
        backgroundColor: "#485361",
        p: 2,
        my: 2,
      }}
    >
      <CardContent>
        <Typography
          sx={{
            color: "#f9f9f9",
            fontSize: { md: "1.5rem", xs: "1.2rem" },
          }}
        >
          {cita.nombre}
        </Typography>
        <Typography
          sx={{
            color: "#f9f9f9",
            fontSize: { md: "1.2rem", xs: "1rem" },
          }}
        >
          {cita.fecha} - {cita.hora}
        </Typography>
        <Typography
          sx={{
            color: "#f9f9f9",
            fontSize: { md: "1rem", xs: "0.9rem" },
          }}
        >
          {cita.sintomas}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#f9f9f9",
            color: "#485361",
            mt: 2,
          }}
          onClick={() => removeCita(cita._id)}
        >
          Borrar
        </Button>
      </CardContent>
    </Card>
  );
}
