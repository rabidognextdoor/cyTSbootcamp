import { defineConfig } from 'cypress';
import mochawesome from 'cypress-mochawesome-reporter/plugin';

export default defineConfig({
    projectId: 'x5f4v6',
    video: true,
    chromeWebSecurity: false,
    waitForAnimations: true,
    env: {
        screenshotsFolder: './cypress/snapshots/actual',
        trashAssetsBeforeRuns: true,
        url: 'http://zero.webappsecurity.com/',
    },
    e2e: {
        reporter: 'cypress-mochawesome-reporter',
        defaultCommandTimeout: 5000,
        setupNodeEvents(on, config) {
            mochawesome(on);
        },
    },
});
