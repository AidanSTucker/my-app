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

## Specific Functionalities:
All cars are a part of an array of object within my db.json file, a single car looks like this:

```  "cars": [
    {
      "id": 1,
      "name": "Camry",
      "make": "Toyota",
      "year": "2024",
      "type": "Sedan",
      "color": "Blue",
      "price": 10000,
      "img": "https://file.kelleybluebookimages.com/kbb/base/evox/CP/13080/2019-Toyota-Camry-front_13080_032_1833x720_2QQ_cropped.png"
    },
```

This array of cars is fetched from my json-server with a request to "https:www.localhost3000/cars". Cars will either have a status of "for sale" or "sold", and only cars for sale will be shown on the home page. Also, if a user sells a car, that POST request will automatically apply it's status as for sale, so once sold, it's added right to the home page.

I utilized programmatic navigation with the useNavigate & navigate hook from the React library. When user clicks on a cars purchase button, which is associated to it's id, the user is navigated to the purchase page (which is a hidden page they can only get to buy purchasing a car). Once payment is submitted, they are once again navigated to another page, the thank you page. This navigation looks like this:

```
  const handleSubmit = (e) => {
    e.preventDefault();   
    if (formData.name && formData.cardNumber && formData.zipCode) {
      navigate("/thankyou");
    } else {
      alert("Please fill out all fields");
    }
```
 In the code above, we first check that all of the formData valuse have been filled out properly, then if so navigate them to the thank you page, otherwise send an alert on the screen to tell them they need to continue to fill out the form first. This helps me not have to worry about what to do on screen after they submit a form, since it will just bring them to another page. 

 ## Total Time To Completion:
 On average I aimed to spend at least 2 hours a day on this project, and I got probably 85% of the code done in the first day, but most of my time was spent on figuring out very specific functionality. Such as how to change a cars status from for sale to sold, or posting a new car to the db.json server. All in all, this took me one week to complete. I utilized the flatiron resources, chatGPT, MDN, & LeetCode to guide me through this project!

 # ----> Thank You For Reading! <----