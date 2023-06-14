import { defineConfig } from 'cypress';

export default defineConfig({
    video: false,
    e2e: {
        reporter: 'cypress-mochawesome-reporter',
        defaultCommandTimeout: 5000,
        supportFile: 'cypress/support/app.d.ts',
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
        },
    },
});
