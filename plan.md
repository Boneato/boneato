# Homework 5: Plan

## 1) How will you coordinate your work?
1. Who will coordinate the work?
    * Lauren and Anthony
2. What will their project management practices be?
    * Kanban (Trello)
        * Using this to continue keeping track of our tasks, grooming the backlog and prioritizing stories
3. Will conduct use daily or weekly meetings?
    * Continue to meet:
        * Digitally on Sundays at 1pm
        * In Bloedel on Tuesdays at 1:30pm
    * Daily standups on Slack to keep track of progress/let each other know if help is needed or work is being blocked
        * In the morning to report what a team member accomplished yesterday and what they plan to accomplish today
    * Weekly progress check-ins with Lauren & Anthony to determine if tasks need to be redistributed or timelines need to be altered
        * If something unexpected happens before the weekly check-in, Lauren & Anthony will restructure timeline / tasks ad-hoc
4. What will the agendas of meetings be?
    * Example meeting agenda template:
    ![meeting agenda template](https://i.imgur.com/EaxDhHW.png "meeting agenda template")

## 2) What tools will you use to communicate?

* **Private Slack channel** “c-llab” on the INFO 442 Autumn 2019 workspace for informal, text-based communication
    * Possible alternatives: Messenger, Google Hangouts, Microsoft Teams, Discord, and many others
    * Slack works best for our team because all team members are familiar with the software, and because other class communications are already centralized on Slack.
* **Zoom** for formal, remote voice call and screen-share meetings
    * Possible alternatives: Discord, Google Hangouts, Skype, and many others
    * Zoom works best for our team because we have verified that voice, screenshare, and video works for all team members. Additionally, all team members are familiar with the software.
* **Trello** for prioritizing and tracking task progress and deadlines
    * Possible alternatives: Asana, Jira, and many others
    * Trello works best for our team because team members have previous experience using the software. Additionally, Trello is free to use, and sufficiently robust (but not too robust) to keep track of deadlines and tasks.
* **Google Drive** for informal file sharing and storing administrative and draft documents
    * Possible alternatives: Dropbox, OneDrive, GitHub, and many others
    * Google Drive works best for our team because all team members already use Google storage and document creation services. Additionally, Google Drive is free to use and we can collaborate on documents in real-time.
* **GitHub** for formal file sharing
    * Possible alternatives: Dropbox, OneDrive, Google Drive, and many others
    * GitHub works best for our team because all team members are familiar with it, and because the course guidelines already require the use of GitHub for version control and file sharing.

## 3) Who will own each component in your architecture?
* Component visuals - Laura
    * This includes attaching class names to objects and writing CSS to create visual consistency with the design guidelines and design specifications.
* Navbar - Lauren
* Modal - Anthony
    * NewIngredientView - Anthony
    * SuccessfulSubmit - Anthony
    * NewLocationForm - Anthony
* HomePage - Anthony
    * SearchBarView - Anthony
        * NewIngredientsController - Brian
        * SearchController (InstantSearch -> SearchResultsView) - Brian
        * AlgoliaController - Brian
    * SearchResultsView - Anthony
* ResultsPage - Lauren
* AboutPage - Lauren
    * TeamCard - Lauren
* SpecingPage
    * LocationsList -Cate
        * LocationInfo
        * UpvoteButton
        * DownvoteButton
    * EmbeddedMap - Cate
    * VotingController - Cate
    * LocationsController - Cate
    * OneItemController - Cate
    * MapsController - Cate
    * PlacesController - Cate
* LoginPage - Anthony
    * LoginController - Brian
* Models - Brian - done
* Set up database - Brian

## 4) What is your timeline?

### Sprint schedule:
![sprint schedule](https://i.imgur.com/OazYEBp.png "sprint schedule")

### 1. **November 13: All visual components present**

All visual components will be present, however there will not be any styles applied. Event handlers and other back-end interactivity will not yet be implemented (unless convenient to do so). For example, on the home page, there will be a plain input field and a search button making up the search form. Links and text will be present according to the mockups on Figma. The text displayed is not final, and may change as the requirements change.

React Router pages will be connected, as long as there are no dependencies attached to the link. For example, because the submit search button/link is dependent on user input, which is a back-end functionality, that link will be substituted with a placeholder. However, links on the top navbar will be functional, and they will route to their respective destination pages.

Dependent components such as the search results page, modals, and modal content will be built, however because they will not have any interactivity, they will not be rendered as they will be in the final application.

**Reasoning/justification:** We chose this as our first milestone, because simply populating text and creating shell components effectively creates a “code wireframe”. This way, it will simplify the process of applying CSS styling and JavaScript interactivity by mitigating the risk of duplicated or otherwise redundant component parts.
### 2. **November 20: All visual components styled (front-end complete)**

All components built in the previous milestone will have CSS styles applied to them. This includes attaching necessary class names and writing corresponding CSS.

As a result, the web application should look exactly as specified on the Figma mockups, however there will be no interactivity, except for React Router links between pages accessible from the top navbar.

Components that require interactivity in order to be displayed (such as modals and modal content; search results; and ingredient pages) will be styled, however they will not be rendered as they will be in the final application.

**Reasoning/justification:** We chose this as our second milestone because, in the process of applying styles, we may need to make minor adjustments to the component parts. These changes are easier to make when there are no event handlers attached to them.

### 3. **November 27: All components functional (back-end complete)**

All components built and styled in the previous milestone will have event handlers, API calls, and other back-end functionality attached.

As a result, the web application should look and function exactly as specified in the design specification and requirements document.

**Reasoning/justification:** We chose this as our third milestone because we believe that will will be easiest and most efficient to apply event handlers and other back-end functionality once the front-end has been completed. This way, it will be easier to test proper functionality as we go, and we will not have to worry about code structure complications (for example, applying styles in order to visually test whether a feature is functioning as expected) arising from taking a back-end first approach.

### 4. **December 1: First stage testing completed - major bugs addressed**

The first testing stage aims to catch any major bugs and to address them as they are reported. While the focus is on finding obvious or major bugs, minor bugs will also be recorded and triaged as part of this milestone.

To accomplish this, we will write and conduct performance tests, and we will identify and test common application use cases through manual testing.

 All major bugs will have been resolved, and minor bugs will have been prioritized and prepared for resolution in the next milestone.

**Reasoning/justification:** One week prior to this milestone, the front-end and back-end of our application will be complete, so the next step is to begin testing to find and address bugs. We chose to focus first on major bugs because those bugs are most likely to be encountered when the class and instructors test our application.

### 5. **December 4: Second stage testing completed - minor bugs addressed**

The second testing stage aims to address minor bugs that were identified and triaged in the first testing stage. Additionally, we will be conducting usability tests with friends, family, and colleagues to potentially identify and address any further bugs or usability issues.

Code will be finalized and packaged for submission.
    
**Reasoning/justification:** We chose to have two testing milestones because it is critical that our application behaves and performs correctly, since that is what our team grade is based on. By spending two weeks on testing, we expect our application to work across many (ideally, all) use cases.

### 6. **December 5: Project submitted**

The project will be submitted to Canvas.

**Reasoning/justification:** By the December 4 milestone, all code will already be finalized, and the application will have undergone thorough testing. The only remaining step is to submit the project for review.


## 5) How will you verify that you've met your requirements?

### For all of the requirements, how will your verifications be integrated into your process? Will you run automated tests after every build? Before every commit? When will you conduct inspections and who will be involved?

**For each requirement, our policy will be as follows:** Before each commit, verification will be conducted for all components affected by the commit. Verification will be conducted by the individual or group of individuals who modified code contained within the commit. Additionally, all requirements (that we have chosen to verify) will be verified again during the second testing phase (milestone #5). Verifications at this stage will involve all team members.
___

### For each requirement in your requirements document, detail how you will verify it, and if you won't verify it, justify why you won't.
* *If you propose to write tests, what exact tests will you conduct and what will count as each test passing?*
* *If you propose to conduct reviews or inspections, how will you analyze the code?*
* *If you write a proof, what property will you prove?*
* *If you conduct a review or inspection, what aspects of the code will you inspect to verify the requirement is met?*

**_*Please see the requirements document "requirements.md" to view all requirements._**

~

**Page layout*** - We will not be verifying any of these features. This is because the appearance of our webpage is not essential to the functionality of the application.

**Navbar*** - Manual integration testing. Passing the test means that all of these specifications are met.

**Design guidelines*** - We will not be verifying any of these features. This is because the colors and typography is not essential to the functionality of the application, and we have decided not to prioritize accessibility.

**Repeated Components** - We will be conducting integration testing for each requirement. Tests will pass if the components involved behave according to the specification.

**Log in process*** - Unit test. Will pass the test if user can successfully log in by following the process detailed below, and is indicated successful by displaying “Signed in as [user’s first name]” in place of the “Sign in” button. Will not pass if the error message displays, though this is still correct functionality.

**Search process*** - Unit testing, including a stress test which will include inputs of all types (varying lengths, varying characters, etc). Will pass the test if search output is in the expected order.

**Suggest a new ingredient** - Unless noted otherwise, we will conduct integration tests for each requirement to verify that components behave according to the specification. Tests will pass if components involved behave according to the specification.
* Suggesting a new ingredient to be added to the database is displayed in the form of a modal that displays on top of the search bar.
    * **We will conduct unit tests** to verify that input is received on the back-end. Tests will pass if the input received matches the input submitted.
* “Suggest a new ingredient” will be the header at the top of the modal.
* There will be two input areas in the form.
    * The name textbox has “Ingredient name” on top of it left-aligned and in bold weight. This textbox is a single line of input of any kind of text. Any text that is written in the textbox will be in a normal weight. This textbox must be populated before the “Submit” button may be clicked. There is a limit of 150 characters for a submission.
    * The comments textbox has “Comments (optional)” on top of it left-aligned and in bold weight. This textbox is a full box that grows with input, with a limit of 1000 characters. Any text that is written in the textbox will be in a normal weight. This textbox does not have to be populated at all before the “Submit” button may be clicked.
* Below the comments textbox will be a button labeled “Submit” that must be clicked for the user inputs to a firebase table that must be manually reviewed by one of the team members before being added to the ingredients database.
* If the user does not fill in the name textbox but clicks submit, the submission will not be added to the table and an alert icon in the form of an exclamation point within a circle will appear to the right of the “Ingredient name” title with “This field cannot be left blank” to its right. “Please resolve the errors above” will also display below the submit button.
* If the user does fill in the ingredient name and presses submit, the header will stay the same but the form will then change to an icon of a checkmark in a circle, vertically and horizontally centered within the modal, with the following text horizontally centered below it: “‘[Ingredient name]’ has been submitted for approval” with the ingredient name being bolded. Once the submission has occurred and the user’s inputs are placed into the firebase table, one of the team members will review the submission. If they approve the submission, they will add the submission to the existing database.

**Ingredient page*** - Manual integration testing. Will pass if page behaves according to specifications.

**About page*** - We will not be verifying any of these features. This is because the appearance of our webpage is not essential to the functionality of the application.

**Voting process*** - Both unit testing and integration testing. We will conduct unit tests to verify that input is received on the back-end for each of these voting inputs, with particular focus on stress-testing. Upvoting, un-upvoting, downvoting, and un-downvoting all need to be tested in varying permutations over and over again to ensure that the back-end holds up given many different inputs, and we will conduct thorough integration tests to verify that components behave according to the specification. Tests will pass if components involved behave according to the specification.

**Report a new location*** - Both unit testing and integration testing. Unit tests will be used to verify new location is stored in the firebase. Integration tests will pass when all front end functionality behaves according to specifications.


**Data & Architecture (ingredient data, user data, etc)*** - Verification will be done indirectly through the integration tests with the view components, therefore we will not have to actually do any further testing on our data and architecture.


**_*Please see the requirements document "requirements.md" to view all requirements._**


