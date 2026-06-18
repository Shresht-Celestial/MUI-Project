import { createTheme } from "@mui/material";


export const theme = createTheme({
  palette: {
    primary: {
      main: "#2563EB",
    },

    background: {
      default: "#babfc5",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#0F172A",
      secondary: "#64748B",
    },

    custom: {
      sidebar: "#0F172A",
      sidebarText: "#CBD5E1",
      sidebarHover: "#1D4ED8",
      sidebarIcon: "#2563EB",
      sidebarActiveText: "#FFFFFF",
      sidebarBorder: "#1E293B",
      border: "#E5E7EB",
      successBg: "#DCFCE7",
      successText: "#239a50",

      cardIconBg: "#EEF2FF",

      errorBg: "#FEE2E2",
      errorText: "#991B1B",

      adminBg: "#DBEAFE",
      adminText: "#1D4ED8",

      managerBg: "#F3E8FF",
      managerText: "#7E22CE",

      userBg: "#F3F4F6",
      userText: "#374151",
    },
  },
});