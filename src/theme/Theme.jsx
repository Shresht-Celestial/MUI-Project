import { createTheme } from "@mui/material";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      //   mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "#1976d2",
            },
            background: {
              default: "#f5f5f5",
              paper: "#ffffff",
            },
            text: {
              primary: "#fff",
            }
          }
        : {
            primary: {
              main: "#90caf9",
            },
            background: {
              default: "#121212",
              paper: "#1e1e1e",
            },
            text: {
              primary: "#000",
            }
          }),
    },
  });
