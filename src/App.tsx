import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Registro from "./pages/Registro";
import Inicio from "./pages/Inicio";
import Noticias from "./pages/Noticias";
import ConocimientosMarineros from "./pages/ConocimientosMarineros";
import Navegacion from "./pages/Navegacion";
import LeyesYReglamentos from "./pages/LeyesYReglamentos";
import SeguridadYComunicaciones from "./pages/SeguridadYComunicaciones";
import CulturaMarinera from "./pages/CulturaMarinera";
import LibrosYConsultas from "./pages/LibrosYConsultas";
import Videos from "./pages/Videos";
import Club from "./pages/Club";
import Tienda from "./pages/Tienda";
import QuienesSomos from "./pages/QuienesSomos";
import Error404 from "./pages/Error404";

function App(){

  return (
    <Router>
      <Routes>

        {/* Ruta de Registro */}
        <Route path="/registro" element={<Registro />} />

        {/* Rutas del Layout -> (Protegidas) */}
        <Route path="/"
            element={
              localStorage.getItem("usuario") ? <Layout /> : <Registro />
            }>
          <Route index element={<Inicio />} />
          <Route path="noticias" element={<Noticias />} />
          <Route
            path="conocimientos-marineros"
            element={<ConocimientosMarineros />}
          />
          <Route path="navegacion" element={<Navegacion />} />
          <Route path="leyes-y-reglamentos" element={<LeyesYReglamentos />} />
          <Route path="seguridad" element={<SeguridadYComunicaciones />} />
          <Route path="cultura" element={<CulturaMarinera />} />
          <Route path="libros" element={<LibrosYConsultas />} />
          <Route path="videos" element={<Videos />} />
          <Route path="club" element={<Club />} />
          <Route path="tienda" element={<Tienda />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
