import { Container, Typography } from "@mui/material";
import Formulario from "./components/Formulario";
import ListaCitas from "./components/ListaCitas";

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
            textDecoration: "upper",
          }}
        >
          Formulario de citas médicas
        </Typography>
        <Formulario />
        <ListaCitas />
      </Container>
    </>
  );
}
