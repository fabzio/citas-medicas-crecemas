import { zodResolver } from "@hookform/resolvers/zod";
import {
  Autocomplete,
  Button,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  nombre: z.string().min(1),
  fecha: z.date(),
  dni: z.string().length(8),
  hora: z.string().datetime(),
  sintomas: z.string().min(1),
  genero: z.string().min(1),
});

export default function Formulario() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "onTouched", resolver: zodResolver(schema) });

  return (
    <>
      <Paper
        sx={{
          backgroundColor: "#485361",
          p: 2,
        }}
      >
        <Typography
          sx={{
            my: 2,
            color: "#f9f9f9",
            fontSize: { md: "2rem", xs: "1.3rem" },
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Hacer una cita
        </Typography>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <Controller
                name="nombre"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Nombre"
                    error={!!errors.nombre}
                    helperText={errors.nombre?.message}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="fecha"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    label="Seleccionar fecha"
                    sx={{
                      width: "100%",
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="dni"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="DNI"
                    error={!!errors.dni}
                    helperText={errors.dni?.message}
                    fullWidth
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Controller
                name="hora"
                control={control}
                render={({ field }) => (
                  <TimePicker
                    sx={{
                      width: "100%",
                    }}
                    label="Hora"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="sintomas"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Síntomas"
                    error={!!errors.sintomas}
                    helperText={errors.sintomas?.message}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="genero"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    options={["Masculino", "Femenino"]}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Género"
                        error={!!errors.genero}
                        helperText={errors.genero?.message}
                        fullWidth
                      />
                    )}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Enviar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
}
