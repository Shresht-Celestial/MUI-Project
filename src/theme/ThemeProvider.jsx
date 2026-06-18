
import {  ThemeProvider } from "@mui/material";
import { theme } from "./Theme";

export const ColorModeProvider = ({ children }) => {

  // const [mode, setMode] = useState("light");

  return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
  );
};

