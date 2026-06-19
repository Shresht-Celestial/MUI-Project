import ReactDOM from "react-dom/client";
import App from "./App";
import CustomThemeProvider from "./theme/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CustomThemeProvider>
    <App />
  </CustomThemeProvider>
);