import {
  Box,
  Stack,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  Button,
  Select,
  MenuItem,
  Slider,
} from "@mui/material";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";

const STYLES = ["Heading", "Subheading", "Caption"];
const FONTS = ["Inter", "Roboto", "Georgia"];
const COLORS = ["#000000", "#333333", "#6c757d", "#9f7aea", "#4d9fef"];

export function Text() {
  const DEFAULT_STYLE = STYLES[0];
  const DEFAULT_FONT = FONTS[0];
  const DEFAULT_SIZE = 32;

  return (
    <Stack>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1, px: 2 }}
      >
        <Box>
          <Typography variant="caption" sx={{ display: "block", mb: 1 }}>
            Styles
          </Typography>

          <ToggleButtonGroup value={DEFAULT_STYLE} size="small">
            {STYLES.map((s) => (
              <ToggleButton key={s} value={s} sx={{ textTransform: "none" }}>
                {s}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>

        <Box>
          <Typography variant="caption" sx={{ display: "block", mb: 1 }}>
            Font
          </Typography>
          <Select
            variant="outlined"
            value={DEFAULT_FONT}
            size="small"
            sx={{ minWidth: 160 }}
          >
            {FONTS.map((f) => (
              <MenuItem key={f} value={f} sx={{ fontFamily: f }}>
                {f}
              </MenuItem>
            ))}
          </Select>
        </Box>

        <Box>
          <Typography variant="caption" sx={{ display: "block", mb: 1 }}>
            Color
          </Typography>

          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {COLORS.map((c) => (
              <Box
                key={c}
                sx={{
                  width: 40,
                  height: 32,
                  backgroundColor: c,
                  borderRadius: 1,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              />
            ))}
          </Box>
        </Box>

        <Box>
          <Typography variant="caption" sx={{ display: "block", mb: 1 }}>
            Alignment
          </Typography>
          <ToggleButtonGroup value="left" size="small">
            <ToggleButton value="left">
              <FormatAlignLeftIcon />
            </ToggleButton>
            <ToggleButton value="center">
              <FormatAlignCenterIcon />
            </ToggleButton>
            <ToggleButton value="right">
              <FormatAlignRightIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Box>
          <Typography variant="caption" sx={{ display: "block", mb: 1 }}>
            Size
          </Typography>
          <Slider
            value={DEFAULT_SIZE}
            min={10}
            max={72}
            valueLabelDisplay="auto"
          />
        </Box>

        <Box>
          <Button variant="contained">Add text</Button>
        </Box>
      </Box>
    </Stack>
  );
}
