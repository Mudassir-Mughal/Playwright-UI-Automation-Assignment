import { test } from "@playwright/test";
import { HomePageActions } from "../pages/HomePage/HomePage.actions";
import { BootstrapDualListDemoActions } from "../pages/BootstrapListBox/bootstrapListBox.actions";

test("should move items between the bootstrap dual lists", async ({ page }) => {
  const home = new HomePageActions(page);
  const bootstrap = new BootstrapDualListDemoActions(page);

  await home.navigateToHomePage();

  await home.clickBootstrapListBoxLink();

  await bootstrap.moveOneItemRight();
  await bootstrap.moveOneItemLeft();
  await bootstrap.moveAllItemsLeft();
  await bootstrap.moveAllItemsRight();
  await bootstrap.searchBoxFirst("A");
  await bootstrap.searchBoxSecond("D");
});


