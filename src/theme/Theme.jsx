import { createTheme } from "@mui/material";

const lightPalette = {
  primary: {
    main: "#2563EB",
  },

  background: {
    default: "#ebf0f5",
    paper: "#FFFFFF",
  },

  text: {
    primary: "#0F172A",
    secondary: "#64748B",
  },

  custom: {
    sidebar: "#eceff5",
    sidebarText: "#383a3c",
    sidebarHover: "#3561d7",
    sidebarActive: "#1D4ED8",
    sidebarActiveText: "#FFFFFF",
    sidebarBorder: "#1E293B",
    sidebarIcon: "#2563EB",

    border: "#E5E7EB",

    successBg: "#DCFCE7",
    successText: "#239A50",

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
};

const darkPalette = {
  primary: {
    main: "#2563EB",
  },

  background: {
    default: "#020617",
    paper: "#0F172A",
  },

  text: {
    primary: "#F8FAFC",
    secondary: "#CBD5E1",
  },

  custom: {
    sidebar: "#132041",
    sidebarText: "#d8e1ed",
    sidebarHover: "#2563EB",
    sidebarActive: "#2563EB",
    sidebarActiveText: "#FFFFFF",
    sidebarBorder: "#334155",
    sidebarIcon: "#60A5FA",

    border: "#334155",

    successBg: "#064E3B",
    successText: "#86EFAC",

    cardIconBg: "#1E293B",

    errorBg: "#7F1D1D",
    errorText: "#FCA5A5",

    adminBg: "#1E3A8A",
    adminText: "#93C5FD",

    managerBg: "#581C87",
    managerText: "#D8B4FE",

    userBg: "#374151",
    userText: "#E5E7EB",
  },
};

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light" ? lightPalette : darkPalette),
    },
  });