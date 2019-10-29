# Models

## Firebase

There are three models stored in Firebase. The three models reside on the server side.

### IngredientModel

This Component is a database model which stores all ingredient data.

-   Ingredient data includes the following:
    -   Ingredient Item id - A unique and non-null id for every ingredient stored in the database
    -   Ingredient Name - Name of the ingredient
    -   Short description - Description about the ingredient. When a new one is suggested by the user, the administrator will examine the ingredient by this description.
    -   Location Item id - Location item id of the reported location associated with the ingredient, with corresponding location information as follows:
        -   Vote counter - The total number of votes (both upvote and downvote) on the location for this ingredient
        -   User id - The user id of the person who suggested the location
        -   Downvote counter - The total number of downvote on the location for this ingredient
        -   Date first reported - Date that the location for this ingredient was first reported
    -   The AlgoliaController, OneItemController and VotingController communicate with the model. They communicate the following:
        -   The AlgoliaController can get the relevant ingredient item id and their vote counter from the IngredientModel
        -   The OneItemController can import new ingredient into the IngredientModel and generate its own ingredient item id
        -   The OneItemController can get relevant ingredient information from IngredientModel according to the given Ingredient Item id.
        -   The VotingController can update the voting information in IngredientModel (including: vote counter, downvote counter, User id and Date first reported).

### UserModel

This Component is a database model which stores all user data.

-   User data is stored as follows:
    -   User id - A unique and non-null id for every user that has signed in the Bonito application
    -   User Name - User’s first name
-   Only the LoginController communicate with the model. It communicates the following:
    -   The LoginController can verify user’s login information through FirebaseAuthentication
    -   The LoginController can import new user’s name into UserModel and generate its own User id

### LocationModel

This Component is a database model which stores all location data.

-   Location data is stored as follows:
    -   Location Item id - A unique and non-null id for every location that has been reported by the users
    -   Location Name - Name of the store that has been reported
    -   Address in the Google Places library’s standard - The detailed address for the store, also it has to be in the Google Places library’s standard
    -   Geocoding - For displaying in the map
        -   Latitude coordinates
        -   Longitude coordinates
-   Only the LocationsController communicate with the model. It communicates the following:
    -   The LocationsController can get relevant location information from LocationModel according to the given Location Item id.
    -   The LocationsController can import new location data into LocationModel

# Views

## NavBar

This component is a view that displays the navigation bar of Bonito.

-   The navigation elements in the NavBar include:
    -   The logo (which is also a link that directs the user to the homepage)
    -   The “Find Ingredients” link
    -   The “About” link
    -   A fourth link that reads either “Sign In” if the user is NOT signed in or “Signed in as \[username\]” if the user IS signed in.
        -   Links should redirect users to their respective pages
-   This view resides only on the client
-   Only the React Router Dom communicates with this view. It communicates the following:
    -   The NavBar can tell the React Router Dom if the user clicked the logo or any of these links

## Modal (this component will be reused for all modal instances)

This component is a view that displays a modal that overlays the rest of the page content.

-   The view resides entirely on the client.
-   This component does not communicate with any other components, however the modal’s content may display other component views.

## HomePage

This component is a view that serves as the homepage of Bonito. It contains the SearchBarView and SearchResultsView subcomponents.

### SearchBarView

-   Takes in text and passes that text to the SearchController component.
    -   Pressing the return key or clicking the magnifying glass view subcomponent within the SearchBarView connects the SearchBarView to thewhich causes it to display the ResultsPage view component.

### SearchResultsView

SearchResultsView is a view subcomponent that takes in information from the SearchController and displays up to six results from the SearchController as a clickable list dropping down below the SearchBarView.

-   Clicking one of the results will then connect to theto display the SpecingPage view component specifically for the selected ingredient.
-   If the SearchController returns no results, the SearchResultsView will display a link that can be clicked to open up the NewIngredientView component that is a subcategory of Modal components.

#### NewIngredientView

NewIngredientView is a type of Modal component that acts as a form that the user can fill out and submit, which connects to the NewIngredientsController and gives it all of the text submitted by the user.

-   Once the form is successfully submitted, the NewIngredientView component changes to display the SuccessfulSubmit view component which is still within the Modal but shows that the user submitted an ingredient.
-   The view resides on the client.

#### SuccessfulSubmit

SuccessfulSubmit is a view component which is still within the same Modal but shows that the user submitted an ingredient.

## ResultsPage

This component is a view that displays when pressing the return key or clicking the magnifying glass view subcomponent within the SearchBarView.

-   The ResultsPage component displays the names of all of the results that are returned from the AlgoliaController in a scrolling list.
-   Clicking on one of the components will redirect to that ingredient’s SpecingPage.
-   The view resides on the client.

## SpecingPage (specific ingredient page)

This component is a view that displays information about a specifically selected ingredient.

-   Specific ingredient information includes:
    -   “Ingredient” label
    -   Ingredient name
    -   Text, “Know where to buy this? Report a new location”
        -   “Report a new location” is an anchor link which opens a Modal with NewLocationForm on-click.
    -   Separator line
-   Additionally, if there is one or more location reported, this component will display the following subcomponents:
    -   LocationsList
    -   LocationInfo
    -   UpvoteButton
    -   DownvoteButton
    -   Embedded Map
-   If there are no location(s) reported, this component will display the text, “Phooey. There are no known locations yet.”

### NewLocationForm

This component is a view that displays the form allowing users to input necessary information to report a new ingredient location.

-   The view resides on the client, but it communicates with controllers on the server.
-   The MapsController and PlacesController can ask the LocationModel to take user input and determine relevant location data to display.
    LocationsList
-   This component is a view that displays the list of location entries for an ingredient.
-   The view resides on the client, but the list of location entries to display is determined by the IngredientModel
-   Each location entry contains the following views as subcomponents:
    -   UpvoteButton
    -   DownvoteButton
    -   LocationInfo
-   This view communicates with the IngredientModel, which contains the vote counters used to determine the order in which to display location entries.
    -   The LocationsController can ask the IngredientModel to determine the order in which to display location entries.

### UpvoteButton

This component is a view that displays a button which allows users to vote “confirmed” on a location entry.

-   The view resides on the client, but communicates with components on the server.
-   This view communicates with IngredientModel, which contains a count of all upvotes (“confirmed” votes)
    -   The VotingController can ask the IngredientModel (within Firestore) for the upvote count.

### DownvoteButton

This component is a view that displays a button which allows users to vote “didn’t find” on a location entry.

-   The view resides on the client, but communicates with components on the server.
-   This view communicates with IngredientModel, which contains a count of all downvotes (“didn't find” votes)
    -   The VotingController can ask the IngredientModel (within Firestore) for the downvote count.

### LocationInfo

This component is a view that displays the information associated with a location entry.

-   Location entry information includes:
    -   Location name
    -   Location address
    -   Date reported
    -   First and last name of the user who reported the location
    -   Ranking number of that location
-   This view resides on the client, but communicates with components on the server.
-   This view communicates with IngredientModel, which contains all of the information associated with a location entry.
    -   The LocationsController can ask the Ingredient model for the location information.

### EmbeddedMap

This component is a view that displays an embedded map with pins showing an ingredient’s reported locations

-   This view resides on the client, but communicates with components on the server.
-   This view communicates with the MapsController to display the suggested locations for an ingredient with the lat and long coordinates provided by the LocationModel.

### LoginPage

This component is a view that contains a button labeled “Sign in with Google”

-   Resides only on the client
-   Only the LoginController communicates with the view. It communicates the following:
    -   The LoginController can ask the LoginPage for a username and password

## AboutPage

This component is a view that contains the TeamCard objects for each team member and includes a text description of the project.

-   Includes a NavBar.
-   Resides only on the client
-   Doesn’t communicate with any controllers

## TeamCard

This component is a view that that contains a bio for a team member and a photo of that team member

-   Resides only on the client
-   Doesn’t communicate with any controllers

# Controllers

## AlgoliaController (Firestore → AlgoliaSearchAPI)

This controller communicates with the AlgoliaSearchAPI to determine when to query the NutritionixAPI.

-   This component resides on the client-side and interacts with server-side APIs
-   AlgoliaController communicates with the following models and views:
    -   AlgoliaController will grab inputted data from the SearchBarView and query the NutritionixAPI.
    -   AlgoliaController will store data from the NutritionixAPI into the IngredientModel and send it to the ResultsPage.

## SearchController (HomePage → Firestore)

This controller captures user input from the SearchBarView and sends it to Algolia’s InstantSearch component.

-   This controller resides on the client side and is implicit in the SearchBarView.

## LoginController (LoginView → FirebaseAuth)

This controller captures formatted data from the LoginView and communicates back and forth with Firestore.

-   This controller resides on the client-side.
-   LoginController will verify the login information from LoginView is valid and correct with Firestore.
-   If the login information is invalid, LoginController will return an error message, indicating login was unsuccessful, to the LoginView.
-   If login is successful, the LoginController will redirect the user to the HomePage.

## VotingController

This controller keeps track of vote count for each location in a specific ingredients page.

-   VotingController takes in a batch of location ID(s) from the UpvoteButton and DownvoteButton.
-   This controller resides on the client-side, it will communicate with Firestore to find the corresponding vote for each given location and update the vote count.

## LocationsController

The LocationsController will communicate with the OneItemController to grab an ingredient ID and return the attached locations from Firestore.

-   The controller resides on the client-side.
-   LocationsController queries all location(s) attached to the given ingredient ID and returns the batch of location(s) to the OneItemController.

## OneItemController

Receives an ingredientID from the ResultsPage. It sends the ingredient ID to the LocationsController and captures the batch of location(s) data.

-   Also queries the database (Firestore) for the relevant IngredientModel.
-   OneItemController resides on the client-side.
-   The controller will send all LocationModel(s) and IngredientModel to the SpecingPage.

## MapsController

This controller interacts with the Google Maps API to display relevant map data for the EmbeddedMap and the NewLocationForm.

-   The controller resides on the client-side and interacts with server-side APIs.

## PlacesController

This controller interacts with the Google Places API to locate all locations within the Seattle Area.

-   The controller interacts with the NewLocationForm to grab user input and display relevant locations (the algorithm is determined by the API).
-   Inputted locations not in the Seattle Area will return an error stating that the location can not be submitted.
