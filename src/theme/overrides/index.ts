import Input from "./Input";
import Select from "./Select";

export default function ComponentsOverrrides() {
  return Object.assign(Input(), Select());
}
