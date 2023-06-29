Feature: Dropdowns on the-internet.herokuapp

  Users should be able to select options 1 and 2 from the dropdown

  Scenario: Select Option 1
    Given I open the dropdown page
    When I select the first dropdown option
    Then Option 1 should be selected

  Scenario: Select Option 2
    Given I open the dropdown page
    When I select the second dropdown option
    Then Option 2 should be selected
