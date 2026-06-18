import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import {  useLocation, useNavigate } from "react-router";

const menuItems = [
  { label: "Dashboard", path: "/", icon: HomeOutlinedIcon },
  { label: "Users", path: "/users", icon: PeopleAltOutlinedIcon },
  { label: "Orders", path: "/orders", icon: ShoppingCartOutlinedIcon },
  { label: "Products", path: "/products", icon: Inventory2OutlinedIcon },
  { label: "Reports", path: "/reports", icon: ShowChartIcon },
  { label: "Messages", path: "/messages", icon: ChatOutlinedIcon },
  { label: "Settings", path: "/settings", icon: SettingsOutlinedIcon },
];

const Sidebar = () => {
  const location = useLocation();
  const selectedPath = location.pathname;
  const navigate = useNavigate();  
  return (
    <Box
      sx={{
        bgcolor: "#0F172A",
        color: "white",
        minHeight: "100vh",
        px: 3,
        py: 5,
      }}
    >
      <Stack spacing={30}
        sx={{
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Stack
            direction="row"
            spacing={1.5}
            sx={{
              alignItems: "center",
              borderBottom: "1px solid black",
              pb: 2,
              color: "#CBD5E1"
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <DashboardTwoToneIcon sx={{ fill: "blue" }} />
            </Box>
            <Typography>Dashboard Pro</Typography>
          </Stack>
          <List>
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isSelected = item.path === selectedPath;
              return (
                <ListItemButton
                  key={item.label}
                  sx={{
                    borderRadius: 2,
                    mt: 2,
                    mb: 1,
                    color: isSelected ? "white" : "#CBD5E1",
                    bgcolor: isSelected ? "#1D4ED8" : "transparent",
                    "&:hover": {
                      bgcolor: "#1d4fd8a7",
                      color: "white",
                    },

                  }}
                  onClick={() => navigate(`${item.path}`)}
                >
                  <ListItemIcon sx={{ color: "#CBD5E1", minWidth: 40 }}>
                    <Icon />
                  </ListItemIcon>

                  <ListItemText primary={item.label} />
                </ListItemButton>
              );
            })}
          </List>
        </Box>

        <Box>
            <ListItemButton
               sx={{
                    borderRadius: 2,
                    mt: 2,
                    mb: 1,
                    color: "#CBD5E1",
                    bgcolor: "transparent",
                    "&:hover": {
                      bgcolor: "#1d4fd8a7",
                      color: "white",
                    }
                }}
            >
                <ListItemIcon>
                    <HelpOutlineRoundedIcon sx={{ color: "#CBD5E1", minWidth: 40 }} />
                </ListItemIcon>
                <ListItemText primary={"Help & Support"} sx={{color: "#CBD5E1"}}/>
            </ListItemButton>
        </Box>
      </Stack>
    </Box>
  );
};

export default Sidebar;
