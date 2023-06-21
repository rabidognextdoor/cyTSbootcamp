import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import FeedbackPage from './feedbackPage';

Given('I open feedback page', () => {
    FeedbackPage.visit();
});

When('I fill feedback form', () => {
    FeedbackPage.fillFeedbackForm();
});

Then('I click on send button', () => {
    FeedbackPage.submitForm();
});
