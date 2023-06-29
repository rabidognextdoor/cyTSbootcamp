import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import CheckboxesPage from './checkboxesPage';

Given('I open the checkboxes page', () => {
    CheckboxesPage.visit();
});

When('I click checkbox 1', () => {
    CheckboxesPage.checkBox1();
});
When('I click checkbox 2', () => {
    CheckboxesPage.checkBox2();
});

Then('Checkbox 1 should be checked', () => {
    CheckboxesPage.validateCheck();
});

Then('Checkbox 2 should be unchecked', () => {
    CheckboxesPage.validateUnChecked();
});
