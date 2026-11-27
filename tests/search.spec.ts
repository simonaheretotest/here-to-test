import { test, expect } from "../fixtures/test";

const searchCases = [
  {
    name: "search by keyword",
    query: "Playwright",
    expectedCount: 2,
  },
  {
    name: "search by article topic",
    query: "locators",
    expectedCount: 1,
  },
  {
    name: "search is case insensitive",
    query: "LOCATORS",
    expectedCount: 1,
  },
  {
    name: "search ignores surrounding whitespace",
    query: "  locators  ",
    expectedCount: 1,
  },
  {
    name: "search by tag",
    query: "TypeScript",
    expectedCount: 2,
  },
  {
    name: "search with unknown keyword",
    query: "xyznonexistent123",
    expectedCount: 0,
  },
  {
    name: "search with special characters",
    query: "!@#$%",
    expectedCount: 0,
  },
  {
    name: "empty search displays all articles",
    query: "",
    expectedCount: 2,
  },
];

test.describe("Blog search and filtering", () => {
  test.beforeEach(async ({ blogPage }) => {
    await blogPage.goto();
  });

  for (const searchCase of searchCases) {
    test(searchCase.name, async ({ blogPage }) => {
      await blogPage.search(searchCase.query);

      await expect(blogPage.articles).toHaveCount(
        searchCase.expectedCount
      );

      if (searchCase.expectedCount === 0) {
        await expect(
          blogPage.noResultsMessage
        ).toBeVisible();
      }
    });
  }

  test("clear filters restores all articles", async ({
    blogPage,
  }) => {
    await blogPage.search("xyznonexistent123");

    await expect(
      blogPage.noResultsMessage
    ).toBeVisible();

    await blogPage.clearFilters();

    await expect(blogPage.searchInput).toHaveValue("");

    await expect(blogPage.articles).toHaveCount(2);
  });

  test("filter articles by category", async ({
    blogPage,
    page,
  }) => {
    await blogPage.selectCategory("Playwright");

    await expect(
      page.getByRole("button", {
        name: "Playwright",
        exact: true,
      })
    ).toHaveAttribute("aria-pressed", "true");

    await expect(blogPage.articles).toHaveCount(2);
  });

  test("combine category and search filters", async ({
    blogPage,
  }) => {
    await blogPage.selectCategory("Playwright");

    await blogPage.search("locators");

    await expect(blogPage.articles).toHaveCount(1);

    await expect(blogPage.articles.first()).toContainText(
      "Understanding Playwright Locators"
    );
  });

  test("open article from search results", async ({
    page,
    blogPage,
  }) => {
    await blogPage.search("locators");

    await blogPage.openArticle(
      "Understanding Playwright Locators"
    );

    await expect(page).toHaveURL(
      /\/blog\/understanding-playwright-locators$/
    );

    await expect(
      page.getByRole("heading", {
        level: 1,
      })
    ).toHaveText("Understanding Playwright Locators");
  });
});