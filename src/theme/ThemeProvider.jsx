import { createContext, useContext, useState } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { getTheme } from "./Theme";

 const ColorModeContext = createContext();



const CustomThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleColorMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = getTheme(mode);

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default CustomThemeProvider;

export const useColorMode = () => {
  return useContext(ColorModeContext);
};