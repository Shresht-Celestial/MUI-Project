import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";



const MenuProps = {
  slotProps: {
    paper: {
      sx: {
        maxHeight: 320,
        width: 280,
      },
    },
    list: {
      sx: {
        p: 0,
      },
    },
  },
};
const departments = ["Engineering", "Marketing", "Sales", "Finance", "Support"];
const statuses = ["Active", "Inactive", "Pending", "Suspended", "Deleted"];

const DashboardTop = () => {
  const theme = useTheme();

  const [department, setDepartment] = useState([]);
  const [status, setStatus] = useState([]);
  const [viewType, setViewType] = useState("weekly");

  const handleDepartment = (event) => {
    const { value } = event.target;
    setDepartment(typeof value === "string" ? value.split(",") : value);
  };

  const handleStatus = (event) => {
    const { value } = event.target;
    setStatus(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Paper
      sx={{
        width: "100%",
        display: "flex",
        px: 3,
        py: 2,
        bgcolor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.custom.border}`,
        borderRadius: 3,
      }}
    >
      <Stack direction="row" spacing={1} sx={{ width: "70%" }}>
        <Stack>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.text.primary }}
          >
            Department
          </Typography>

          <FormControl sx={{ m: 1, width: 260 }}>
            <InputLabel id="department-label">All Departments</InputLabel>

            <Select
              multiple
              value={department}
              onChange={handleDepartment}
              input={<OutlinedInput label="All Departments" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              <Box sx={{ p: 1 }}>
                <TextField
                  size="small"
                  placeholder="Search departments..."
                  fullWidth
                  onKeyDown={(e) => e.stopPropagation()}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchOutlinedIcon
                            sx={{ color: theme.palette.text.secondary }}
                          />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </Box>

              {departments.map((dept) => {
                const selected = department.includes(dept);
                const SelectionIcon = selected
                  ? CheckBoxIcon
                  : CheckBoxOutlineBlankIcon;

                return (
                  <MenuItem key={dept} value={dept}>
                    <SelectionIcon
                      fontSize="small"
                      style={{ marginRight: 8 }}
                    />
                    <ListItemText primary={dept} />
                  </MenuItem>
                );
              })}

              <Stack
                direction="row"
                sx={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderTop: `1px solid ${theme.palette.custom.border}`,
                  p: 1.5,
                }}
              >
                <Typography variant="body2" sx={{ fontSize: 13 }}>
                  {department.length} of {departments.length} selected
                </Typography>

                <Button size="small" onClick={() => setDepartment([])}>
                  Clear All
                </Button>
              </Stack>
            </Select>
          </FormControl>
        </Stack>

        <Stack>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.text.primary }}
          >
            Status
          </Typography>

          <FormControl sx={{ m: 1, width: 260 }}>
            <InputLabel id="status-label">All Status</InputLabel>

            <Select
              labelId="status-label"
              id="status-select"
              multiple
              value={status}
              onChange={handleStatus}
              input={<OutlinedInput label="All Status" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {statuses.map((statusItem) => {
                const selected = status.includes(statusItem);
                const SelectionIcon = selected
                  ? CheckBoxIcon
                  : CheckBoxOutlineBlankIcon;

                return (
                    <MenuItem key={statusItem} value={statusItem}>
                      <SelectionIcon
                        fontSize="small"
                        style={{ marginRight: 8 }}
                      />
                      <ListItemText primary={statusItem} />
                    </MenuItem>
                );
              })}
              <Stack
                direction="row"
                sx={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderTop: `1px solid ${theme.palette.custom.border}`,
                  p: 1.5,
                }}
              >
                <Typography variant="body2" sx={{ fontSize: 13 }}>
                  {status.length} of {status.length} selected
                </Typography>

                <Button size="small" onClick={() => setStatus([])}>
                  Clear All
                </Button>
              </Stack>
            </Select>
          </FormControl>
        </Stack>

        <Stack sx={{ width: 320 }}>
          <Typography
            variant="body2"
            sx={{ mb: 2, color: theme.palette.text.primary }}
          >
            View Type
          </Typography>

          <RadioGroup
            row
            value={viewType}
            onChange={(e) => setViewType(e.target.value)}
          >
            <FormControlLabel value="daily" control={<Radio />} label="Daily" />
            <FormControlLabel
              value="weekly"
              control={<Radio />}
              label="Weekly"
            />
            <FormControlLabel
              value="monthly"
              control={<Radio />}
              label="Monthly"
            />
          </RadioGroup>
        </Stack>
      </Stack>

      <Stack sx={{ flex: 1 }}>
        <Stack>
          <Typography
            variant="body2"
            sx={{ mb: 1, color: theme.palette.text.primary }}
          >
            Search
          </Typography>

          <TextField
            placeholder="Search users, orders..."
            fullWidth
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlinedIcon
                      sx={{ color: theme.palette.text.secondary }}
                    />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default DashboardTop;
