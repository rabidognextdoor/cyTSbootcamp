Feature: Login to application

  As an unauthorized user
  I should not be able to navigate into a page protected by auth
  as an Invalid user
  I cannot log into the application
  As a Valid user
  I want to log into the application

  Scenario: As an Unauthorized user
    Given I navigate to a page protected by authorization
    Then I should be redirected with a 302 status code
    Then I see "/login.html" in the url
    And I see "Zero - Log in" in the title

  Scenario: As an Invalid user
    Given I open login page
    And I want to wait for 2000 milliseconds
    And I see "Zero - Log in" in the title
    And I see "/login" in the url
    When I fill username with "invalid-username"
    And I fill password with "invalid-password"
    And I submit login
    Then I should see error message

  Scenario: As a Valid user
    Given I open login page
    When I fill username with "username"
    When I fill password with "password"
    When I submit login
    Then I should see account summary
