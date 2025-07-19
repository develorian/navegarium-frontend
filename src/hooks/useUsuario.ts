export function useUsuario() {
  const raw = localStorage.getItem("usuario");

  try {
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    return null;
  }
}
