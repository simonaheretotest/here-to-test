import type { Page, Locator } from "@playwright/test";

export class ArticlePage {
  readonly page: Page;
  readonly heading: Locator;
  readonly content: Locator;
  readonly tableOfContents: Locator;
  readonly codeBlock: Locator;
  readonly copyButton: Locator;
  readonly readingTime: Locator;
  readonly publicationDate: Locator;
  readonly articleNavigation: Locator;

  constructor(page: Page) {
    this.page = page;

    this.heading = page.getByRole("heading", {
      level: 1,
    });

    this.content = page.locator(".blog-content");

    this.tableOfContents = page.getByRole("navigation", {
      name: "Table of contents",
    });

    this.codeBlock = this.content.locator("pre");

    this.copyButton = this.content.getByRole("button", {
      name: "Copy code",
      exact: true,
    });

    this.readingTime = page
      .getByRole("main")
      .getByText(/\d+ min read/)
      .first();

    this.publicationDate = page.locator("main time");

    this.articleNavigation = page.getByRole(
      "navigation",
      { name: "Article navigation" }
    );
  }

  async goto(slug: string) {
    await this.page.goto(`/blog/${slug}`);
  }

  async clickSection(name: string) {
    await this.tableOfContents
      .getByRole("link", {
        name,
        exact: true,
      })
      .click();
  }

  async copyCode() {
    await this.copyButton.first().click();
  }

  async getCodeText() {
    return await this.codeBlock.first().textContent();
  }

  async navigateToNextArticle() {
    await this.articleNavigation
      .getByRole("link", { name: /Next article/i })
      .click();
  }

  async navigateToPreviousArticle() {
    await this.articleNavigation
      .getByRole("link", { name: /Previous article/i })
      .click();
  }
}