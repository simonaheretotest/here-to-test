import type { Page, Locator } from "@playwright/test";

export class Header {
  readonly page: Page;
  readonly header: Locator;
  readonly logo: Locator;
  readonly blogLink: Locator;
  readonly projectsLink: Locator;
  readonly aboutLink: Locator;
  readonly githubLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.header = page.getByRole("banner");

    this.logo = this.header.locator('a[href="/"]');

    this.blogLink = this.header.getByRole("link", {
      name: "Blog",
      exact: true,
    });

    this.projectsLink = this.header.getByRole("link", {
      name: "Projects",
      exact: true,
    });

    this.aboutLink = this.header.getByRole("link", {
      name: "About",
      exact: true,
    });

    this.githubLink = this.header.getByRole("link", {
      name: /GitHub/i,
    });
  }

  async clickLogo() {
    await this.logo.click();
  }

  async navigateToBlog() {
    await this.blogLink.click();
  }

  async navigateToProjects() {
    await this.projectsLink.click();
  }

  async navigateToAbout() {
    await this.aboutLink.click();
  }
}