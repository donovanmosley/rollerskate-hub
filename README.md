# rollerskate-hub

![rollerskate-hub logo](https://github.com/donovanmosley/rollerskate-hub/blob/master/node-js-playlist/public/assets/inline-group.jpg?raw=true)

Rollerskate Hub is a rollerskating enthusiasts dream website!  It hosts a number of features including:

* An ejs timestamp for displaying current date and time
* An inline skating Maintenance Guide displaying dynamic json topics, images, and descriptions.  Using a drop down selector users can view do-it-yourself categories and start learning more about how to properly maintain their skating equipment.   
* A Skaters Adventure Todo List. Users can add and delete essential todo items for preparing for their next adventure ride.
* A Yelp API skating business resource list.  This search engine accepts a zip code and optional mile radius selector that displays skating businesses with their associated information (name, address, contact number, and rating).  Equipped with this knowledge users can make better decisions on where to spend their time doing what they love, skating! 
* A contact form, with accessibility features, and form email validation.  All the input data is stored locally on a json file (writeMe.json).  Upon completing the form users will receive an email with the inputed data confirming who is being contact, which department, and what email address will be replied to.
* Responsive design and Media Queries

Rollerstake Hub is a project that satisfies Code Louisville's requirements for the September 2020 cohort.  Some of the technical features I included while building the app are:

* Reading and parsing an external file (such as JSON or CSV) into your application and display some data from that in my app - manual.json data to the Maintenance Guide form
* Creating a form and saving the values (on click of Submit button) to an external file - Contact form input to writeMe.json
* Creating an array, dictionary or list, populating it with multiple values, retrieving at least one value, and using or display it in your application - Maintenance Guide library
* Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX) - Yelp api business data for skating businesses
* Creating a web server with at least one route and connecting to it from my application using ExpressJS and working with node.js - Built app using express, node.js, nodemon, ejs, body-parser, and jsonfile

Special requirements for running the rollerskate-hub code includes: 

* Installing the following dependencies: express, jsonfile, ejs, body-parser
* Running this app on http://localhost:3000/

From the repository page on GitHub, click the **Clone** or download green button, and in the **“Clone with HTTPs”** section, copy the URL for the *rollerskate-hub* repository. Next, on your local machine, open your bash shell and change the current working directory to the location where you would like to clone the repository. Once you have navigated to the directory where you would like to put the repository, use: git clone https://github.com/donovanmosley/rollerskate-hub 

This site is maintained and contributed by Donovan Mosley


