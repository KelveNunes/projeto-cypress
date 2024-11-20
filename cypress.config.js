const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://26.168.227.136:8080', // Altere para o URL do seu site
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});