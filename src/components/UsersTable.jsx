import {
  Avatar,
  Box,
  // Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  // Drawer,
  // FormControl,
  IconButton,
  Modal,
  // InputLabel,
  // MenuItem,
  Paper,
  // Select,
  Stack,
  // Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  // TextField,
  Typography,
  useTheme,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DownloadIcon from "@mui/icons-material/Download";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
// import CloseIcon from '@mui/icons-material/Close';
const usersData = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    status: "Active",
    role: "Admin",
    joinedOn: "May 12, 2024",
  },
  {
    id: 2,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    status: "Active",
    role: "Manager",
    joinedOn: "May 10, 2024",
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    status: "Inactive",
    role: "User",
    joinedOn: "May 8, 2024",
  },
  {
    id: 4,
    name: "David Wilson",
    email: "david.wilson@example.com",
    status: "Active",
    role: "User",
    joinedOn: "May 5, 2024",
  },
  {
    id: 5,
    name: "Jessica Taylor",
    email: "jessica.taylor@example.com",
    status: "Active",
    role: "Manager",
    joinedOn: "May 3, 2024",
  },
  {
    id: 6,
    name: "Jessica Taylor",
    email: "jessica.taylor@example.com",
    status: "Active",
    role: "Manager",
    joinedOn: "May 3, 2024",
  },
];

const UsersTable = () => {
  const theme = useTheme();

  const [openEdit, setOpenEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [openMore, setOpenMore] = useState(false);

  return (
    <Paper
      sx={{
        width: "70%",
        height: 470,
        borderRadius: 3,
        bgcolor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.custom.border}`,
        overflow: "hidden",
      }}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          p: 2,
          alignItems: "center",
          borderBottom: `1px solid ${theme.palette.custom.border}`,
        }}
      >
        <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
          Recent Users
        </Typography>

        <Button
          variant="outlined"
          startIcon={<DownloadIcon />}
          endIcon={<KeyboardArrowDownIcon />}
          sx={{
            border: `1px solid ${theme.palette.custom.border}`,
            color: theme.palette.text.primary,
            "&:hover": {
              bgcolor: theme.palette.primary.main,
              color: theme.palette.custom.sidebarActiveText,
            },
          }}
        >
          Export
        </Button>
      </Stack>

      <TableContainer
        sx={{
          maxHeight: 390,
          overflow: "auto",
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {["Name", "Email", "Status", "Role", "Joined On", "Actions"].map(
                (heading) => (
                  <TableCell
                    key={heading}
                    align={heading === "Actions" ? "right" : "left"}
                    sx={{
                      bgcolor: theme.palette.background.default,
                      color: theme.palette.text.secondary,
                      fontWeight: 700,
                    }}
                  >
                    {heading}
                  </TableCell>
                ),
              )}
            </TableRow>
          </TableHead>

          <TableBody>
            {usersData.map((user) => (
              <TableRow key={user.id} hover>
                <TableCell>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                      {user.name[0]}
                    </Avatar>

                    <Typography sx={{ color: theme.palette.text.primary }}>
                      {user.name}
                    </Typography>
                  </Stack>
                </TableCell>

                <TableCell>
                  <Typography sx={{ color: theme.palette.text.secondary }}>
                    {user.email}
                  </Typography>
                </TableCell>

                <TableCell>
                  <Chip
                    label={user.status}
                    size="small"
                    sx={{
                      bgcolor:
                        user.status === "Active"
                          ? theme.palette.custom.successBg
                          : theme.palette.custom.errorBg,
                      color:
                        user.status === "Active"
                          ? theme.palette.custom.successText
                          : theme.palette.custom.errorText,
                    }}
                  />
                </TableCell>

                <TableCell>
                  <Chip
                    label={user.role}
                    size="small"
                    sx={{
                      bgcolor:
                        user.role === "Admin"
                          ? theme.palette.custom.adminBg
                          : user.role === "Manager"
                            ? theme.palette.custom.managerBg
                            : theme.palette.custom.userBg,
                      color:
                        user.role === "Admin"
                          ? theme.palette.custom.adminText
                          : user.role === "Manager"
                            ? theme.palette.custom.managerText
                            : theme.palette.custom.userText,
                    }}
                  />
                </TableCell>

                <TableCell>
                  <Typography sx={{ color: theme.palette.text.secondary }}>
                    {user.joinedOn}
                  </Typography>
                </TableCell>

                <TableCell align="right">
                  <IconButton
                    sx={{ color: theme.palette.text.secondary }}
                    onClick={() => {
                      setSelectedUser(user);
                      setOpenEdit(true);
                    }}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <Dialog
                    open={openEdit}
                    onClose={() => setOpenEdit(false)}
                    aria-labelledby="dialog-title"
                    aria-describedby="dialog-description"
                    maxWidth="sm"
                    fullWidth
                    // hideBackdrop
                    slotProps={{
                      backdrop: {
                        sx: {
                          backgroundColor: "rgba(0,0,0,0.2)",
                        },
                      },
                    }}
                  >
                    <DialogTitle>Edit User Details</DialogTitle>

                    <DialogContent>
                      <DialogContentText>
                        Edit details for {selectedUser?.name}
                      </DialogContentText>
                    </DialogContent>

                    <DialogActions>
                      <Stack direction={"row"} spacing={5}>
                        <Button
                        variant="contained"
                        onClick={() => setOpenEdit(false)}
                        sx={{
                          color:theme.palette.custom.errorText,
                          bgcolor:theme.palette.custom.errorBg
                        }}
                      >
                        Cancel
                      </Button>

                      <Button
                        variant="contained"
                        onClick={() => setOpenEdit(false)}
                        sx={{
                          color:theme.palette.custom.successText,
                          bgcolor:theme.palette.custom.successBg
                        }}
                      >
                        Save
                      </Button>
                      </Stack>
                    </DialogActions>
                  </Dialog>

                  {/* <Modal 
                    open={openEdit} 
                    onClose={() => setOpenEdit(false)} 
                    slotProps={{
                      backdrop: {
                        sx:{
                          backgroundColor:"rgba(0,0,0,0.2)"
                        }
                      }
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        borderRadius: 2,
                        p: 3,
                      }}
                    >
                      <Typography variant="h6">Edit User</Typography>
                      <Button onClick={() => setOpenEdit(false)}>Cancel</Button>
                      <Button onClick={() => setOpenEdit(false)}>Submit</Button>
                    </Box>
                  </Modal> */}

                  {/* <Drawer
                    anchor="right"
                    open={openEdit}
                    onClose={() => setOpenEdit(false)}
                    slotProps={{
                      backdrop: {
                        sx: {
                          backgroundColor: "rgba(34, 33, 33, 0.12)",
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 400,
                        height: "100%",
                        bgcolor: theme.palette.background.paper,
                        p: 3,
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                      }}
                    >
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 600,
                            color: theme.palette.text.primary,
                          }}
                        >
                          Edit User
                        </Typography>

                        <IconButton onClick={() => setOpenEdit(false)}>
                          <CloseIcon />
                        </IconButton>
                      </Stack>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar
                          sx={{
                            width: 60,
                            height: 60,
                            bgcolor: theme.palette.primary.main,
                            fontSize: 24,
                          }}
                        >
                          {selectedUser?.name?.[0]}
                        </Avatar>

                        <Stack>
                          <Typography fontWeight={600}>
                            {selectedUser?.name}
                          </Typography>

                          <Typography variant="body2" color="text.secondary">
                            {selectedUser?.email}
                          </Typography>
                        </Stack>
                      </Stack>
                      <TextField
                        label="Name"
                        defaultValue={selectedUser?.name}
                        fullWidth
                      />

                      <TextField
                        label="Email"
                        defaultValue={selectedUser?.email}
                        fullWidth
                      />
                      <FormControl fullWidth>
                        <InputLabel>Role</InputLabel>

                        <Select defaultValue={selectedUser?.role} label="Role">
                          <MenuItem value="Admin">Admin</MenuItem>
                          <MenuItem value="Manager">Manager</MenuItem>
                          <MenuItem value="User">User</MenuItem>
                        </Select>
                      </FormControl>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography>Active Status</Typography>

                        <Switch
                          defaultChecked={selectedUser?.status === "Active"}
                        />
                      </Stack>
                      <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                          mt: "auto",
                        }}
                      >
                        <Button
                          variant="outlined"
                          fullWidth
                          onClick={() => setOpenEdit(false)}
                        >
                          Cancel
                        </Button>

                        <Button variant="contained" fullWidth>
                          Save Changes
                        </Button>
                      </Stack>
                    </Box>
                  </Drawer> */}

                  <IconButton
                    sx={{ color: theme.palette.text.secondary }}
                    onClick={() => setOpenMore(true)}
                  >
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
                  <Modal
                    open={openMore}
                    onClose={() => setOpenMore(false)}
                    slotProps={{
                      backdrop: {
                        sx: {
                          backgroundColor: "rgba(32, 30, 30, 0.2)",
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        borderRadius: 2,
                        p: 3,
                      }}
                    >
                      <Typography variant="h6">Delete User</Typography>
                      <Stack direction={"row"} spacing={5}>
                        <Button
                        variant="contained"
                        onClick={() => setOpenMore(false)}
                        sx={{
                          color:theme.palette.custom.errorText,
                          bgcolor:theme.palette.custom.errorBg
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => setOpenMore(false)}
                        sx={{
                          color:theme.palette.custom.successText,
                          bgcolor:theme.palette.custom.successBg
                        }}
                      >
                        Delete
                      </Button>
                      </Stack>
                    </Box>
                  </Modal>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default UsersTable;
