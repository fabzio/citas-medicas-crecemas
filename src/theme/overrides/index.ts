import { Theme } from "@mui/material";
import Input from "./Input";
import Select from "./Select";

export default function ComponentsOverrrides(theme: Theme) {
  return Object.assign(Input(theme), Select());
}
