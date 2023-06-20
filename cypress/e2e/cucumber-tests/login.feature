Feature: Login to application

  As a Valid user
  I want to log into the application

  Scenario: Valid login
    Given I open login page
    When I fill username with "username"
    When I fill password with "password"
    When I submit login
    Then I should see homepage
