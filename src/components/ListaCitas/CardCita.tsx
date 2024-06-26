import {
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import useCitasStore from "@/hooks/useCitasStore";
import getGenero from "@/utils/getGenero";
import { type Cita } from "@/interfaces/Cita";
import moment from "moment";

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
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            minHeight: "3.6em",
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
          DNI: {cita.dni}
        </Typography>
        <Stack direction="column" spacing={2} mt={2}>
          <TextField
            label="Síntomas"
            value={cita.sintomas}
            multiline
            fullWidth
            disabled
          />

          <TextField
            label="Género"
            value={getGenero(cita.genero)}
            fullWidth
            disabled
          />
          <TextField
            label="Fecha"
            value={moment(cita.fecha).format("DD-MM-YYYY")}
            fullWidth
            disabled
          />
          <TextField
            label="Hora"
            value={moment(cita.hora).format("HH:mm")}
            fullWidth
            disabled
          />
        </Stack>
        <Button
          variant="contained"
          sx={{
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
