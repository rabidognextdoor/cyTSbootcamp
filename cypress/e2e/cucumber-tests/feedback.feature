Feature: Send Feedback

  As a customer
  I can send my Feedback via form

  Scenario: Submit Feedback Form
    Given I open feedback page
    When I fill feedback form
    And I click on send button
    Then I see "/sendFeedback.html" in the url
