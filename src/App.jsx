import { BrowserRouter } from "react-router";
import AppRoutes from "./routes/AppRoutes";


const App = () => {

  return (
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
  );
};

export default App;
