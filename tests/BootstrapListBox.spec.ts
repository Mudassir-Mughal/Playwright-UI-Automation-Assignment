import { test } from "@playwright/test";
import { HomePageActions } from "../pages/HomePage/HomePage.actions";
import { bootstrapDualListDemoActions } from "../pages/BootstrapListBox/BootstrapListBox.actions";

test("Bootstrap Dual List Demo", async ({ page }) => {
  const home = new HomePageActions(page);
  const bootstrap = new bootstrapDualListDemoActions(page);

  // Step 1: Home page
  await home.navigateToHomePage();

  // Step 2: Navigate using HOME PAGE (IMPORTANT)
  await home.clickBootstrapListBoxLink();


  // Step 4: Actions
  await bootstrap.moveOneItemRight();
  await bootstrap.moveOneItemLeft();
  await bootstrap.moveAllItemsLeft();
  await bootstrap.moveAllItemsRight();
  await bootstrap.searchBoxFirst("A");
  await bootstrap.searchBoxSecond("D");
});


//for now passed all but not assertion apply