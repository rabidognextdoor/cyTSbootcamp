import { defineConfig } from 'cypress';
import mochawesome from 'cypress-mochawesome-reporter/plugin';
import cucumber from 'cypress-cucumber-preprocessor';

export default defineConfig({
    projectId: 'x5f4v6',
    video: false,
    chromeWebSecurity: false,
    waitForAnimations: true,
    env: {
        screenshotsFolder: './cypress/snapshots/actual',
        trashAssetsBeforeRuns: true,
        url: 'http://zero.webappsecurity.com/',
        apiUrl: 'https://reqres.in/api/',
    },
    e2e: {
        reporter: 'cypress-mochawesome-reporter',
        defaultCommandTimeout: 5000,
        pageLoadTimeout: 10000,
        setupNodeEvents(on, config) {
            on('file:preprocessor', cucumber());
            mochawesome(on);
        },
    },
});
