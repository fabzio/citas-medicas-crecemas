import {
  Button,
  Container,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { type Filter } from "@/interfaces/Filter";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "preact/hooks";

interface Props {
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}

export default function FiltersButton({ filter, setFilter }: Props) {
  const [filtersVisible, setFiltersVisible] = useState(false);
  const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    setFilter({ ...filter, [target.name]: target.value.trim() });
  };
  const handleViewFilter = () => {
    setFiltersVisible((curr) => !curr);
  };
  return (
    <Container
      sx={{
        mt: 1,
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Button onClick={handleViewFilter}>
        <Typography variant="button">Ver filtros</Typography>
      </Button>
      {filtersVisible && (
        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          spacing={1}
        >
          <TextField
            label="DNI"
            name="dni"
            value={filter?.dni}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Nombre"
            name="nombre"
            value={filter?.nombre}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Síntomas"
            name="sintomas"
            value={filter?.sintomas}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Género"
            name="genero"
            value={filter?.genero}
            onChange={handleChange}
            fullWidth
            select
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="M">Masculino</MenuItem>
            <MenuItem value="F">Fememino</MenuItem>
          </TextField>
          <DatePicker
            label="Fecha inicio"
            name="fechaInicio"
            value={filter?.fechaInicio}
            onChange={(date) => setFilter({ ...filter, fechaInicio: date })}
            slotProps={{
              textField: {
                fullWidth: true,
              },
              field: {
                clearable: true,
              },
            }}
          />
          <DatePicker
            label="Fecha fin"
            name="fechaFin"
            value={filter?.fechaFin}
            onChange={(date) => setFilter({ ...filter, fechaFin: date })}
            slotProps={{
              textField: {
                fullWidth: true,
              },
              field: {
                clearable: true,
              },
            }}
          />
        </Stack>
      )}
    </Container>
  );
}
