import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/specs/**/*.cy.ts',
    setupNodeEvents() {

    },
  },
});
