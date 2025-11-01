import { Box, Typography, useTheme } from "@mui/material";

export function Canvas() {
  const theme = useTheme();

  const editorBg = theme.palette.grey[900];
  const gridColor = "rgba(255,255,255,0.03)";

  // wood frame colors
  const woodLeft = "#5e3918";
  const woodMid = "#b07937";
  const woodRight = "#7a4a1f";

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 3, md: 6 },
        py: { xs: 3, md: 6 },
        backgroundColor: editorBg,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: `
            linear-gradient(to right, ${gridColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)`,
          backgroundSize: `20px 20px, 20px 20px`,
          opacity: 1,
        }}
      />

      <Box
        sx={{
          width: { xs: "100%", md: "86%" },
          maxWidth: 980,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            aspectRatio: "1 / 1",
            maxHeight: { xs: "30vh", md: 720 },
            borderRadius: 2,
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: { xs: 1.5, md: 2 },
            backgroundImage: `linear-gradient(90deg, ${woodLeft} 0%, ${woodMid} 50%, ${woodRight} 100%), repeating-linear-gradient(180deg, rgba(255,255,255,0.03) 0 2px, rgba(0,0,0,0.02) 2px 6px)`,
            backgroundBlendMode: "overlay",
            boxShadow: `0 12px 40px ${theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(16,24,40,0.10)"}`,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: 1,
              overflow: "hidden",
              background: `linear-gradient(135deg, rgba(255,235,205,0.95) 0%, rgba(255,212,134,0.9) 40%, rgba(245,134,84,0.85) 100%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: theme.palette.text.primary,
              fontWeight: 700,
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "text.primary", opacity: 0.95 }}
            >
              Your poster
            </Typography>
          </Box>

          <Typography
            variant="caption"
            sx={{
              position: "absolute",
              top: 8,
              left: 12,
              color: "text.secondary",
            }}
          >
            Poster • 1080×1080
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
