$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginTest.feature");
formatter.feature({
  "line": 1,
  "name": "CK application testing",
  "description": "",
  "id": "ck-application-testing",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "To verify Login function",
  "description": "",
  "id": "ck-application-testing;to-verify-login-function",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@SearchingClass"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User Clicks on Class tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters class code\"\u003cclasscode\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "ck-application-testing;to-verify-login-function;",
  "rows": [
    {
      "cells": [
        "classcode"
      ],
      "line": 16,
      "id": "ck-application-testing;to-verify-login-function;;1"
    },
    {
      "cells": [
        "Test123"
      ],
      "line": 17,
      "id": "ck-application-testing;to-verify-login-function;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "User Login to CK application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "CK application is Launch",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User enters Credentials to LogIn",
  "rows": [
    {
      "cells": [
        "First Name",
        "Last Name"
      ],
      "line": 6
    },
    {
      "cells": [
        "chatterjeeamit42@gmail.com",
        "Testing123$"
      ],
      "line": 7
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User verify tile of the page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition_LoginPageTest.ck_application_is_Launch()"
});
formatter.result({
  "duration": 15362679000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_LoginPageTest.user_enters_Credentials_to_LogIn(DataTable)"
});
formatter.result({
  "duration": 18949671400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_LoginPageTest.user_verify_tile_of_the_page()"
});
formatter.result({
  "duration": 3034999100,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "To verify Login function",
  "description": "",
  "id": "ck-application-testing;to-verify-login-function;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@SearchingClass"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User Clicks on Class tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters class code\"Test123\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition_LoginPageTest.user_Clicks_on_Class_tab()"
});
formatter.result({
  "duration": 4910347500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test123",
      "offset": 23
    }
  ],
  "location": "StepDefinition_LoginPageTest.user_enters_class_code(String)"
});
formatter.result({
  "duration": 10540798900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "To Create New Quiz",
  "description": "",
  "id": "ck-application-testing;to-create-new-quiz",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@CreatingQuiz"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User Clicks on Library tab",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User click on Create new dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User enters on Quiz option",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User enters valid QuizTitle \"\u003cQuizTitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "ck-application-testing;to-create-new-quiz;",
  "rows": [
    {
      "cells": [
        "QuizTitle"
      ],
      "line": 27,
      "id": "ck-application-testing;to-create-new-quiz;;1"
    },
    {
      "cells": [
        "QATestOne"
      ],
      "line": 28,
      "id": "ck-application-testing;to-create-new-quiz;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "User Login to CK application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "CK application is Launch",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User enters Credentials to LogIn",
  "rows": [
    {
      "cells": [
        "First Name",
        "Last Name"
      ],
      "line": 6
    },
    {
      "cells": [
        "chatterjeeamit42@gmail.com",
        "Testing123$"
      ],
      "line": 7
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User verify tile of the page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition_LoginPageTest.ck_application_is_Launch()"
});
formatter.result({
  "duration": 15389947000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_LoginPageTest.user_enters_Credentials_to_LogIn(DataTable)"
});
formatter.result({
  "duration": 19199702700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_LoginPageTest.user_verify_tile_of_the_page()"
});
formatter.result({
  "duration": 3048998200,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "To Create New Quiz",
  "description": "",
  "id": "ck-application-testing;to-create-new-quiz;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@CreatingQuiz"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User Clicks on Library tab",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User click on Create new dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User enters on Quiz option",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User enters valid QuizTitle \"QATestOne\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition_LoginPageTest.user_Clicks_on_Library_tab()"
});
formatter.result({
  "duration": 5091109800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_LoginPageTest.user_click_on_Create_new_dropdown()"
});
formatter.result({
  "duration": 3211965900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_LoginPageTest.user_enters_on_Quiz_option()"
});
formatter.result({
  "duration": 4539558800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QATestOne",
      "offset": 29
    }
  ],
  "location": "StepDefinition_LoginPageTest.user_enters_valid_QuizTitle(String)"
});
formatter.result({
  "duration": 10752313500,
  "status": "passed"
});
});