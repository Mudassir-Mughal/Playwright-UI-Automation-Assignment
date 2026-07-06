import { test } from "@playwright/test";
import { HomePageActions } from "../pages/HomePage/HomePage.actions";
import { bootstrapDualListDemoActions } from "../pages/BootstrapListBox/bootstrapListBox.actions";

test("Bootstrap Dual List Demo", async ({ page }) => {
  const home = new HomePageActions(page);
  const bootstrap = new bootstrapDualListDemoActions(page);

  await home.navigateToHomePage();

  await home.clickBootstrapListBoxLink();

  await bootstrap.moveOneItemRight();
  await bootstrap.moveOneItemLeft();
  await bootstrap.moveAllItemsLeft();
  await bootstrap.moveAllItemsRight();
  await bootstrap.searchBoxFirst("A");
  await bootstrap.searchBoxSecond("D");
});


//for now passed all but not assertion apply