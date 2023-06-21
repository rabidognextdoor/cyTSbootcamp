Feature: Login to application

  as an Invalid user
  I cannot log into the application
  As a Valid user
  I want to log into the application

  Scenario: Invalid login
    Given I open login page
    And I want to wait for 2000 milliseconds
    And I see "Zero - Log in" in the title
    And I see "/login" in the url
    When I fill username with "invalid-username"
    And I fill password with "invalid-password"
    And I submit login
    Then I should see error message

  Scenario: Valid login
    Given I open login page
    When I fill username with "username"
    When I fill password with "password"
    When I submit login
    Then I should see homepage
