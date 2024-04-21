import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import moment from "moment";
import formSchema from "./formSchema";
import useCitasStore from "../../hooks/useCitasStore";

export default function Formulario() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Cita>({ mode: "onSubmit", resolver: zodResolver(formSchema) });
  const { addCita } = useCitasStore();

  const onSubmit: SubmitHandler<Cita> = (data) => {
    data.fecha = moment(data.fecha).format("YYYY-MM-DD");
    data.hora = moment(data.hora).format("HH:mm:ss");
    data._id = crypto.randomUUID();
    addCita(data);
  };
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
        <form onSubmit={handleSubmit(onSubmit)}>
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
                    disablePast
                    label="Seleccionar fecha"
                    value={field.value}
                    onChange={field.onChange}
                    sx={{
                      width: "100%",
                    }}
                    slotProps={{
                      textField: {
                        helperText: errors.fecha?.message,
                        error: !!errors.fecha,
                      },
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
                    value={field.value}
                    onChange={field.onChange}
                    slotProps={{
                      textField: {
                        helperText: errors.hora?.message,
                        error: !!errors.hora,
                      },
                    }}
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
                render={({ field }) => {
                  return (
                    <FormControl fullWidth error={!!errors.genero}>
                      <InputLabel>Género</InputLabel>
                      <Select label="Género" {...field}>
                        <MenuItem value="hombre">Hombre</MenuItem>
                        <MenuItem value="mujer">Mujer</MenuItem>
                      </Select>
                      <FormHelperText>{errors.genero?.message}</FormHelperText>
                    </FormControl>
                  );
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button type="submit" variant="contained">
                Agendar Cita
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
}
