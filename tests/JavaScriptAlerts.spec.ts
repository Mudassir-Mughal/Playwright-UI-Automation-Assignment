import { test } from "@playwright/test";
import { HomePageActions } from "../pages/HomePage/HomePage.actions";
import { JavaScriptAlertsActions } from "../pages/JavaScriptAlerts/javaScriptAlerts.actions";


test("JavaScript Alerts Demo", async ({ page }) => {
    const home = new HomePageActions(page);
    const jsAlerts = new JavaScriptAlertsActions(page);

    await home.navigateToHomePage();
    await home.clickJavascriptAlertsLink();

    await jsAlerts.handleSimpleAlert();

    await jsAlerts.handleConfirmOk();
    await jsAlerts.verifyConfirmResult("You pressed OK!");

    await jsAlerts.handleConfirmCancel();
    await jsAlerts.verifyConfirmResult("You pressed Cancel!");

    await jsAlerts.handlePrompt("Mudassir");
    await jsAlerts.verifyPromptResult("You have entered 'Mudassir' !");
});//2 browsers passed but firefox failed