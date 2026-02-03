import { BasePage } from './basePage.js';
import { expect } from '@playwright/test';
import { isWithinTimeRange } from '../utils/timeHelper.js';

export class ComputrabajoPage extends BasePage {
  constructor(page) {
    super(page);
    this.searchInput = page.locator('#prof-cat-search-input');
    this.locationInput = page.locator('#place-search-input');
    this.searchButton = page.getByRole('button', { name: 'Buscar empleos' });
    this.jobCards = page.locator('article.box_offer');
  }

  async searchJob(role, location) {
    await this.searchInput.fill(role);
    if (location) {
      await this.locationInput.fill(location);
    }
    await this.searchButton.click();
    await this.page.waitForLoadState('domcontentloaded');
    // Esperar a que aparezcan los resultados
    await this.jobCards.first().waitFor({ timeout: 15000 }).catch(() => { });
  }

  async getJobCount() {
    return await this.jobCards.count();
  }

  async getAllJobs(filterBy24h = false) {
    const count = await this.getJobCount();
    const jobs = [];

    for (let i = 0; i < count; i++) {
      const jobCard = this.jobCards.nth(i);

      try {
        // Título del trabajo
        const titleElement = jobCard.locator('h2 a.js-o-link, h2 a');
        const title = await titleElement.first().textContent({ timeout: 5000 });

        // Empresa
        const company = await jobCard.locator('a[offer-grid-article-company-url]').first().innerText({ timeout: 10000 }).then(t => t.trim()).catch(() => 'No especificada');

        // Ubicación
        const location = await jobCard.locator('p.fs16').nth(1).textContent({ timeout: 5000 }).catch(() => 'No especificada');

        // Salario
        const salary = await jobCard.locator('span:has(.icon.i_salary)').first().innerText({ timeout: 2000 }).then(t => t.trim()).catch(() => 'No especificado');

        // Fecha de publicación
        const publishedTime = await jobCard.locator('p.fc_aux.fs13').first().textContent({ timeout: 5000 }).then(t => t.trim()).catch(() => 'No especificado');

        // Link
        const link = await titleElement.first().getAttribute('href', { timeout: 5000 });

        jobs.push({
          position: jobs.length + 1,
          title: title?.trim() || 'Sin título',
          company: company?.trim() || 'No especificada',
          location: location?.trim().replace(/\s+/g, ' ') || 'No especificada',
          salary: salary?.trim() || 'No especificado',
          publishedTime: publishedTime?.trim() || 'No especificada',
          link: link ? `https://www.computrabajo.com.co${link}` : 'No disponible'
        });
      } catch (error) {
        console.log(`⚠️ Error extrayendo datos del trabajo ${i + 1}:`, error.message);
      }
    }

    return jobs;
  }

  printJobList(jobs, searchRole, filtered24h = false) {
    console.log('\n' + '='.repeat(80));
    if (filtered24h) {
      console.log(`VACANTES DE LAS ÚLTIMAS 24 HORAS PARA: "${searchRole}"`);
    } else {
      console.log(`VACANTES ENCONTRADAS PARA: "${searchRole}"`);
    }
    console.log('='.repeat(80) + '\n');

    if (jobs.length === 0) {
      console.log('❌ No se encontraron vacantes para esta búsqueda.\n');
      return;
    }

    jobs.forEach(job => {
      console.log(`[${job.position}] ${job.title}`);
      console.log(`🏢 Empresa: ${job.company}`);
      console.log(`📍 Ubicación: ${job.location}`);
      console.log(`💰 Salario: ${job.salary}`);
      console.log(`⏰ Publicado: ${job.publishedTime}`);
      console.log(`🔗 Link: ${job.link}`);
      console.log('');
    });

    console.log('='.repeat(80));
    console.log(`TOTAL DE VACANTES ENCONTRADAS: ${jobs.length}`);
    console.log('='.repeat(80) + '\n');
  }
}
