import { Box, Stack, Typography } from "@mui/material";

const PRESETS = [
  "#ffffff",
  "#f8f9fa",
  "#e9ecef",
  "#dee2e6",
  "#ced4da",
  "#adb5bd",
  "#6c757d",
  "#495057",
  "#343a40",
  "#000000",
  "#ff6b6b",
  "#ffd93d",
  "#6bcB77",
  "#4d9fef",
  "#a56ef7",
];

export function Background() {
  return (
    <Stack>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1, px: 2 }}
      >
        <Typography variant="caption" sx={{ display: "block" }}>
          Color presets
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(3,1fr)",
              sm: "repeat(4,1fr)",
              md: "repeat(6,1fr)",
            },
            gap: 2,
          }}
        >
          {PRESETS.map((c) => (
            <Box
              key={c}
              sx={{
                width: "100%",
                height: 72,
                backgroundColor: c,
                borderRadius: 1,
                border: "1px solid",
                borderColor: "divider",
              }}
            />
          ))}
        </Box>
      </Box>
    </Stack>
  );
}
