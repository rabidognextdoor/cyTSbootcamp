Feature: Send Feedback

  As a customer
  I can send my Feedback via form

  Scenario: Submit Feedback Form
    Given I open feedback page
    When I fill feedback form
    And I click on send button
    Then I see "/sendFeedback.html" in the url

  Scenario: Submit Parameterized Feedback
    Given I open feedback page
    When I fill "Real name" in the name field
    And I fill "real@example.com" in the email field
    And I fill "Important Test" in the subject field
    And I fill "Test Message" in the message field
    Then I click on send button
    And I see "/sendFeedback.html" in the url
