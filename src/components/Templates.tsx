import { Box, Stack, Typography, Grid } from "@mui/material";

const MOCK_TEMPLATES = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  color: ["#f8f9fa", "#ffd9d9", "#d9fff2", "#d9e1ff", "#fff0d9", "#f3d9ff"][
    i % 6
  ],
}));

export function Templates() {
  return (
    <Stack>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1, px: 2 }}
      >
        <Typography variant="caption" sx={{ display: "block" }}>
          Available templates
        </Typography>

        <Grid container spacing={2}>
          {MOCK_TEMPLATES.map((t) => (
            <Grid size={{ xs: 6, sm: 4 }} key={t.id}>
              <Box
                sx={{
                  width: "100%",
                  height: 88,
                  backgroundColor: t.color,
                  borderRadius: 1,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
}
