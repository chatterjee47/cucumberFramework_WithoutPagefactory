Feature: CK application testing

  Background: User Login to CK application
    When CK application is Launch
    And  User enters Credentials to LogIn
      | First Name                 | Last Name            |
      | chatterjeeamit42@gmail.com | Testing123$          |
    Then User verify tile of the page

  @SearchingClass
  Scenario Outline: To verify Login function
    When User Clicks on Class tab
    And  User enters class code"<classcode>"

    Examples: 
      | classcode   |
      | Test123     |

  @CreatingQuiz
  Scenario Outline: To Create New Quiz
    When User Clicks on Library tab
    And  User click on Create new dropdown
    Then User enters on Quiz option
    Then User enters valid QuizTitle "<QuizTitle>"

    Examples:
      | QuizTitle     |
      | QATestOne |