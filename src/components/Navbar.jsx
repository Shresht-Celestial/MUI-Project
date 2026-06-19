import {
  Avatar,
  IconButton,
  Stack,
  Switch,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { useLocation } from "react-router";

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useColorMode } from "../theme/ThemeProvider";

const Navbar = ({ setMenuOpen  }) => {
  const location = useLocation();
  const theme = useTheme();

  const currentPageName = location.pathname.slice(1);

  const {mode, toggleColorMode} = useColorMode();
  

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        borderBottom: `1px solid ${theme.palette.custom.border}`,
      }}
    >
      <Toolbar>
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Stack direction="row" spacing={2.5} sx={{ alignItems: "center" }}>
            <IconButton sx={{ color: theme.palette.text.primary }} onClick={() => setMenuOpen(prev => !prev)}>
              <MenuIcon />
            </IconButton>

            <Typography sx={{ color: theme.palette.text.primary }}>
              {currentPageName
                ? currentPageName.toLocaleUpperCase()
                : "Dashboard"}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={3.5} sx={{ alignItems: "center" }}>
            <Stack direction="row" spacing={0} sx={{ alignItems: "center" }}>
              <IconButton sx={{ color: theme.palette.text.primary }}>
                <LightModeOutlinedIcon />
              </IconButton>

              <Switch checked={mode==="dark"} onChange={toggleColorMode}/>

              <IconButton sx={{ color: theme.palette.text.primary }}>
                <DarkModeOutlinedIcon />
              </IconButton>
            </Stack>

            <IconButton sx={{ color: theme.palette.text.primary }}>
              <NotificationsNoneOutlinedIcon />
            </IconButton>

            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
              <Avatar sx={{ bgcolor: theme.palette.primary.main }}>J</Avatar>

              <Typography sx={{ color: theme.palette.text.primary }}>
                John Doe
              </Typography>

              <IconButton sx={{ color: theme.palette.text.primary }}>
                <KeyboardArrowDownOutlinedIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;