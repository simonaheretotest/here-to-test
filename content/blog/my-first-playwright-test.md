---
title: "My First Playwright Test"
description: "How I started learning automated software testing with Playwright and TypeScript."
date: "2026-11-27"
category: "Playwright"
tags: ["Playwright", "TypeScript", "Automation"]
---

## Getting started

After completing my ISTQB certification, I decided to start learning Playwright and TypeScript through practical projects.

## My first test

Here is a simple Playwright test that verifies whether the SauceDemo login page is displayed.

```typescript
import { test, expect } from "@playwright/test";

test("login page is displayed", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await expect(
    page.getByPlaceholder("Username")
  ).toBeVisible();
});
```

## What I learned

- How to navigate to a website.
- How to locate elements.
- How to write assertions.
- How async and await work in Playwright.
