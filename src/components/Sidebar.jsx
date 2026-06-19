import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useTheme
} from "@mui/material";

import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { useLocation, useNavigate } from "react-router";

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
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "24px 24px 0px 24px",
          maxHeight: "100vh",
          height: "100vh",
        }}
      >
        <Stack
          sx={{
            height: "100%",
            maxHeight: "100vh",
            // justifyContent: "space-between",
          }}
        >
          <Box sx={{flexGrow: 1}}>
            <Stack
              direction="row"
              spacing={1.5}
              sx={{
                alignItems: "center",
                borderBottom: "1px solid black",
                pb: 2,
                color: theme.palette.custom.sidebarText,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <DashboardTwoToneIcon
                  sx={{ fill: theme.palette.custom.sidebarIcon }}
                />
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
                      color: isSelected
                        ? theme.palette.custom.sidebarActiveText
                        : theme.palette.custom.sidebarText,
                      bgcolor: isSelected
                        ? theme.palette.custom.sidebarHover
                        : "transparent",
                      "&:hover": {
                        bgcolor: theme.palette.custom.sidebarHover,
                        color: theme.palette.custom.sidebarActiveText,
                      },
                    }}
                    onClick={() => navigate(`${item.path}`)}
                  >
                    <ListItemIcon
                      sx={{
                        color: isSelected
                          ? theme.palette.custom.sidebarActiveText
                          : theme.palette.custom.sidebarText,
                      }}
                    >
                      <Icon />
                    </ListItemIcon>

                    <ListItemText primary={item.label} />
                  </ListItemButton>
                );
              })}
            </List>
          </Box>

          <Stack>
            <ListItemButton
              sx={{
                borderRadius: 2,
                mt: 2,
                mb: 1,
                color: theme.palette.custom.sidebarText,
                bgcolor: theme.palette.custom.sidebar,
                "&:hover": {
                  bgcolor: theme.palette.custom.sidebarHover,
                  color: theme.palette.custom.sidebarActiveText,
                },
              }}
            >
              <ListItemIcon>
                <HelpOutlineRoundedIcon
                  sx={{
                    color: theme.palette.custom.sidebarText,
                    minWidth: 40,
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Help & Support"}
                sx={{ color: theme.palette.custom.sidebarText }}
              />
            </ListItemButton>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Sidebar;
