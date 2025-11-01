import type { ReactNode } from "react";

import { Box, ButtonBase, Typography } from "@mui/material";

import WavesIcon from "@mui/icons-material/ShowChart";
import MediaIcon from "@mui/icons-material/AudioFile";
import SizeIcon from "@mui/icons-material/AspectRatio";
import TemplatesIcon from "@mui/icons-material/GridView";
import BackgroundIcon from "@mui/icons-material/Image";
import TextIcon from "@mui/icons-material/TextFields";

export type ControlKey =
  | "waveform"
  | "media"
  | "size"
  | "templates"
  | "background"
  | "text";

type Item = {
  key: ControlKey;
  label: string;
  subtitle: string;
  icon: ReactNode;
};

const ITEMS: Item[] = [
  {
    key: "media",
    label: "Media",
    subtitle: "Audio / Video",
    icon: <MediaIcon />,
  },
  {
    key: "waveform",
    label: "Waveform",
    subtitle: "Style & bars",
    icon: <WavesIcon />,
  },
  {
    key: "size",
    label: "Size",
    subtitle: "Canvas & layout",
    icon: <SizeIcon />,
  },
  {
    key: "templates",
    label: "Templates",
    subtitle: "Presets",
    icon: <TemplatesIcon />,
  },
  {
    key: "background",
    label: "Background",
    subtitle: "Color / image",
    icon: <BackgroundIcon />,
  },
  {
    key: "text",
    label: "Text",
    subtitle: "Titles & captions",
    icon: <TextIcon />,
  },
];

type ControlsProps = {
  section: ControlKey;
  setSection: (key: ControlKey) => void;
};

export function Controls({ section, setSection }: ControlsProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "row", md: "column" },
        overflowX: "auto",
        overflowY: "auto",
        gap: { xs: 1, md: 1.5 },
        height: "100%",
      }}
    >
      {ITEMS.map((item) => {
        const isActive = section === item.key;

        return (
          <ButtonBase
            key={item.key}
            onClick={() => setSection(item.key)}
            aria-pressed={isActive}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 0.5, md: 1 },
              px: { xs: 2, md: 2 },
              py: { xs: 1, md: 1 },
              borderRadius: 1,
              width: { xs: "auto", md: "100%" },
              justifyContent: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              "&:hover": { bgcolor: "action.hover" },
              flexShrink: { xs: 0, md: 1 },
              scrollSnapAlign: { xs: "center", md: "none" },
              minWidth: { xs: 88, md: "auto" },
              bgcolor: isActive
                ? { xs: "transparent", md: "action.selected" }
                : undefined,
              borderLeft: { md: "4px solid" },
              borderColor: { md: "divider" },
              borderLeftColor: isActive ? "primary.main" : "transparent",
              "&:not(:last-of-type)": {
                borderBottom: { md: "1px solid" },
                borderColor: { md: "divider" },
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: { xs: 0.5, md: 0 },
                mr: { xs: 0, md: 1 },
                "& svg": { fontSize: { xs: 20, md: 24 } },
                color: isActive ? "primary.main" : "text.primary",
              }}
            >
              {item.icon}
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Typography
                variant="body2"
                component="span"
                sx={{ fontWeight: isActive ? 600 : undefined }}
              >
                {item.label}
              </Typography>

              <Typography
                variant="caption"
                color="text.secondary"
                component="span"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                {item.subtitle}
              </Typography>
            </Box>
          </ButtonBase>
        );
      })}
    </Box>
  );
}
