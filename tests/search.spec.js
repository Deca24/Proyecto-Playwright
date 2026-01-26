import { test, expect } from '@playwright/test';
import { ComputrabajoPage } from './pages/computrabajoPage.js';
import config from './utils/config.js';

test.describe('Job Search Automation', () => {
  test('Buscar vacantes en Computrabajo', async ({ page }) => {
    const computrabajo = new ComputrabajoPage(page);
    
    // Navegar y buscar
    await computrabajo.navigate('https://www.computrabajo.com.co/empleos');
    await computrabajo.searchJob(config.TARGET_ROLE, config.LOCATION);
    
    // Obtener todas las vacantes
    const jobs = await computrabajo.getAllJobs();
    
    // Validar que se encontraron resultados
    expect(jobs.length).toBeGreaterThan(0);
    
    // Listar todas las vacantes encontradas
    computrabajo.printJobList(jobs, config.TARGET_ROLE);
  });
});
