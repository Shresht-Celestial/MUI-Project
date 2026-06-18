import {
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Switch,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";

const SettingsTable = () => {
  const theme = useTheme();

  const [lang, setLang] = useState("English (US)");

  return (
    <Paper
      sx={{
        flex: 1,
        p: 3,
        borderRadius: 3,
        bgcolor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.custom.border}`,
      }}
    >
      <Stack>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.text.primary,
          }}
        >
          Settings
        </Typography>

        <Stack
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Stack
            direction="row"
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: theme.palette.text.primary }}
            >
              Enable Notifications
            </Typography>

            <Switch />
          </Stack>

          <Stack>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.text.primary }}
            >
              Email Updates
            </Typography>

            <Stack direction="row" sx={{ alignItems: "center" }}>
              <Checkbox defaultChecked />

              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.secondary }}
              >
                Receive periodic email updates
              </Typography>
            </Stack>
          </Stack>

          <Stack>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.text.primary }}
            >
              Default View
            </Typography>

            <RadioGroup defaultValue="system">
              {["system", "compact", "comfortable"].map((option) => (
                <FormControlLabel
                  key={option}
                  value={option}
                  control={<Radio size="small" />}
                  label={option}
                  slotProps={{
                    typography: {
                      sx: {
                        fontSize: 12,
                        color: theme.palette.text.secondary,
                        textTransform: "capitalize",
                      },
                    },
                  }}
                  sx={{ mt: -1 }}
                />
              ))}
            </RadioGroup>
          </Stack>

          <Stack>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.text.primary }}
            >
              User Role
            </Typography>

            <RadioGroup defaultValue="Admin">
              {["Admin", "Manager", "User"].map((role) => (
                <FormControlLabel
                  key={role}
                  value={role}
                  control={<Radio size="small" />}
                  label={role}
                  slotProps={{
                    typography: {
                      sx: {
                        fontSize: 12,
                        color: theme.palette.text.secondary,
                      },
                    },
                  }}
                  sx={{ mt: -1 }}
                />
              ))}
            </RadioGroup>
          </Stack>

          <Stack>
            <Typography
              variant="body2"
              sx={{
                mb: 1,
                color: theme.palette.text.primary,
              }}
            >
              Language
            </Typography>

            <Select
              value={lang}
              size="small"
              onChange={(e) => setLang(e.target.value)}
            >
              {[
                "English (US)",
                "Japanese (JAP)",
                "Chinese (CHN)",
                "French (FRN)",
              ].map((language) => (
                <MenuItem key={language} value={language}>
                  {language}
                </MenuItem>
              ))}
            </Select>
          </Stack>

          <Button
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: theme.palette.primary.main,
            }}
          >
            Save Changes
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default SettingsTable;