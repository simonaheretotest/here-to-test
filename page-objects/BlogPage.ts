import type { Page, Locator } from "@playwright/test";

export class BlogPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly searchInput: Locator;
  readonly allArticlesButton: Locator;
  readonly articles: Locator;
  readonly noResultsMessage: Locator;
  readonly clearFiltersButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.heading = page.getByRole("heading", {
      level: 1,
    });

    this.searchInput = page.getByRole("searchbox", {
      name: "Search articles",
    });

    this.allArticlesButton = page.getByRole("button", {
      name: "All articles",
      exact: true,
    });

    this.articles = page.getByRole("main").locator("article");

    this.noResultsMessage = page.getByRole("heading", {
      name: "No articles found.",
    });

    this.clearFiltersButton = page.getByRole("button", {
      name: "Clear filters",
    });
  }

  async goto() {
    await this.page.goto("/blog");
  }

  async search(query: string) {
    await this.searchInput.fill(query);
  }

  async selectCategory(category: string) {
    await this.page.getByRole("button", {
      name: category,
      exact: true,
    }).click();
  }

  async clearFilters() {
    await this.clearFiltersButton.click();
  }

  async openArticle(title: string) {
    await this.articles.getByRole("link", {
      name: title,
      exact: true,
    }).click();
  }
}