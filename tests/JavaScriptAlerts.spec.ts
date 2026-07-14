import { test } from "@playwright/test";
import { HomePageActions } from "../pages/HomePage/HomePage.actions";
import { JavaScriptAlertsActions } from "../pages/JavaScriptAlerts/javaScriptAlerts.actions";


test("should handle JavaScript alerts correctly", async ({ page }) => {
    const home = new HomePageActions(page);
    const jsAlerts = new JavaScriptAlertsActions(page);

    await home.navigateToHomePage();
    await home.clickJavascriptAlertsLink();

    await jsAlerts.handleSimpleAlert();

    await jsAlerts.handleConfirmOk();

    await jsAlerts.handlePrompt("Mudassir");
});