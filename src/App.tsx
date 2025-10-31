import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Layout } from "./Layout.tsx";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
