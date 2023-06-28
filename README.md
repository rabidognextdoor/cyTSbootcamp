# cyTypeScriptBootcamp
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
[![npm version](https://badge.fury.io/js/cypress.svg)](https://www.npmjs.com/package/cypress)
[![npm version](https://badge.fury.io/js/npm.svg)](https://www.npmjs.com/package/npm)


Cypress automated testing project. Built using TypeScript.

## Setup

## Setup Notes
* New chainable commands can be declared in `/support/index.d.ts` and then built inside of `/support/commands.ts`.
* Use JSDocs to notate the custom commands created in those files
* in .feature files use the `@focus` tag about the scenario to essentially perform `.only`
* Steps can be found in `/support/step_defenitions/*` 

## Package notes

* prettier :white_check_mark:
* eslint :white_check_mark:
* eslint-cypress-plugin :white_check_mark:
* cucumber-BDD :white_check_mark:
* cucumber-preprocessor :white_check_mark:
* percy-io :white_check_mark: 
