import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registro = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [residencia, setResidencia] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (nombre && correo && residencia) {
      // Aquí puedes almacenar en localStorage o enviar a backend
      localStorage.setItem("usuario", JSON.stringify({ nombre, correo, residencia }));
      navigate("/"); // Redirige al contenido principal
    } else {
      alert("Por favor completa todos los campos.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-sky-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">Bienvenido a Navegarium</h1>
        
        <label className="block mb-2 font-semibold">Nombre completo</label>
        <input type="text" className="w-full mb-4 p-2 border rounded" value={nombre} onChange={e => setNombre(e.target.value)} />

        <label className="block mb-2 font-semibold">Correo electrónico</label>
        <input type="email" className="w-full mb-4 p-2 border rounded" value={correo} onChange={e => setCorreo(e.target.value)} />

        <label className="block mb-2 font-semibold">Estado / lugar de residencia</label>
        <input type="text" className="w-full mb-6 p-2 border rounded" value={residencia} onChange={e => setResidencia(e.target.value)} />

        <button type="submit" className="w-full bg-sky-700 text-white py-2 rounded hover:bg-sky-800 transition">Ingresar</button>
      </form>
    </div>
  );
};

export default Registro;
