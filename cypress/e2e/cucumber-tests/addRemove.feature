Feature: Add/Remove elements feature

  Click a button to add an element

  Click a button to remove an element

  Scenario: To add an element
    Given I open the AddRemove page
    When I click the Add Element button
    Then A new element is created
    When I click the Delete Element button
    Then The new element is deleted
