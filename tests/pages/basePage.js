import { expect } from '@playwright/test';

export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url);
    await expect(this.page).toHaveTitle(/(empleo|trabajo|jobs)/i);  // Validación QA
  }
}