import { render } from "preact";
import { App } from "./app.tsx";
import "./index.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import "moment/dist/locale/es";
import ThemeProvider from "./theme/index.tsx";

render(
  <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="es">
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </LocalizationProvider>,
  document.getElementById("app")!
);
