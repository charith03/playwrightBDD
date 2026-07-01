Feature: QA Demo Site

  @reverse
  Scenario: Extract and validate reversed labels
    Given I open the demo form
    When I extract all labels
    And I reverse the labels
    And I sort the labels
    And I re-extract, reverse, and sort the labels again
    Then both label lists should match


  @skip
  @filter
  Scenario: Process and validate subject names
    Given I open the demo site for subjects.
    When I fill the subjects input box with multiple characters.
    And I extract all subject names.
    And I filter subjects with multiple words.
    And I split all subject names into words.
    Then the length of subjects list will compare with length of 2 word subject list.


  @Datepicker
  Scenario: Extract and validate datepicker years
    Given I open the demo site url
    When I extract all years from the datepicker
    And I sort them in ascending order
    And I check for the duplicates
    Then a random year should be selected successfully


  @radiobutton
  Scenario: Validate radio button labels
    Given I open the demosite of radio buttons
    And I extract gender labels into a list
    And I convert them to uppercase
    Then both lists should have the same count


  @hobbies
  Scenario: Extract and validate hobbies
    Given I open the hobbies page
    When I extract all hobby labels
    And I select the first 2 hobbies
    And I combine the selected hobbies
    And I fill the form with required details
    Then the submitted hobbies should match the selected hobbies


  @truncate
  Scenario: Validate truncated modal text
    Given I open the demo site Truncate
    When I click a button and capture modal text
    And I close the modal and extract the first 10 words
    Then the truncated text should match the UI text


  @accordion
  Scenario: Reverse and validate accordion titles
    Given I open the demo site accordion titles
    When I extract accordion titles
    And I reverse the titles
    And I re-extract and reverse the titles again
    Then all accordions should be collapsed


  @alerts
  Scenario: Capture and validate alert message
    Given I open the demo site alerts
    Then I click a random alert button and print the alert message

  @skip
  @progressBar
  Scenario: Extract and validate progress bar values
    Given I open the demo site progressbar
    When I start and stop the progress bar at intervals
    And I remove percentage symbols
    And I check for duplicate values
    And I filter values greater than or equal to 50
    And I count extratced values
    Then the filtered and original counts should be validated