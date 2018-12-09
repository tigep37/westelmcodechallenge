# westelmcodechallenge

For this project I am using NodeJS on the back end with Express for my web framework and EJS to display my view. Given the following JSON to consume -  

```bash
https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json
```

The details page lists all products found in 'GROUPS' and renders them on the page.  Each item is displayed along with the hero image, name, highest price in the PriceRange list and messages if any.  Clicking on the hero image will display a modal.  There is an event listener which binds a click event to any element with a class of 'modal-open'.  This displays the main image and any alternate images.  Clicking on the alternate images will replace the larger image with the selected image.  There is a close button that sets the modal display to none.

For the image carosel I did use a jQuery library that functioned perfectly using only the slim build of jQuery as I did not want to add the extra overhead of the entire library.

The page uses Bootstrap 4 for styling and responsiveness.  It uses a single column until you hit small (480px) where it goes to two columns and finally 3 columns at medium (768px).  It is also using some flex-box features built into Bootstrap 4 for alignment of items.

To run the application you'll need Node installed.  Simply run 'node app.js' from the main directory to start the app.  The app is set to run on port 3000/IP 127.0.0.1 but this can be changed in app.js if needed.

I have built in some simple Mocha and Chai unit tests that are located in the tests/test.js file.  To run them run npm test from the command line.
