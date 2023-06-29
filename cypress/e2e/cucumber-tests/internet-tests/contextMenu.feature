Feature: Context menu on the-internet.herokuapp

  Right clicking the context button should display the context menu

  Scenario: Validate the context menu
    Given I open the context menu page
    When I right click on the context menu button
    Then The context menu should appear
