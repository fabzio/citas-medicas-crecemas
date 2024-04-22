import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Dropzone, FileMosaic, ExtFile } from "@files-ui/react";
import { useState } from "preact/hooks";
import useCitasStore from "@/hooks/useCitasStore";
import getCitasCSV from "@/utils/getCitasCSV";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DialogCarga({ open, setOpen }: Props) {
  const [files, setFiles] = useState<ExtFile[]>([]);
  const { addManyCitas } = useCitasStore();

  const handleCharge = async () => {
    const manyCitas = await getCitasCSV(files);
    addManyCitas(manyCitas);
    removeFile(files[0].id);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const removeFile = (id: string | number | undefined) => {
    setFiles((curr) => curr.filter((file) => file.id !== id));
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Cargar citas</DialogTitle>
      <DialogContent>
        <Dropzone
          accept="text/csv"
          onChange={(files) => {
            setFiles(files);
          }}
          value={files}
        >
          {files.map((file: ExtFile) => (
            <FileMosaic key={file.name} {...file} onDelete={removeFile} />
          ))}
        </Dropzone>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancelar</Button>
        <Button onClick={handleCharge} disabled={files.length === 0}>
          Cargar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
