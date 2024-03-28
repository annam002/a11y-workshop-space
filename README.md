# Accessibility Workshop: Space

## Quickstart

```bash
git clone https://github.com/annam002/a11y-workshop-space.git
cd a11y-workshop-space
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

To run the end-to-end tests locally, first install [Playwright's](https://playwright.dev/docs/) headless browser.

```bash
npx playwright install
```

Automated accessibility testing is performed by the [axe-core Playwright plugin ](https://playwright.dev/docs/accessibility-testing).

Make sure that the application is running, then you can start the e2e-Tests as follows:

```bash
npm run test:e2e
```
