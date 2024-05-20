"use client";

import { Button } from "@mui/material";
import { useSnackbar } from "notistack";

export default function PlanButton() {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Button
      variant="contained"
      sx={{ borderRadius: "15px" }}
      onClick={() => {
        enqueueSnackbar(
          "Wszystkie serwery są przeciążone, sprzedaż niedostępna",
          { variant: "error" },
        );
      }}
    >
      Wybierz plan
    </Button>
  );
}
