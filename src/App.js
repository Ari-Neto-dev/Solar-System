import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import tema from "./Tema";
import "./App.css";
import PageStart from "./pages/start";
import PagesPlanets from "./pages/planets";
import PagePlanet from "./pages/planet";

export default function App() {
  return (
    <>
      <ThemeProvider theme={tema}>
        <BrowserRouter>
        <Routes>
           {/* Página inicial */}
          <Route path="/" element={<PageStart/>}/>
          {/* Página dos planetas */}
          <Route path="/planets" element={<PagesPlanets/>}/>
          <Route path="/planet/:slug" element={<PagePlanet/>}/>


        </Routes>

        </BrowserRouter>

      </ThemeProvider>
    </>
  );
}
