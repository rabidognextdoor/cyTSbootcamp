import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import BasicAuthPage from './basicAuthPage';

Given('I visit basic auth page', () => {
    BasicAuthPage.visitAppended();
});
Given('I visit basic auth page using headers', () => {
    BasicAuthPage.visitHeader();
});
Then('Login should be valid', () => {
    BasicAuthPage.validateLogin();
});
