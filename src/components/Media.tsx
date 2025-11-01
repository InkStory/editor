import {
  Button,
  Divider,
  Stack,
  Card,
  Box,
  CardContent,
  Typography,
  IconButton,
  CardMedia,
} from "@mui/material";

import AudioFileIcon from "@mui/icons-material/AudioFile";
import VideoFileIcon from "@mui/icons-material/VideoFile";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

export function Media() {
  return (
    <Stack>
      <Card sx={{ display: "flex", width: "100%", borderRadius: 0 }}>
        <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Live From Space
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              Mac Miller
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              <SkipPreviousIcon />
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
              <SkipNextIcon />
            </IconButton>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151, flex: "0 0 151px" }}
          image="/editor/live-from-space.jpg"
          alt="Live from space album cover"
        />
      </Card>

      <Divider sx={{ my: 1 }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          mt: 1,
          px: 2,
        }}
      >
        <Button
          variant="outlined"
          fullWidth
          startIcon={<AudioFileIcon />}
          sx={{ borderRadius: 0, justifyContent: "flex-start" }}
        >
          Audio file
        </Button>

        <Button
          variant="outlined"
          fullWidth
          startIcon={<VideoFileIcon />}
          sx={{ borderRadius: 0, justifyContent: "flex-start" }}
        >
          Video file
        </Button>

        <Button
          variant="outlined"
          fullWidth
          startIcon={<YouTubeIcon />}
          sx={{ borderRadius: 0, justifyContent: "flex-start" }}
        >
          Youtube
        </Button>

        <Button
          variant="outlined"
          fullWidth
          startIcon={<LibraryMusicIcon />}
          sx={{ borderRadius: 0, justifyContent: "flex-start" }}
        >
          Online streamings
        </Button>
      </Box>
    </Stack>
  );
}
