import { useState } from "react";
import { Box, Divider, Grid, Paper, Stack } from "@mui/material";

import { type ControlKey, Controls } from "./components/Controls";
import { Media } from "./components/Media";
import { Waveform } from "./components/Waveform";
import { Size } from "./components/Size";
import { Templates } from "./components/Templates";
import { Background } from "./components/Background";
import { Text } from "./components/Text";
import { Canvas } from "./components/Canvas";

export function Layout() {
  const [section, setSection] = useState<ControlKey>("media");

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
          sx={{
            height: { xs: "60%", md: "100%" },
            borderRight: { xs: "none", md: "1px solid" },
            borderColor: { md: "divider" },
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          <Stack sx={{ height: "100%" }}>
            <Paper
              elevation={1}
              sx={{
                height: { xs: "15%", md: "40%" },
                overflowY: "auto",
              }}
              square
            >
              <Controls section={section} setSection={setSection} />
            </Paper>
            <Divider sx={{ my: 1 }} />
            <Paper
              elevation={0}
              sx={{
                height: { xs: "85%", md: "60%" },
                overflowY: "auto",
              }}
              square
            >
              {section === "media" && <Media />}
              {section === "waveform" && <Waveform />}
              {section === "size" && <Size />}
              {section === "templates" && <Templates />}
              {section === "background" && <Background />}
              {section === "text" && <Text />}
            </Paper>
          </Stack>
        </Grid>
        <Grid
          size={{ xs: 12, md: 8 }}
          sx={{ height: { xs: "40%", md: "100%" } }}
        >
          <Paper elevation={0} sx={{ height: "100%" }} square>
            <Canvas />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
