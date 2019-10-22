# Bonito Requirements

## Universal componenents (navbar, page layout, design guidelines, etc.)


### Page layout
1. For screens wider than 1336px, page content* will be contained to the central 1136px of the screen width.
    1. The margins (the space to the left and right of the central 1136px) will not contain any page content*.
    
2. For screens narrower than 1337px, the left and right page margins will be 6% of the screen width.
    1. The margins will not contain any page content*.

3. For all screen widths, the top and bottom page margins will be 48px.
    1. The margins will not contain any page content*.

4. Page headers should always be positioned at the top of the page content area, and all other content should be arranged beneath the header.


*definition of “page content”: the information contained in the website, which includes everything besides background colors and imagery that only have a decorative purpose.

### Navbar
1. The navbar will be visible on every page on the website, and will be fully interactive as long as a modal is not open.

2. The navbar will always be fixed to the top of the page, even when the user scrolls down the page.

3. The navbar will have a height of 136px and a width of 100% of the screen width.

4. All content (defined as elements with a functional purpose) in the navbar will be vertically centered.
    1. The Bonito logo will be left-aligned within the navbar’s content area.
    2. The primary links will be right-aligned and vertically centered within the navbar’s content area, in the order: 1) “Find Ingredients, 2) “About”, and 3) “Sign In” OR “Signed in as [user’s first name]”
        1. Each successive link will be spaced 60px apart from the previous link.
5. If the user is signed into Bonito via Google, the right-most link in the navbar will be “Signed in as \[user’s first name\]”, followed by a downward-facing chevron-shaped icon.
    1. Once this link is clicked, a dropdown will appear 12px below the link.
        1. The downward-facing chevron-shaped icon will be replaced with an upward-facing chevron-shaped icon.
        2. The dropdown will be 100% of the width of the link, and the height will be 40px
        3. There will be a link, “Sign Out” vertically and horizontally centered in the dropdown. Clicking the “Sign Out” link will sign the user out of Bonito.
    2. Clicking this link again will collapse the dropdown such that it is no longer visible or interactive.
    3. “\[user’s first name\]” will be replaced with the user’s first name, according to the first name associated with their Google account. The font weight will be 600.

6. If the user is not signed into Bonito via Google, the right-most link in the navbar will be “Sign In”.
    1. Clicking the “Sign In” link will redirect the user to the “Sign In” page.

7. Clicking the “Find Ingredients” or “About” link will redirect the user to the “Find Ingredients” page or the “About” page, respectively.

8. Clicking the logo image will redirect the user to the home page, which is also the “Find Ingredient” page.

### Design guidelines
1. Typography
    1. All text on the Bonito website will meet the following standards, as defined by the Web Content Accessibility Guidelines (WCAG):
        1. The color contrast between all text types and its background will always be 4.5:1 contrast ratio or higher.
        2. For continuous text that spans more than two lines, the line height will be 1.5 or higher.
    1. The only typeface used on the website will be Open Sans, however the font weight may change depending on the context.
    2. There will be no unusual font or text treatments. This specifically includes clipping, distortion, and animation.
    3. All text must fall within the size range of 12pt to 84pt.

2. Colors
    1. The color contrast between any text and its respective background will always be 4.5:1 contrast ratio or higher.

### Repeated Components
1. Forms & Buttons
    1. Upon clicking or tapping a button, there will always be visual feedback:
        1. All buttons will have a visually differentiated active, inactive, and focused state.
        2. If error(s) occur as a result of clicking or tapping a button, there will be a descriptive textual error message within close proximity (less than 50px away) to the button, AND if resolving the error(s) requires user input or interaction with content that is farther than 50px away from the button, there will be an additional context-specific error message within 50px of that content.
    2. All form fields will have a descriptive aria label as well as a textual label that is visible regardless of the form field’s state.
    3. Clicking or tapping any non-inactive form field will enable the user to modify that form field’s input.
    4. For location form fields (an address or place), input that overflows the form field’s bounds will be denoted with an ellipses. Text will not scroll in either horizontal direction.
        1. For all other single-lined form fields, text that overflows the form field’s bounds will scroll horizontally.
    5. For multi-lined form fields, text that overflows the form field’s bounds will scroll vertically.

2. Links
    1. All text anchor links will be 500 font weight and underlined.
    2. Hovering over a link will change the cursor to a pointer. Removing the cursor from the link will change the cursor back to the default.

3. Modals
    1. The entire page outside of the modal area will be covered with a 30% opacity black overlay.
    2. All content outside of the modal area will be inactive.
    3. Modals will only be closed by clicking or tapping the “x” icon in the top right corner of the modal window, or by clicking or tapping a button that redirects the user.
    4. All modal content will be contained within the modal area.
    5. The modal’s height cannot extend beyond the screen’s width or height. If the modal content extends beyond the screen’s width or height, it will overflow by allowing the user to scroll vertically and/or horizontally respective to which axis the content overflows.
    6. Closing the modal will cause the modal area and its content to disappear and become non-interactive. The black overlay will also disappear, and content outside of the modal will once again be fully interactive.

4. Images
    1. All images will maintain their original, source file aspect ratio; they will not be distorted disproportionately, however, they may be clipped.
    2. No images will be enlarged past their original, source file resolution.
    3. For site loading and rendering purposes, images rendered on the Bonito website cannot have a file size larger than 1 megabyte, and the dimensions cannot have a width and/or height greater than 4000px.
    4. Image file types can only be .PNG, .GIF, .JPEG, and/or .SVG.


## Log in process
1. Users can sign in using their Google account by clicking the “Log in with Google” button on the “Sign In” page.

2. If the Google account log in fails, the error message “We were unable to get your profile information from Google. Please try again.” will appear right below the “Log in with Google” button

3. Once a user has signed in, the text should show ‘Signed in as \[user’s first name\]’ in the Navbar.

4. If the user is not already signed in to Bonito, users can navigate to the “Sign In” page by clicking the “Sign in” link on the navbar.

5. When user is not signed in (guest users), they cannot vote on ingredient locations, suggest new ingredients, or report ingredient locations. 


## Search process
1. When there is nothing typed in the search box, there will be placeholder text reading ‘Bonito’ in the search box. Once the user inputs something in the search box, the placeholder text will disappear and be replaced with the user’s input.

2. While the user is typing in the search box, the question mark character will always follow immediately after the last character typed in the input field.

3. If the query exceeds the length of the input field, the text in the search field will scroll to the left.

4. While the user is typing in the search box, the top six search results will be provided under the input field. If there are less than six relevant results, all of the search results will appear below the input field. The order that the relevant search results appear in will be listed in descending order by which ingredients have the total number of “confirmed” votes, the highest “confirmed” voted item being first.

5. The user can click on any of the six provided search results to navigate to that ingredient’s page.

6. While the input field is active and the user has inputted a search query, the user can either press the “Enter” key or click the Search icon on the right side of the input field to be redirected to the search results page.

7. At the top of the content area on the search results page, the user’s search query will be displayed.

8. Below the search query, all matching results will be listed in descending order of total “confirmed” votes. If the list of search results extends beyond the bottom of the screen, there will be a scrollbar, and the list items will overflow vertically.

9. If the user is not satisfied with the search results, they can start a new search by clicking the “Find ingredients” link on the navbar.

10. Clicking on any of the listed search results redirects the user to that ingredient’s page.

11. If there are no search results matching the user’s query, there will not be search result page, either. Instead, a message ‘No results found’ will appear under the input field.

12. Below the “No results found” message, there will be another message, “Try again or suggest a new ingredient”. “Suggest a new ingredient” will be a hyperlink. Clicking the link will open a modal on the same page. The modal will contain a form to submit a new ingredient suggestion (see the next section for more details).


## Suggest a new ingredient
1. Suggesting a new ingredient to be added to the database is displayed in the form of a modal that displays on top of the search bar.

2. “Suggest a new ingredient” will be the header at the top of the modal.

3. There will be two input areas in the form.
    1. The name textbox has “Ingredient name” on top of it left-aligned and in bold weight. This textbox is a single line of input of any kind of text. Any text that is written in the textbox will be in a normal weight. This textbox must be populated before the “Submit” button may be clicked. There is a limit of 150 characters for a submission.
    2. The comments textbox has “Comments (optional)” on top of it left-aligned and in bold weight. This textbox is a full box that grows with input, with a limit of 1000 characters. Any text that is written in the textbox will be in a normal weight. This textbox does not have to be populated at all before the “Submit” button may be clicked.

4. Below the comments textbox will be a button labeled “Submit” that must be clicked for the user inputs to a firebase table that must be manually reviewed by one of the team members before being added to the ingredients database.

5. If the user does not fill in the name textbox but clicks submit, the submission will not be added to the table and an alert icon in the form of an exclamation point within a circle will appear to the right of the “Ingredient name” title with “This field cannot be left blank” to its right. “Please resolve the errors above” will also display below the submit button.

6. If the user does fill in the ingredient name and presses submit, the header will stay the same but the form will then change to an icon of a checkmark in a circle, vertically and horizontally centered within the modal, with the following text horizontally centered below it: “‘\[Ingredient name\]’ has been submitted for approval” with the ingredient name being bolded.
Once the submission has occurred and the user’s inputs are placed into the firebase table, one of the team members will review the submission. If they approve the submission, they will add the submission to the existing database.


## Ingredient page
1. The ingredient page will list all the user-reported locations will be displayed beneath the page header. The list will span 7/12 the width of the content area. If there are no reported locations, the message “Phooey. There are no known locations yet” will appear there instead. The locations will be listed in order of most “confirmed” votes. If there is a tie, they will be listed in alphabetical order. If there are so many reported locations that it exceeds the window height, there will be a scroll bar, and results will overflow vertically.

2. Each reported location as presented on the ingredient page will display the following information.
    1. The location’s position in the list of locations (the first location will have a “1.”, the second will have a “2.”, etc.), followed by the location name.
    2. The exact address of the location, which is standardized using Google Maps algorithms
    3. The number of “Confirmed” votes, labelled as “Confirmed”
    4. The number of “Didn’t Find” votes, labelled as “Didn’t Find”
    5. The name of the user who reported the location and the date the location was reported, in the format “Reported by \[user’s first and last name\] on \[Month\] \[day\], \[year\]”

3. If a reported location is reported as ‘DIDN’T FIND’ in the five most recent votes, there will be an alert at the top of that location’s list entry indicating ‘The 5 most recent voters reported that they didn’t find this ingredient here.’

4. If the user attempts to vote on an ingredient location while not signed in, an alert message will appear at the top of that location’s list entry (or, if there is already a different alert displayed for that location, this alert message will appear below the pre-existing alert message): “Please sign in with Google to share whether you found this ingredient here.”
    1. “Sign in with Google” will be an anchor link. Clicking it will redirect the user to the “Sign In” page.

5. There will be a square map that is 5/12 the width of the content area. It will be located to the right of the list of locations. Each listed location will be indicated on the map with a marker at the address’s location on the map. The markers will be placed using address data inputted to the Google Maps API, and its behavior would match the Google Maps API default.

6. Clicking the “Report a new location” link below the ingredient name on the “Ingredient Page” will open a modal, where the user can submit a new location for that ingredient.


## Voting process
1. If a user attempts to vote “Confirmed” or “Didn’t Find” for an entry before first signing in, an error message will appear above the first location: “Please sign in with Google to share whether you found this ingredient here.” Clicking the “sign in with Google” link will take the user to the Sign In page.

2. To vote “Confirmed” or “Didn’t Find,” a user clicks on the button that indicates their intended option that is positioned to the left of the store name on the ingredient page.

3. “Confirmed” and “Didn’t Find” buttons must indicate how many people voted for each respective option in the button. So button should read e.g. “3 Confirmed” if 3 people had confirmed that the indicated ingredient had been found in that location.

4. Once a user selects either “Confirmed” or “Didn’t Find,” the button will darken in color to indicate that it has been selected. The count of the selected option will also increase by one.

5. To remove a previously cast vote, a user can click the darkened button and it will restore to its standard color and the number of votes for the previously selected option will decrease by one.

6. Users can only vote for “Confirmed” OR “Didn’t Find”- cannot have a registered vote for both at the same time.


## Report a new location
1. The popout window will read “Report a new \[ingredient name\] location” with a search box underneath. The search box will have a button to the right of it that reads “Submit.” Before the user starts typing in it, the search box will read “Store name or address…”

2. If the user clicks the X icon in the top right corner of the modal, it will close the modal.

3. Once the user begins typing the name of a location, the “Store name or address” text will disappear and search results will begin to populate in a list below. The top 5 search results will appear as the user types the location name or address. If there are less than 5 results, all search results will appear. If there are no search results, the text “No results found. Please try again.” will appear.

4. The search result order is in accordance with the Google Places library’s standard for priority.

5. Clicking one of the search results will populate the input field with the location’s full name and address information.

6. If the full address information is included in the search bar, clicking the “Submit” button will report that as the new location for the ingredient. If the full address information is not included in the search bar, nothing will be submitted when the user clicks the “Submit” button.

7. Once a location is submitted, the location will appear on the ingredient screen with 1 confirmation that the food has been found there and a pin will be dropped on the map indicating the new location.


## About page
1. The About Us page will have “About Us” as its header, formatted following the Universal Components section guidelines.

2. Below the header will be all five team members’ photos in a row, with each photo being a 200px by 200px square.

3. Below each member’s photo with will be their first names in bold typeface weight.

4. Below each member’s first name will also be their job title within the project in defaultly weighted text. Each member’s name and title will be horizontally centrally aligned to their picture.

5. A description of Bonito as a product and the problem that it is trying to solve will be displayed in a left-aligned paragraph in standard type after one line break below each member’s job titles.


## Data & Architecture (ingredient data, user data, etc)
1. Ingredient data with attached locations must be stored in firebase (firestore) and be publicly accessible to guest users and registered users upon submitting a search query. The data displayed to users will be defined by the search query results.

2. Ingredient data not found in the database will be HTTP requested from NutritionixAPI when going to the results page.

3. Voting on a location will increase the respective counter(s) inside the database, and the updated count will be visibly reflected on the website within 5 seconds.

4. Removing a vote on a location will decrease the respective counter(s) inside the database, and the updated count will be visibly reflected on the website within 5 seconds.

5. Suggested locations for an ingredient must have an address that has Seattle as the city and Washington as the state. This will be confirmed using the Google Maps API.

6. Website’s front end will be built using HTML, CSS, JavaScript, React.js.

7. The website’s backend technology consists of Google’s Firebase and Algolia.

8. NutritionixAPI will be used for ingredients data, and Google Maps API will be used for map data.

9. Suggested ingredients will be stored as a temporary key pair in Firebase/Firestore to be reviewed by an administrator (the bonito team). This key pair is only accessible to administrators.

10. Every time an ingredient is clicked on by a user in the search results section, if the ingredient was not in the database, it will be stored onto the database.

11. An ingredient item will consist of these key value pairs, only the short description and location id(s) are optional:
    1. Item Id
    2. Short description
    3. Location id(s)
        1. Vote counter
        2. User id (of the person who suggested the location)
        3. Downvote counter
    4. Item name
    5. Algolia id

12. Full text search for ingredients will be handled by Algolia, the suggested ingredients will update dynamically as Algolia returns the first six relevant ingredient names. The order the relevant search results appear in will be ordered by the total number of “confirmed” votes, the highest voted item being first.

13. When moving to the results page, query Algolia for all relevant ingredients, add any ingredients not found 

14. User data will be managed by firebase through Google authentication.

15. If no ingredients are found from a query (both from NutritionixAPI and our database) return a NotFoundException. The client side will display a textual error message stating that no relevant ingredients were found.

16. Navigating to a new page by clicking on a link within the Bonito website (excluding the login) will dynamically change the page instead of completely refreshing the website.

17. Uses Google’s Map JavaScript API to display all locations for an ingredient.

18. Each marker on the map, on selection, will display Google’s default description and information (as determined by the Google Maps API).

19. Uses Google’s Places library to display suggested results dynamically as the user is searching for locations in the suggest a new location modal.
