Car Purchase Web App:

My Plan:
Car buying app: Users can search a specific car name or filter by car category, color, or drive type. Filtering will show below all the cars available and show them “for sale”. If no filter is applied, all cars will be shown. If they click on the link to a car it will take them to a purchase car page, which will show the specific car they clicked on, along with a form to put in payment info. If the payment info is in the right format, then the car status will change from “for sale” to sold, then the will be programmatically navigated to a thank you page

Component Hierarchy:

ReadMe -> Explains code
NavBar -> Navigation
NavBarCSS -> Navigation Styling

App.js -> Core Component holding state
Home.js -> Home page with page title, instructions for buying a car, and the filter to show the cars below.
CarAffordability.js -> Page to let users input their monthly income and show them what price range they should shop in.
PurchasePage.js -> Page for when a user clicks on a car from the Home page, to let them purchase a car. (uses car id when clicked on)
ThankYouPage.js -> After car purchase, thank them for their business and tell them basic car care. (Not included in NavBar)

Db.json -> contains all cars data (update seeds.json with new cars, then run “npm run seed” to update db.json file).
Index.js -> Backend data
Routes.js -> provide routing functionality for all components
