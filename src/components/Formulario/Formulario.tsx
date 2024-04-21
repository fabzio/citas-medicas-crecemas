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
import formSchema from "./formSchema";
import useCitasStore from "../../hooks/useCitasStore";
import { type Cita } from "../../interfaces/Cita";

export default function Formulario() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<Cita>({
    mode: "onTouched",
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      fecha: null,
      dni: "",
      hora: null,
      sintomas: "",
      genero: "",
    },
  });
  const { addCita } = useCitasStore();

  const onSubmit: SubmitHandler<Cita> = (data) => {
    data._id = crypto.randomUUID();
    addCita(data);
    reset();
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
          <Grid container spacing={3}>
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
                        <MenuItem value="M">Masculino</MenuItem>
                        <MenuItem value="F">Femenino</MenuItem>
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
              <Button
                type="submit"
                variant="contained"
                disabled={!isValid || !isDirty}
              >
                Agendar Cita
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
}
