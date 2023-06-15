import { defineConfig } from 'cypress';
import mochawesome from 'cypress-mochawesome-reporter/plugin';

export default defineConfig({
    video: false,
    e2e: {
        reporter: 'cypress-mochawesome-reporter',
        defaultCommandTimeout: 5000,
        setupNodeEvents(on, config) {
            mochawesome(on);
        },
    },
});
