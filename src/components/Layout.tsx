import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useUsuario } from "../hooks/useUsuario";

const Layout = () => {
  const usuario = useUsuario();
  const navigate = useNavigate();

  useEffect(() => {
    if (!usuario) {
      navigate("/registro");
    }
  }, [usuario, navigate]);

  // Mientras no haya usuario, no renderizamos nada (o mostrar un spinner)
  if (!usuario) return null;

  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-6 w-full min-h-screen bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
