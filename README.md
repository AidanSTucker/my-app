### Car Purchase Web App:

## My App:
Car buying & selling app. Users can view our selection of new cars on the home page, wherein each car shows its make, model, color, body type, price, and an image of it. The user can filter by a price range to only see cars that fit their budget. When the user finds a car they want, they click the purchase button, which will navigate them to the purchase page along with the car they clicked on being shown below (so they can make sure they are buying the right car). Then after submitting their payment in the expected format, they will be taken to a thank you page. After selling their car, that car will be added to our on sale car inventory as well. There are also 2 other tabs for the site:

1. Car Affordability Page: Users can enter their yearly salary to see what price range they can comfortably afford.
2. Contact Us Page: Provides user with contact information to get in touch.

## Component Hierarchy:

ReadMe -> Explains code
NavBar -> Navigation
NavBarCSS -> Navigation Styling

App.js -> Core Component holding state

Home.js -> Home page with page title, instructions for buying a car, and the filter to show the cars below.

CarAffordability.js -> Page to let users input their yearly income and show them what price range they should shop in. Calculates 30% of their yearly income and adds $5,000 before and after that number as a range.

SellYourCar.js -> let's the user input the details of the car they are selling, then once submitted, that car will be added to the list of our on sale cars.

Purchase.js -> Page for when a user clicks on a car from the Home page, to let them purchase a car. (uses car id when clicked on)

ThankYou.js -> After car purchase, thank them for their business and tell them basic car care. (Not included in NavBar)

Db.json -> contains all cars data (update seeds.json with new cars, then run “npm run seed” to update db.json file).
Index.js -> Backend data
Routes.js -> provide routing functionality for all components
ErrorPage.js -> conditional component to render an error page on incorrect url paths.
