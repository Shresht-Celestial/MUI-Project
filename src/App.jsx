import { BrowserRouter } from "react-router";
import AppRoutes from "./routes/AppRoutes";
// import { CssBaseline } from "@mui/material";
// import { ColorModeProvider } from "./theme/ThemeProvider";


const App = () => {

  return (
    
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      
  );
};

export default App;
