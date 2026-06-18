import {
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableHead,
  TableCell,
  Typography,
  TableRow,
  Avatar,
  Chip,
  IconButton,
  useTheme,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DownloadIcon from "@mui/icons-material/Download";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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

  return (
    <Paper
      sx={{
        width: "70%",
        height: 470,
        borderRadius: 3,
        bgcolor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.custom.border}`,
      }}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          p: 1,
          alignItems: "center",
          height:70
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: theme.palette.text.primary }}
        >
          Recent Users
        </Typography>

        <Button
          variant="outlined"
          startIcon={<DownloadIcon />}
          endIcon={<KeyboardArrowDownIcon />}
          sx={{
            width: 130,
            mt: 2,
            mb: 1,
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

      <Table sx={{height:400,}}>
        <TableHead
          sx={{
            bgcolor: theme.palette.background.default,
          }}
        >
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Joined On</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody sx={{height: 300, overflow:"auto"}}>
          {usersData.map((user) => (
            <TableRow
              key={user.id}
              hover
            >
              <TableCell>
                <Stack
                  direction="row"
                  spacing={1.5}
                  alignItems="center"
                >
                  <Avatar
                    sx={{
                      bgcolor: theme.palette.primary.main,
                    }}
                  >
                    {user.name[0]}
                  </Avatar>

                  <Typography
                    sx={{
                      color: theme.palette.text.primary,
                    }}
                  >
                    {user.name}
                  </Typography>
                </Stack>
              </TableCell>

              <TableCell>
                <Typography
                  sx={{
                    color: theme.palette.text.secondary,
                  }}
                >
                  {user.email}
                </Typography>
              </TableCell>

              <TableCell>
                <Chip
                  label={user.status}
                  size="small"
                  sx={{
                    border: 0,

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
                <Typography
                  sx={{
                    color: theme.palette.text.secondary,
                  }}
                >
                  {user.joinedOn}
                </Typography>
              </TableCell>

              <TableCell align="right">
                <IconButton
                  sx={{
                    color: theme.palette.text.secondary,
                  }}
                >
                  <EditIcon fontSize="small" />
                </IconButton>

                <IconButton
                  sx={{
                    color: theme.palette.text.secondary,
                  }}
                >
                  <MoreVertIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default UsersTable;