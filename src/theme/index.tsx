import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import palette from "./palette";
import componentsOverrrides from "./overrides";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeOptions = {
    palette,
  };
  const theme = createTheme(themeOptions);
  theme.components = componentsOverrrides();

  return (
    <MUIThemeProvider theme={theme}>
      {children}
      <CssBaseline />
    </MUIThemeProvider>
  );
}
