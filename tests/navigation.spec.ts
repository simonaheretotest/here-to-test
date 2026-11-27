import { test, expect } from "../fixtures/test";

test.describe("Website navigation", () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goto();
  });

  test("navigate to blog from header", async ({
    page,
    header,
    blogPage,
  }) => {
    await header.navigateToBlog();

    await expect(page).toHaveURL(/\/blog$/);

    await expect(blogPage.heading).toHaveText(
      "The testing journal."
    );
  });

  test("navigate to projects from header", async ({
    page,
    header,
  }) => {
    await header.navigateToProjects();

    await expect(page).toHaveURL(/\/projects$/);
  });

  test("navigate to about from header", async ({
    page,
    header,
  }) => {
    await header.navigateToAbout();

    await expect(page).toHaveURL(/\/about$/);
  });

  test("logo returns to homepage", async ({
    page,
    header,
    homePage,
  }) => {
    await header.navigateToBlog();

    await header.clickLogo();

    await expect(page).toHaveURL(/\/$/);

    await expect(homePage.heading).toBeVisible();
  });

  test("explore blog CTA opens blog", async ({
    page,
    homePage,
  }) => {
    await homePage.exploreBlog();

    await expect(page).toHaveURL(/\/blog$/);
  });

  test("view projects CTA opens projects", async ({
    page,
    homePage,
  }) => {
    await homePage.viewProjects();

    await expect(page).toHaveURL(/\/projects$/);
  });
});