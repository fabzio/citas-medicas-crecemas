import { Container, Typography } from "@mui/material";
import Formulario from "./components/Formulario/Formulario";
import ListaCitas from "./components/ListaCitas/ListaCitas";
import { Toaster } from "react-hot-toast";

export function App() {
  return (
    <>
      <Container>
        <Typography
          variant="h1"
          align="center"
          sx={{
            my: 2,
            fontSize: { md: "2.5rem", xs: "1.5rem" },
            textTransform: "uppercase",
          }}
        >
          Formulario de citas médicas
        </Typography>
        <Formulario />
        <ListaCitas />
        <Toaster />
      </Container>
    </>
  );
}
