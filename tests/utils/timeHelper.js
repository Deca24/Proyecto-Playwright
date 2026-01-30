/**
 * Convierte texto de tiempo relativo a horas
 * Ejemplos: "Hace 2 horas" -> 2, "Hace 1 día" -> 24, "Hace 3 días" -> 72
 * @param {string} timeText - Texto con el tiempo relativo
 * @returns {number} - Horas desde la publicación, o Infinity si no se puede parsear
 */
export function parseTimeToHours(timeText) {
  if (!timeText) return Infinity;
  
  const text = timeText.toLowerCase().trim();
  
  // Detectar "Hace X horas"
  const hoursMatch = text.match(/hace\s+(\d+)\s+hora?s?/i);
  if (hoursMatch) {
    return parseInt(hoursMatch[1]);
  }
  
  // Detectar "Hace X minutos" (menos de 1 hora)
  const minutesMatch = text.match(/hace\s+(\d+)\s+minuto?s?/i);
  if (minutesMatch) {
    return 0; // Consideramos menos de 1 hora como 0 horas
  }
  
  // Detectar "Hace X días" o "Hace X día"
  const daysMatch = text.match(/hace\s+(\d+)\s+d[ií]a?s?/i);
  if (daysMatch) {
    return parseInt(daysMatch[1]) * 24;
  }
  
  // Detectar "Hoy" o "Publicado hoy"
  if (text.includes('hoy')) {
    return 0;
  }
  
  // Detectar "Ayer"
  if (text.includes('ayer')) {
    return 24;
  }
  
  // Si no se puede parsear, retornar Infinity (no incluir en filtro de 24h)
  return Infinity;
}

/**
 * Verifica si una vacante fue publicada en las últimas X horas
 * @param {string} timeText - Texto con el tiempo relativo
 * @param {number} maxHours - Máximo de horas permitidas (default: 24)
 * @returns {boolean} - true si está dentro del rango de tiempo
 */
export function isWithinTimeRange(timeText, maxHours = 24) {
  const hours = parseTimeToHours(timeText);
  return hours <= maxHours;
}
