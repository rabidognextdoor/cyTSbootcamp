import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import FeedbackPage from './feedbackPage';

Given('I open feedback page', () => {
    FeedbackPage.visit();
});

When('I fill feedback form', () => {
    FeedbackPage.fillFeedbackForm();
});
When('I fill {string} in the name field', (name: string) => {
    FeedbackPage.fillName(name);
});
When('I fill {string} in the email field', (email: string) => {
    FeedbackPage.fillEmail(email);
});
When('I fill {string} in the subject field', (subject: string) => {
    FeedbackPage.fillSubject(subject);
});
When('I fill {string} in the message field', (message: string) => {
    FeedbackPage.fillMessage(message);
});

Then('I click on send button', () => {
    FeedbackPage.submitForm();
});
