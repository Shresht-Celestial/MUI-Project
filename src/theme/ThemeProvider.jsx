import { createContext, useContext, useState } from "react";
import {  ThemeProvider } from "@mui/material";

import { getTheme } from "./theme";

const ColorModeContext = createContext(undefined);

export const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleColorMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = getTheme(mode);

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => {
  const context = useContext(ColorModeContext);
  return context;
};
