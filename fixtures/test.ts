import { test as base } from "@playwright/test";
import { Header } from "../page-objects/Header";
import { HomePage } from "../page-objects/HomePage";
import { BlogPage } from "../page-objects/BlogPage";

type Fixtures = {
  header: Header;
  homePage: HomePage;
  blogPage: BlogPage;
};

export const test = base.extend<Fixtures>({
  header: async ({ page }, use) => {
    await use(new Header(page));
  },

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  blogPage: async ({ page }, use) => {
    await use(new BlogPage(page));
  },
});

export { expect } from "@playwright/test";