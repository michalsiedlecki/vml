Feature: Forgot Password Flow

  Scenario: User requests password reset and verifies email
    Given I navigate to the forgot password page
    When I accept cookies
    And I fill email
    And I click the reset password link
    Then I should see the message
    Given I navigate to gmail
    When I enter my Gmail email
    And I click Next
    And I enter my Gmail password
    And I click Next
    And I open the email with subject change password
    And I click change password button in the email
    Then I should be redirected to a URL containing "https://www.mediaexpert.pl/reset/QktW4MlkR-V2adQnZeugrHbgC7-EdsVh_gCsE2zrJo0?utm_source=Mail-potwierdzenie&utm_medium=e-mail"
