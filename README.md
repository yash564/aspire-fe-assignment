##  Overview

# 💳 Aspire Card Management App

This is a dynamic and interactive UI application based on the Aspire CSS challenge. It allows users to manage debit cards by viewing, adding, and freezing/unfreezing them. The UI is pixel-perfect to the original challenge design and built with modern technologies, best practices, and performance in mind.

[Deploy Vercel](https://aspire-fe-test-five.vercel.app)

## 🚀 Features

- ✅ Pixel-perfect implementation of the provided CSS challenge (Desktop)
- ✅ Add new cards dynamically via modal
- ✅ Freeze/Unfreeze functionality with visual feedback
- ✅ Carousel to display multiple cards
- ✅ Persistent card data using `localStorage`
- ✅ Fully typed with TypeScript
- ✅ Responsive (Mobile support, perfect fit for width 414px like Iphone 11)
- ✅ Optimized performance and clean code structure

---

## 🛠 Tech Stack

- **Framework**: React 18+ with Vite
- **Type Checking**: TypeScript
- **CSS Framework**: Tailwind CSS
- **State Management**: React Context API
- **UI Library**: Ant Design (for modal, tabs, layout)
- **Persistence**: Browser `localStorage`
- **Build Tool**: Vite
- **Deployment**: Vercel

---

## 🧩 Interactions

### ➕ Add New Card
- Click on the **New Card** button
- A modal opens where the user inputs the card name
- Form validates
- The system generates:
  - Random card number
  - Random cvv
  - Random expiration date
- The new card is added to the carousel

### ❄️ Freeze/Unfreeze Card
- Click **Freeze Card** to toggle frozen state
- Frozen cards are semi-transparent to indicate status
- Button label toggles to **Unfreeze Card**

---

## 🗃 Architecture

- `CardContext` provides global card state and actions
- Card data is stored in `localStorage` for persistence
- Dummy API functions simulate backend interactions
- Components are modular and organized under `/components/CardManagement`

---

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

##  Project Structure

```sh
└── aspire-fe-test/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── pnpm-lock.yaml
    ├── public
    │   ├── aspire.svg
    │   └── mockServiceWorker.js
    ├── src
    │   ├── App.css
    │   ├── App.tsx
    │   ├── antdConfig.ts
    │   ├── api
    │   ├── assets
    │   ├── components
    │   ├── contexts
    │   ├── index.css
    │   ├── main.tsx
    │   ├── mocks
    │   ├── types.ts
    │   ├── utils.ts
    │   └── vite-env.d.ts
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```

---
##  Getting Started

###  Prerequisites

Before getting started with aspire-fe-test, ensure your runtime environment meets the following requirements:

- **Programming Language:** TypeScript
- **Package Manager:** Pnpm


###  Installation

Install aspire-fe-test using one of the following methods:

**Build from source:**

1. Clone the aspire-fe-test repository:
```sh
❯ git clone https://github.com/hirusnov/aspire-fe-test
```

2. Navigate to the project directory:
```sh
❯ cd aspire-fe-test
```

3. Install the project dependencies:


**Using `pnpm`**

```sh
❯ pnpm install
```
###  Usage
Run aspire-fe-test using the following command:
**Using `pnpm`**

```sh
❯ pnpm run dev
```
