# 📘 UI Automation Training Project (Playwright + TypeScript)

## 📌 Overview

This project is a UI automation testing framework built using **Playwright** with **TypeScript**. It follows the **Page Object Model (POM)** design pattern to create clean, maintainable, reusable, and scalable automated test scripts.

---

## 🌐 Application Under Test

**LambdaTest Selenium Playground**

https://www.lambdatest.com/selenium-playground/

---

## 🎯 Modules Automated

The following UI components have been automated:

- ✅ Ajax Submit Form
- ✅ Bootstrap List Box
- ✅ Checkbox Demo
- ✅ Drag & Drop Sliders
- ✅ JavaScript Alerts
- ✅ jQuery Dropdown

---

## 🏗️ Framework Architecture

This project follows the **Page Object Model (POM)** architecture.

### **Locators Layer**
- Stores all web element locators.
- Keeps selectors separate from test logic.

### **Actions Layer**
- Contains reusable methods for interacting with the application.
- Encapsulates business logic.

### **Tests Layer**
- Contains test scenarios.
- Performs assertions using Playwright's `expect()`.

---

## 📁 Project Structure

```text
UITrainingAssignment/
│
├── pages/
│   ├── HomePage/
│   │   ├── homePage.locators.ts
│   │   └── homePage.actions.ts
│   │
│   ├── AjaxSubmitForm/
│   │   ├── ajaxSubmitForm.locators.ts
│   │   └── ajaxSubmitForm.actions.ts
│   │
│   ├── BootstrapListBox/
│   │   ├── bootstrapListBox.locators.ts
│   │   └── bootstrapListBox.actions.ts
│   │
│   ├── CheckboxDemo/
│   │   ├── checkboxDemo.locators.ts
│   │   └── checkboxDemo.actions.ts
│   │
│   ├── DragDropSliders/
│   │   ├── dragDropSliders.locators.ts
│   │   └── dragDropSliders.actions.ts
│   │
│   ├── JavaScriptAlerts/
│   │   ├── javaScriptAlerts.locators.ts
│   │   └── javaScriptAlerts.actions.ts
│   │
│   └── jQueryDropdown/
│       ├── jQueryDropdown.locators.ts
│       └── jQueryDropdown.actions.ts
│
├── tests/
│   ├── ajaxSubmitForm.spec.ts
│   ├── bootstrapListBox.spec.ts
│   ├── checkboxDemo.spec.ts
│   ├── dragDropSliders.spec.ts
│   ├── javaScriptAlerts.spec.ts
│   └── jQueryDropdown.spec.ts
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

# ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone <repository-url>
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Install Playwright browsers

```bash
npx playwright install
```

---

# ▶️ Running Tests

### Run all tests

```bash
npx playwright test
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

### Run a specific test

```bash
npx playwright test tests/ajaxSubmitForm.spec.ts
```

---

# 📊 View Test Report

Generate and open the HTML report:

```bash
npx playwright show-report
```

---

# 🧪 Example Test Flow

### Ajax Submit Form

- Open the LambdaTest Selenium Playground
- Navigate to **Ajax Submit Form**
- Enter Name
- Enter Message
- Click **Submit**
- Verify the processing message
- Verify the success message
- Verify the success image is displayed

---

# 🧠 Key Concepts Used

- Page Object Model (POM)
- TypeScript
- Playwright
- Reusable Actions
- Locator Separation
- Assertions
- Auto Waiting
- Cross-Browser Testing
- Maintainable Framework Design

---

# ⚠️ Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Timeout Error | Use Playwright auto-waiting or explicit waits where necessary |
| Empty Text Assertion | Use `toContainText()` instead of exact text comparison |
| Element Not Found | Verify locator strategy and ensure the element is visible |
| Slow UI Response | Wait for the page or element to become stable before interacting |

---

# 🛠️ Technologies Used

- Playwright
- TypeScript
- Node.js
- Visual Studio Code

---

# 👨‍💻 Author

**Muhammad Mudassir**

UI Automation Training Project built using **Playwright** and **TypeScript**.

---

## ⭐ Features

- ✔️ Page Object Model (POM)
- ✔️ Reusable Action Methods
- ✔️ Clean Project Structure
- ✔️ Cross-Browser Testing
- ✔️ Easy Maintenance
- ✔️ Scalable Test Framework
