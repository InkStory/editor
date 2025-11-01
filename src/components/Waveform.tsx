import {
  Box,
  Stack,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  Slider,
  Button,
  Grid,
} from "@mui/material";

const COLORS = [
  "#4caf50",
  "#2196f3",
  "#ff9800",
  "#e91e63",
  "#9c27b0",
  "#607d8b",
];

export function Waveform() {
  const DEFAULT_STYLE: "standard" | "circle" = "standard";
  const DEFAULT_COLOR = COLORS[0];
  const DEFAULT_BAR_THICKNESS = 6;
  const DEFAULT_SPACING = 4;
  const DEFAULT_HEIGHT = 80;

  return (
    <Stack>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1, px: 2 }}
      >
        <Box>
          <Typography variant="caption" sx={{ display: "block", mb: 1 }}>
            Style
          </Typography>
          <ToggleButtonGroup value={DEFAULT_STYLE} size="small">
            <ToggleButton value="standard">Standard</ToggleButton>
            <ToggleButton value="circle">Circle</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Box>
          <Typography variant="caption" sx={{ display: "block", mb: 1 }}>
            Color
          </Typography>

          <Grid container spacing={1}>
            {COLORS.map((c) => (
              <Grid key={c}>
                <Button
                  variant={c === DEFAULT_COLOR ? "contained" : "outlined"}
                  sx={{
                    minWidth: 40,
                    height: 32,
                    background: c === DEFAULT_COLOR ? c : undefined,
                    borderColor: c,
                    px: 1,
                  }}
                />
              </Grid>
            ))}

            <Grid>
              <Button variant="outlined">Custom</Button>
            </Grid>
          </Grid>
        </Box>

        <Box>
          <Typography variant="caption" sx={{ display: "block", mb: 1 }}>
            Bar thickness
          </Typography>
          <Slider
            value={DEFAULT_BAR_THICKNESS}
            min={2}
            max={24}
            step={1}
            valueLabelDisplay="auto"
          />
        </Box>

        <Box>
          <Typography variant="caption" sx={{ display: "block", mb: 1 }}>
            Space between bars
          </Typography>
          <Slider
            value={DEFAULT_SPACING}
            min={0}
            max={16}
            step={1}
            valueLabelDisplay="auto"
          />
        </Box>

        <Box>
          <Typography variant="caption" sx={{ display: "block", mb: 1 }}>
            Height
          </Typography>
          <Slider
            value={DEFAULT_HEIGHT}
            min={20}
            max={220}
            step={1}
            valueLabelDisplay="auto"
          />
        </Box>
      </Box>
    </Stack>
  );
}
