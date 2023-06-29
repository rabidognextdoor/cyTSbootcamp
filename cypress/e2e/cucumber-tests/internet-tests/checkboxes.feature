Feature: Checkboxes on the-internet.herokuapp

  I should be able to check a checkbox

  I should be able to uncheck a checkbox

  Scenario: Validate Check
    Given I open the checkboxes page
    When I click checkbox 1
    Then Checkbox 1 should be checked

  Scenario: Validate Uncheck
    Given I open the checkboxes page
    When I click checkbox 2
    Then Checkbox 2 should be unchecked
