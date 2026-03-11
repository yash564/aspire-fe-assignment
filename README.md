<p align="center"><h1 align="center">ASPIRE-FE-TEST</h1></p>
<p align="center">
	<em><code>Aspire FE Test with ReactJs + Typescript</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/hirusnov/aspire-fe-test?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/hirusnov/aspire-fe-test?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/hirusnov/aspire-fe-test?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/hirusnov/aspire-fe-test?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

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


###  Project Index
<details open>
	<summary><b><code>ASPIRE-FE-TEST/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/tsconfig.node.json'>tsconfig.node.json</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/pnpm-lock.yaml'>pnpm-lock.yaml</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/tsconfig.app.json'>tsconfig.app.json</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/package.json'>package.json</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/vite.config.ts'>vite.config.ts</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/index.html'>index.html</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/eslint.config.js'>eslint.config.js</a></b></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- src Submodule -->
		<summary><b>src</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/src/types.ts'>types.ts</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/src/main.tsx'>main.tsx</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/src/index.css'>index.css</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/src/App.css'>App.css</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/src/App.tsx'>App.tsx</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/src/vite-env.d.ts'>vite-env.d.ts</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/src/utils.ts'>utils.ts</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/src/antdConfig.ts'>antdConfig.ts</a></b></td>
			</tr>
			</table>
			<details>
				<summary><b>contexts</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/src/contexts/CardContext.tsx'>CardContext.tsx</a></b></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/src/components/NewCardModal.tsx'>NewCardModal.tsx</a></b></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/src/components/Navigation.tsx'>Navigation.tsx</a></b></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/src/components/CollapseCustom.tsx'>CollapseCustom.tsx</a></b></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/src/components/Balance.tsx'>Balance.tsx</a></b></td>
					</tr>
					</table>
					<details>
						<summary><b>CardManagement</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/src/components/CardManagement/CardFunction.tsx'>CardFunction.tsx</a></b></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/src/components/CardManagement/Carousel.tsx'>Carousel.tsx</a></b></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/src/components/CardManagement/CardDesktop.tsx'>CardDesktop.tsx</a></b></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/src/components/CardManagement/CardDetails.tsx'>CardDetails.tsx</a></b></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/src/components/CardManagement/CardMobile.tsx'>CardMobile.tsx</a></b></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/src/components/CardManagement/CardTransaction.tsx'>CardTransaction.tsx</a></b></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>mocks</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/src/mocks/handlers.ts'>handlers.ts</a></b></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/src/mocks/browser.ts'>browser.ts</a></b></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>api</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/src/api/cardApi.ts'>cardApi.ts</a></b></td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- public Submodule -->
		<summary><b>public</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/hirusnov/aspire-fe-test/blob/master/public/mockServiceWorker.js'>mockServiceWorker.js</a></b></td>
			</tr>
			</table>
		</blockquote>
	</details>
</details>

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
