import {
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
} from "@mui/material";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  slotProps: {
    paper: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  },
};

const departments = ["Engineering", "Marketing", "Sales", "Finance", "Support"];
const statuses = ["Active", "Inactive", "Pending", "Suspended", "Deleted"];

const DashboardTop = () => {
  const [department, setDepartment] = useState([]);

  const [status, setStatus] = useState([]);

  const [viewType, setViewType] = useState("weekly");

  const handleDepartment = (event) => {
    const { value } = event.target;
    setDepartment(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value,
    );
  };

  const handleStatus = (event) => {
    const { value } = event.target;
    setStatus(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value,
    );
  };

  return (
    <Paper sx={{ width: "100%", display: "flex", px: 3, py: 2 }}>
      <Stack direction={"row"} spacing={1} sx={{ width: "70%" }}>
        <Stack>
          <Typography variant="body">Department</Typography>
          <FormControl sx={{ m: 1, width: 260 }}>
            <InputLabel id="department-label">All Departments</InputLabel>
            <Select
              labelId="department-label"
              id="department-label"
              multiple
              value={department}
              onChange={handleDepartment}
              input={<OutlinedInput label="All Departments" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
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
            </Select>
          </FormControl>
        </Stack>

        <Stack>
          <Typography variant="body">Status</Typography>
          <FormControl sx={{ m: 1, width: 260 }}>
            <InputLabel id="status-label">All Status</InputLabel>
            <Select
              labelId="status-label"
              id="status-label"
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
            </Select>
          </FormControl>
        </Stack>

        <Stack sx={{ width: 320 }}>
          <Typography variant="body" sx={{ mb: 2 }}>
            View Type
          </Typography>
          <RadioGroup
            row
            defaultValue="weekly"
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
          <Typography variant="body" sx={{ mb: 1 }}>
            Search
          </Typography>
          <TextField
            placeholder="Search users, orders..."
            fullWidth
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlinedIcon />
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
