import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import AddRemovePage from './addRemovePage';

Given('I open the AddRemove page', function () {
    AddRemovePage.visit();
});

When('I click the Add Element button', () => {
    AddRemovePage.clickAdd();
});

When('I click the Delete Element button', () => {
    AddRemovePage.clickDelete();
});

Then('A new element is created', () => {
    AddRemovePage.isAdded();
});

Then('The new element is deleted', () => {
    AddRemovePage.isDeleted();
});
