import { Box, Stack, useTheme } from "@mui/material";
import Sidebar from "../components/Sidebar";
import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar";
import DashboardTop from "../components/DashboardTop";
import StatCard from "../components/StatCard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import UsersTable from "../components/UsersTable";
import SettingsTable from "../components/SettingsTable";
import { useState } from "react";

const statsData = [
  {
    title: "Total Users",
    value: "12,450",
    growth: "+8.3%",
    icon: PeopleIcon,
  },
  {
    title: "Active Users",
    value: "856",
    growth: "+2.4%",
    icon: TrendingUpIcon,
  },
  {
    title: "Total Revenue",
    value: "$54,321",
    growth: "+15.2%",
    icon: AttachMoneyIcon,
  },
  {
    title: "Orders",
    value: "2,350",
    growth: "+10.1%",
    icon: ShoppingCartIcon,
  },
];

const Dashboard = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const theme = useTheme();
  console.log(theme.palette.background);

  return (
    <Box
      sx={{
        display: "flex",
        maxHeight: "100vh",
        overflow: "hidden",
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      {menuOpen && (
        <Box
          sx={{
            width: 260,
            borderRight: `1px solid ${theme.palette.custom.border}`,
            bgcolor: theme.palette.custom.sidebar,
            color: theme.palette.custom.sidebarText,
          }}
        >
          <Sidebar />
        </Box>
      )}
      <Stack sx={{ flex: 1 }}>
        <Navbar setMenuOpen={setMenuOpen} />
        <Box
          sx={{
            flex: 1,
            bgcolor: theme.palette.background.default,
          }}
        >
          {location.pathname === "/" ? (
            <Stack sx={{ p: 3 }}>
              <Stack sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <DashboardTop />
                <Stack direction={"row"} spacing={2}>
                  {statsData.map((stat) => {
                    const { title, value, growth, icon } = stat;
                    return (
                      <StatCard
                        key={title}
                        title={title}
                        value={value}
                        growth={growth}
                        icon={icon}
                      />
                    );
                  })}
                </Stack>
              </Stack>
              <Stack direction={"row"} sx={{ gap: 3, mt: 3 }}>
                <UsersTable />
                <SettingsTable />
              </Stack>
            </Stack>
          ) : (
            <Outlet />
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default Dashboard;
