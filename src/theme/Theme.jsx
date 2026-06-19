import { createTheme } from "@mui/material";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,

      primary: {
        main: "#2563EB",
      },

      background: {
        default: mode === "light" ? "#babfc5" : "#020617",
        paper: mode === "light" ? "#FFFFFF" : "#0F172A",
      },

      text: {
        primary: mode === "light" ? "#0F172A" : "#F8FAFC",
        secondary: mode === "light" ? "#64748B" : "#CBD5E1",
      },

      custom: {
        sidebar: mode === "light" ? "#d5d8e1" : "#132041",

        sidebarText: mode === "light" ? "#383a3c" : "#d8e1ed",

        sidebarHover: mode === "light" ? "#3561d7" : "#2563EB",

        sidebarActive: mode === "light" ? "#1D4ED8" : "#2563EB",

        sidebarActiveText: mode === "light" ? "#FFFFFF" : "#FFFFFF",

        sidebarBorder: mode === "light" ? "#1E293B" : "#334155",

        sidebarIcon: mode === "light" ? "#2563EB" : "#60A5FA",

        border: mode === "light" ? "#E5E7EB" : "#334155",

        successBg: mode === "light" ? "#DCFCE7" : "#064E3B",
        successText: mode === "light" ? "#239A50" : "#86EFAC",

        cardIconBg: mode === "light" ? "#EEF2FF" : "#1E293B",

        errorBg: mode === "light" ? "#FEE2E2" : "#7F1D1D",
        errorText: mode === "light" ? "#991B1B" : "#FCA5A5",

        adminBg: mode === "light" ? "#DBEAFE" : "#1E3A8A",
        adminText: mode === "light" ? "#1D4ED8" : "#93C5FD",

        managerBg: mode === "light" ? "#F3E8FF" : "#581C87",
        managerText: mode === "light" ? "#7E22CE" : "#D8B4FE",

        userBg: mode === "light" ? "#F3F4F6" : "#374151",
        userText: mode === "light" ? "#374151" : "#E5E7EB",
      },
    },
  });
