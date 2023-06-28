Feature: Basic auth on the-internet.herokuapp

  Login using appended URL

  Login using Auth headers

  Scenario: Login using appended URL
    When I visit basic auth page
    Then Login should be valid

  Scenario: Login using headers
    When I visit basic auth page using headers
    Then Login should be valid
