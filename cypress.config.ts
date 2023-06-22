import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';

async function setupNodeEvents(
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
    await addCucumberPreprocessorPlugin(on, config);

    on(
        'file:preprocessor',
        createBundler({
            plugins: [createEsbuildPlugin(config)],
        })
    );
    return config;
}

export default defineConfig({
    projectId: 'x5f4v6',
    video: true,
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
        specPattern: ['**/*.feature', '**/*.cy.ts'],
        excludeSpecPattern: '/cypress/support/*',
        defaultCommandTimeout: 5000,
        pageLoadTimeout: 10000,
        setupNodeEvents,
    },
});
