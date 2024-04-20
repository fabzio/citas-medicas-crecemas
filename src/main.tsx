import { render } from "preact";
import { App } from "./app.tsx";
import "./index.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import "moment/dist/locale/es";

render(
  <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="es">
    <App />
  </LocalizationProvider>,
  document.getElementById("app")!
);
