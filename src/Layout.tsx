import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

export function Layout() {
  return (
    <Box
      sx={{
        height: "100dvh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Grid
        container
        direction={{ xs: "column-reverse", md: "row" }}
        sx={{ height: "100%" }}
      >
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{ height: { xs: "60%", md: "100%" } }}
        >
          <Stack sx={{ height: "100%" }}>
            <Paper
              elevation={1}
              sx={{ height: { xs: "10%", md: "40%" } }}
              style={{ backgroundColor: "#1A2027" }}
              square
            >
              <Typography variant="body1" component="p">
                controls
              </Typography>
            </Paper>
            <Paper
              elevation={0}
              sx={{ height: { xs: "90%", md: "60%" } }}
              style={{ backgroundColor: "#1A2027" }}
              square
            >
              <Typography variant="body1" component="p">
                menu
              </Typography>
            </Paper>
          </Stack>
        </Grid>
        <Grid
          size={{ xs: 12, md: 8 }}
          sx={{ height: { xs: "40%", md: "100%" } }}
        >
          <Paper
            elevation={0}
            sx={{ height: "100%" }}
            style={{ backgroundColor: "#1A2027" }}
            square
          >
            <Typography variant="body1" component="p">
              canvas
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
