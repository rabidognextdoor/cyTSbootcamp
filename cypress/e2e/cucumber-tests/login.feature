Feature: Login to application

  As a Valid user
  I want to log into the application

  Scenario: Valid login
    Given I open login page
    When I fill out username
    When I fill out password
    When I submit login
    Then I should see homepage
