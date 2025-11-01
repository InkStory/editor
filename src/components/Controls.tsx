import type { ReactNode } from "react";

import { Box, ButtonBase, Typography } from "@mui/material";
import { useRef, useEffect } from "react";

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
  // Small passive touch-listener detects horizontal drags so clicks are suppressed
  // while a user is scrolling the bar. This keeps native scrolling behavior and
  // avoids reimplementing drag-to-scroll.
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let startX = 0;
    const THRESHOLD = 6; // pixels

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      startX = e.touches[0].clientX;
      isDraggingRef.current = false;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - startX;
      if (Math.abs(dx) > THRESHOLD) {
        isDraggingRef.current = true;
      }
    };

    const onTouchEnd = () => {
      // small delay so immediate click after lift doesn't fire
      setTimeout(() => {
        isDraggingRef.current = false;
      }, 50);
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("touchstart", onTouchStart as EventListener);
      el.removeEventListener("touchmove", onTouchMove as EventListener);
      el.removeEventListener("touchend", onTouchEnd as EventListener);
    };
  }, []);

  const onItemClick = (key: ControlKey, e: React.MouseEvent) => {
    if (isDraggingRef.current) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    setSection(key);
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        display: "flex",
        flexDirection: { xs: "row", md: "column" },
        // allow horizontal scrolling only on small screens; prevent vertical scroll which
        // can interfere with touch gestures and cause the UI to feel stuck
        overflowX: "auto",
        overflowY: { xs: "hidden", md: "auto" },
        gap: { xs: 1, md: 1.5 },
        height: "100%",
        // enable smooth momentum scrolling on iOS
        WebkitOverflowScrolling: "touch",
        // let the browser handle horizontal panning natively
        touchAction: { xs: "pan-x", md: "auto" },
        // enable scroll snap on mobile so items align nicely and scrolling feels natural
        scrollSnapType: { xs: "x mandatory", md: "none" },
        // give a bit of horizontal padding so items aren't flush to the edge
        px: { xs: 1, md: 0 },
        // prevent text selection while dragging
        userSelect: { xs: "none", md: "auto" },
        WebkitUserSelect: { xs: "none", md: "auto" },
        // keep overscroll within the container to avoid parent scrolling
        overscrollBehavior: { xs: "contain", md: "auto" },
        // hide the default webkit scrollbar for cleaner look on mobile
        "&::-webkit-scrollbar": { display: { xs: "none", md: "block" } },
      }}
    >
      {ITEMS.map((item) => {
        const isActive = section === item.key;

        return (
          <ButtonBase
            key={item.key}
            onClick={(e) => onItemClick(item.key, e)}
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
              // ensure items don't shrink on small screens so horizontal scroll works reliably
              flexShrink: { xs: 0, md: 1 },
              scrollSnapAlign: { xs: "center", md: "none" },
              minWidth: { xs: 88, md: "auto" },
              // let touches on buttons still allow native pan gestures
              touchAction: { xs: "manipulation", md: "auto" },
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
