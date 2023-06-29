import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import DropdownPage from './dropdownPage';

Given('I open the dropdown page', () => {
    DropdownPage.visit();
});

When('I select the first dropdown option', () => {
    DropdownPage.selectOption1();
});

When('I select the second dropdown option', () => {
    DropdownPage.selectOption2();
});

Then('Option 1 should be selected', () => {
    DropdownPage.validateOption1();
});

Then('Option 2 should be selected', () => {
    DropdownPage.validateOption2();
});
