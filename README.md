📘 UI Automation Training Project (Playwright + TypeScript)
📌 Overview

This project is an automated UI testing framework built using Playwright with TypeScript.
It follows the Page Object Model (POM) design pattern to ensure clean, maintainable, and reusable test code.

🌐 Application Under Test

https://www.lambdatest.com/selenium-playground/

🎯 Modules Automated

The following features are automated in this project:

Ajax Submit Form
Bootstrap List Box
Checkbox Demo
Drag & Drop Sliders
JavaScript Alerts
jQuery Dropdown
🏗️ Framework Design

This framework follows Page Object Model (POM):

Locators Layer → Stores all element selectors
Actions Layer → Contains reusable actions/functions
Tests Layer → Contains test cases and assertions

📁 Project Structure
UITrainingAssignment/
│
├── pages/
│   ├── HomePage/
│   │   ├── homePage.locators.ts
│   │   ├── homePage.actions.ts
│   │
│   ├── AjaxSubmitForm/
│   │   ├── ajaxSubmitForm.locators.ts
│   │   ├── ajaxSubmitForm.actions.ts
│   │
│   ├── BootstrapListBox/
│   │   ├── bootstrapListBox.locators.ts
│   │   ├── bootstrapListBox.actions.ts
│   │
│   ├── CheckboxDemo/
│   │   ├── checkboxDemo.locators.ts
│   │   ├── checkboxDemo.actions.ts
│   │
│   ├── DragDropSliders/
│   │   ├── dragDropSliders.locators.ts
│   │   ├── dragDropSliders.actions.ts
│   │
│   ├── JavaScriptAlerts/
│   │   ├── javaScriptAlerts.locators.ts
│   │   ├── javaScriptAlerts.actions.ts
│   │
│   ├── jQueryDropdown/
│   │   ├── jQueryDropdown.locators.ts
│   │   ├── jQueryDropdown.actions.ts
│
├── tests/
│   ├── ajaxSubmitForm.spec.ts
│   ├── bootstrapListBox.spec.ts
│   ├── checkboxDemo.spec.ts
│   ├── dragDropSliders.spec.ts
│   ├── javaScriptAlerts.spec.ts
│   ├── jQueryDropdown.spec.ts
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md

⚙️ Installation Steps
1️⃣ Install dependencies
npm install
2️⃣ Install Playwright browsers
npx playwright install
3️⃣ Run all tests
npx playwright test
4️⃣ Run tests in headed mode
npx playwright test --headed
5️⃣ View HTML report
npx playwright show-report
🧪 Example Test Flow (Ajax Form)
Open Home Page
Click “Ajax Form Submit”
Enter name and message
Click Submit
Verify processing message
Verify success message
Verify image appears

🧠 Key Concepts Used
Page Object Model (POM)
Locators separation
Action-based design
Playwright auto-waiting
Cross-browser testing

⚠️ Common Issues & Fixes
Timeout error → Use proper locator wait or Playwright auto-wait
Empty text issue → Use toContainText() instead of raw text
Element not found → Verify correct locator strategy


👨‍💻 Author
UI Automation Training Project
Built using Playwright + TypeScript