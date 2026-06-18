import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const StatCard = ({ title, value, growth, icon: Icon }) => {
  return (
    <Card
      sx={{
        flex: 1,
        borderRadius: 3,
      }}
    >
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: 3,
              bgcolor: "#EEF2FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon />
          </Box>

          <Stack spacing={0.8}>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>

            <Typography variant="h5" fontWeight={700}>
              {value}
            </Typography>

            <Stack direction="row" spacing={0.5} alignItems="center">
              <TrendingUpIcon sx={{ fontSize: 16, color: "green" }} />

              <Typography variant="caption" sx={{ color: "green" }}>
                {growth}
              </Typography>

              <Typography variant="caption" color="text.secondary">
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