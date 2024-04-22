import { Button } from "@mui/material";
import DialogCarga from "./DialogCarga";
import { useState } from "preact/hooks";

export default function ButtonCarga() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <>
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          position: "absolute",
          top: { xs: "0.6rem", md: "1rem" },
          right: { xs: "0.6rem", md: "1rem" },
        }}
      >
        Cargar citas
      </Button>
      <DialogCarga open={open} setOpen={setOpen} />
    </>
  );
}
