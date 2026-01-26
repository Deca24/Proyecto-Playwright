import 'dotenv/config';

const config = {
  TARGET_ROLE: process.env.TARGET_ROLE || 'QA Automation',
  LOCATION: process.env.LOCATION || 'Colombia',
};

export default config;