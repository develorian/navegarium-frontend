import { NavLink } from "react-router-dom";
import { useUsuario } from "../hooks/useUsuario";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const usuario = useUsuario();

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    navigate("/registro");
  };

  const menuItems = [
    { path: "/", label: "Inicio" },
    { path: "/noticias", label: "Noticias" },
    { path: "/conocimientos-marineros", label: "Conocimientos Marineros" },
    { path: "/navegacion", label: "Navegación" },
    { path: "/leyes-y-reglamentos", label: "Leyes y Reglamentos" },
    { path: "/seguridad", label: "Seguridad y Comunicaciones" },
    { path: "/cultura", label: "Cultura Marinera" },
    { path: "/libros", label: "Libros y Consulta" },
    { path: "/videos", label: "Videos" },
    { path: "/club", label: "Club Navegarium" },
    { path: "/tienda", label: "Tienda" },
    { path: "/quienes-somos", label: "¿Quiénes somos?" },
  ];

  return (
    <aside className="w-64 h-screen bg-sky-950 text-white fixed">
      <div className="p-6 font-bold text-xl border-b border-white">
        Navegarium
      </div>

      {usuario && (
        <div className="px-4 py-2 text-sm bg-sky-800 text-white border-b border-sky-700">
          👋 Hola, <span className="font-semibold">{usuario.nombre}</span>
          <button
            onClick={handleLogout}
            className="mt-2 block text-xs text-red-300 hover:text-white underline"
          >
            Cerrar sesión
          </button>
        </div>
      )}

      <nav className="flex flex-col p-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.path}
            className={({ isActive }) =>
              `p-2 rounded hover:bg-sky-700 transition ${
                isActive ? "bg-sky-700 font-semibold" : ""
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      
    </aside>
  );
};

export default Sidebar;
