import { Box, Stack, Typography, Button, Grid } from "@mui/material";

export function Size() {
  const presets = [
    { label: "Square", w: 1080, h: 1080 },
    { label: "Story", w: 1080, h: 1920 },
    { label: "Landscape", w: 1920, h: 1080 },
  ];

  return (
    <Stack>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1, px: 2 }}
      >
        <Typography variant="caption" sx={{ display: "block" }}>
          Presets
        </Typography>

        <Grid container spacing={1}>
          {presets.map((p) => (
            <Grid key={p.label}>
              <Button
                variant={p.label === "Square" ? "contained" : "outlined"}
              >{`${p.label} ${p.w}×${p.h}`}</Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
}
