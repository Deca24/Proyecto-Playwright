import 'dotenv/config';

const config = {
  TARGET_ROLE: process.env.TARGET_ROLE || 'QA Automation',
  LOCATION: process.env.LOCATION || 'Colombia',
  FILTER_24H: process.env.FILTER_24H === 'true' || false, // Filtrar solo vacantes de últimas 24 horas
};

export default config;