import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ContextMenuPage from './contextMenuPage';

Given('I open the context menu page', () => {
    ContextMenuPage.visit();
});

When('I right click on the context menu button', () => {
    ContextMenuPage.clickContextButton();
});

Then('The context menu should appear', () => {
    ContextMenuPage.validateAlert();
});
