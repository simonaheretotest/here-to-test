import { test, expect } from "@playwright/test";

test.describe("Website smoke tests", () => {
  test("homepage loads successfully", async ({ page }) => {
    const response = await page.goto("/");

    expect(response?.status()).toBe(200);

    await expect(page).toHaveTitle(/Here to Test/i);

    await expect(
      page.getByRole("heading", { level: 1 })
    ).toBeVisible();
  });

  test("blog page loads successfully", async ({ page }) => {
    const response = await page.goto("/blog");

    expect(response?.status()).toBe(200);

    await expect(
      page.getByRole("heading", {
        name: "The testing journal.",
      })
    ).toBeVisible();
  });

  test("projects page loads successfully", async ({ page }) => {
    const response = await page.goto("/projects");

    expect(response?.status()).toBe(200);

    await expect(
      page.getByRole("heading", { level: 1 })
    ).toBeVisible();
  });

  test("about page loads successfully", async ({ page }) => {
    const response = await page.goto("/about");

    expect(response?.status()).toBe(200);

    await expect(
      page.getByRole("heading", {
        name: "Curiosity meets quality.",
      })
    ).toBeVisible();
  });

  test("invalid page returns 404", async ({ page }) => {
    const response = await page.goto("/non-existent-page");

    expect(response?.status()).toBe(404);
  });
});