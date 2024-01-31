export const getCookiesByName = (name) => {
  /* separamos todo el array de cookies */
  const cookies = document.cookie.split(";");
  /* recorremos el array */
  for (let i = 0; i < cookies.length; i++) {
    /* cortamos espacios y dejamos el name mas el valor 
        ej: cookie1=chocolate */
    const cookie = cookies[i].trim();
    /* Se verifica si la cookie comienza con el nombre especificado seguido de un signo de igual = */
    if (cookie.startsWith(name + "=")) {
      /* devolvemos el valor de la cookie */
      return cookie.substring(name.length + 1);
    }
  }
};
