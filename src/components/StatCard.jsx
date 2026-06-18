import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const StatCard = ({ title, value, growth, icon: Icon }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        flex: 1,
        borderRadius: 3,
        bgcolor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.custom.border}`,
      }}
    >
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: 3,
              bgcolor: theme.palette.custom.cardIconBg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: theme.palette.primary.main,
            }}
          >
            <Icon />
          </Box>

          <Stack spacing={0.8}>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.text.secondary }}
            >
              {title}
            </Typography>

            <Typography
              variant="h5"
              fontWeight={700}
              sx={{ color: theme.palette.text.primary }}
            >
              {value}
            </Typography>

            <Stack direction="row" spacing={0.5} alignItems="center">
              <TrendingUpIcon
                sx={{
                  fontSize: 16,
                  color: theme.palette.custom.successText,
                }}
              />

              <Typography
                variant="caption"
                sx={{ color: theme.palette.custom.successText }}
              >
                {growth}
              </Typography>

              <Typography
                variant="caption"
                sx={{ color: theme.palette.text.secondary }}
              >
                vs last week
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default StatCard;