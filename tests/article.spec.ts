import { test, expect } from "../fixtures/test";

test.describe("Article functionality", () => {
  test.beforeEach(async ({ articlePage }) => {
    await articlePage.goto("my-first-playwright-test");
  });

  test("article displays correct title", async ({
    articlePage,
  }) => {
    await expect(articlePage.heading).toHaveText(
      "My First Playwright Test"
    );
  });

  test("article content is displayed", async ({
    articlePage,
  }) => {
    await expect(articlePage.content).toBeVisible();

    await expect(articlePage.content).toContainText(
      "After completing my ISTQB certification"
    );
  });

  test("publication date is displayed", async ({
    articlePage,
  }) => {
    await expect(
      articlePage.publicationDate
    ).toHaveAttribute("datetime", "2026-11-27");

    await expect(
      articlePage.publicationDate
    ).toBeVisible();
  });

  test("reading time is displayed", async ({
    articlePage,
  }) => {
    await expect(
      articlePage.readingTime
    ).toHaveText(/\d+ min read/);
  });

  test("table of contents is displayed", async ({
    articlePage,
  }) => {
    await expect(
      articlePage.tableOfContents
    ).toBeVisible();

    await expect(
      articlePage.tableOfContents.getByRole("link")
    ).toHaveCount(3);
  });

  test("table of contents links to correct section", async ({
    page,
    articlePage,
  }) => {
    await articlePage.clickSection("What I learned");

    await expect(page).toHaveURL(
      /#what-i-learned$/
    );

    await expect(
      page.getByRole("heading", {
        name: "What I learned",
        exact: true,
      })
    ).toBeInViewport();
  });

  test("code example is displayed", async ({
    articlePage,
  }) => {
    await expect(
      articlePage.codeBlock.first()
    ).toBeVisible();

    await expect(
      articlePage.codeBlock.first()
    ).toContainText("@playwright/test");
  });

  test("syntax highlighting is applied", async ({
    articlePage,
  }) => {
    await expect(
      articlePage.codeBlock
        .first()
        .locator("code")
    ).toHaveClass(/hljs/);
  });

  test("copy code copies correct clipboard content", async ({
    page,
    context,
    articlePage,
    browserName,
  }) => {
    test.skip(
      browserName !== "chromium",
      "Clipboard permission test requires Chromium"
    );

    await context.grantPermissions([
      "clipboard-read",
      "clipboard-write",
    ]);

    const expectedCode =
      await articlePage.getCodeText();

    await articlePage.copyCode();

    const clipboardText = await page.evaluate(
      () => navigator.clipboard.readText()
    );

    expect(clipboardText).toBe(expectedCode);
  });

  test("navigate to next article", async ({
    page,
    articlePage,
  }) => {
    await articlePage.navigateToNextArticle();

    await expect(page).toHaveURL(
      /\/blog\/understanding-playwright-locators$/
    );

    await expect(articlePage.heading).toHaveText(
      "Understanding Playwright Locators"
    );
  });

  test("navigate to previous article", async ({
    page,
    articlePage,
  }) => {
    await articlePage.goto(
      "understanding-playwright-locators"
    );

    await articlePage.navigateToPreviousArticle();

    await expect(page).toHaveURL(
      /\/blog\/my-first-playwright-test$/
    );
  });

  test("back to journal returns to blog", async ({
    page,
  }) => {
    await page.getByRole("link", {
      name: /Back to the journal/i,
    }).click();

    await expect(page).toHaveURL(/\/blog$/);
  });
});