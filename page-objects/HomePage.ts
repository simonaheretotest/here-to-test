import type { Page, Locator } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly heading: Locator;
  readonly exploreBlogButton: Locator;
  readonly viewProjectsButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.heading = page.getByRole("heading", {
      level: 1,
    });

    this.exploreBlogButton = page.getByRole("link", {
      name: /Explore the blog/i,
    });

    this.viewProjectsButton = page.getByRole("link", {
      name: /View my projects/i,
    });
  }

  async goto() {
    await this.page.goto("/");
  }

  async exploreBlog() {
    await this.exploreBlogButton.click();
  }

  async viewProjects() {
    await this.viewProjectsButton.click();
  }
}