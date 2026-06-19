import {
  Box,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import { useLocation, useNavigate } from "react-router";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';


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

  const [open, setOpen] = useState(false);
  return (
   <>
   <Button onClick={() => setOpen(true)}>Open Sidebar</Button>
    <Drawer open={open} onClose={() => setOpen(false)} anchor="left" hideBackdrop>
      <Box
      sx={{
        width: 255,
        bgcolor: theme.palette.custom.sidebar,
        color: theme.palette.custom.sidebarText,
        minHeight: "100vh",
        px: 3,
        py: 5,
      }}
>
      <Stack
        spacing={30}
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

        <Stack spacing={-0.5}>
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
              <HelpOutlineRoundedIcon sx={{ color: theme.palette.custom.sidebarText, minWidth: 40 }} />
            </ListItemIcon>
            <ListItemText
              primary={"Help & Support"}
              sx={{ color:  theme.palette.custom.sidebarText}}
            />
          </ListItemButton>
          <ListItemButton
            onClick={() => setOpen(false)}
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
              <CloseIcon sx={{ color: theme.palette.custom.sidebarText, minWidth: 40 }} />
            </ListItemIcon>
            <ListItemText
              primary={"Close Sidebar"}
              sx={{ color:  theme.palette.custom.sidebarText}}
            />
          </ListItemButton>
        </Stack>
      </Stack>
      </Box>
    </Drawer>
   </>
  );
};

export default Sidebar;
