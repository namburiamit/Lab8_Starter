# Lab 8 - Starter


**1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.**

- I would set my automated tests for the Recioe project **within a Github action that runs whenever code is pushed** 
  - This would take care of testing after any change I make my repository/project and would either fail or pass depending on my current changes to the code.
  - This would ensure incremental testing and keeping track of testing on GitHub instead of locally testing them after every change.
  - If any tests are failing, I would make changes to fix my code and can test it out if it works or not.

**2.Would you use an end to end test to check if a function is returning the correct output? (yes/no)**
   
- No.
  - End to end (E2E) testing is for testing UI and not a specific function's output.

**3.Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.**

- No.
  - We wouldn't use unit testing to test message as it is dependant on the user or the person messaging. 
  - Hence, there is no specific parameter for the unit test to test on.

**4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.**

- Yes.
  - We would use a unit test to test out max message length as it doesn't depend on the context of the message itself.
  - It would just require the length of message and a binary output of True/False based on the length. (more than 80 characters: error; else: no error)
 

