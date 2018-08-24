#  Neighborhood Map

## Google Front-End Web Developer Nanodegree Scholarship at Udacity. Project [8/8]

* [Project Overview](#project-overview)
* [How to run](#how-to-run)
* [Resources](#resources)

### Project Overview

Final project of Google Front-End Web Developer Nanodegree Scholarship at Udacity.

General purpose of this project was develop a single-page website  featuring a map of  a neighborhood, with such functionalities as: highlighted locations of interesting places, third-party data about those locations and various ways to browse the content.

#### Detailed Udacity's project requirements:
| Criteria | Meets Specifications |
| --- | --- |
| Interface Design | * All application components render on-screen in a responsive manner. * All application components are usable across modern desktop, tablet, and phone browsers. |
| Application Functionality | App includes a text input field or dropdown menu that filters the map markers and list items to locations matching the text input or selection. Filter function runs error-free. A list-view of location names is provided which displays all locations by default, and displays the filtered subset of locations when a filter is applied. Clicking a location on the list displays unique information about the location, and animates its associated map marker (e.g. bouncing, color change.). Map displays all location markers by default, and displays the filtered subset of location markers when a filter is applied. Clicking a marker displays unique information about a location somewhere on the page (modal, separate div, inside an infoWindow). |
| Asynchronous Data Usage |  Application utilizes the Google Maps API or another mapping system and at least one non-Google third-party API. All data requests are retrieved in an asynchronous manner using either the Fetch API or XMLHttpRequest. Data requests that fail are handled gracefully using common fallback techniques (i.e. AJAX error or fail methods). 'Gracefully' means the user isn’t left wondering why a component isn’t working. If an API doesn’t load there should be some visible indication on the page that it didn’t load.|
| Documentation | A README file is included detailing all steps required to successfully run the application. Comments are present and effectively explain longer code procedures. |
| Location Details Functionality | Functionality providing additional data about a location is provided and sourced from a 3rd party API. Information can be provided either in the marker’s infoWindow, or in an HTML element in the DOM (a sidebar, the list view, a modal, etc.) |
| Accessibility | Focus is appropriately managed allowing users to noticeably tab through each of the important elements of the page. Modal or interstitial windows appropriately lock focus. Elements on the page use the appropriate semantic elements. For those elements in which a semantic element is not available, appropriate ARIA roles are defined. All content-related images include appropriate alternate text that clearly describes the content of the image. |
| Offline Use | When available in the browser, the site uses a service worker to cache responses to requests for site assets. Visited pages are rendered when there is no network access. |
| Application Architecture | React code follows a reasonable component structure. State control is managed appropriately: event handlers are passed as props to child components, and state is managed by parent component functions when appropriate. |
|  | Application runs without console errors. |

[(Back to top)](#neighborhood-map)

### How to run

To run project locally:
* clone the repository  ``` ``` or download [zipped file](https://github.com/TomBisk/neighborhood-map/archive/master.zip);
* in terminal navigate to the project directory,
* run ``` npm install ``` to install all project dependencies
* run ``` npm start ``` to run the local server. Website will open automatically.

or visit [live version](https://tombisk.github.io/neighborhood-map/) of this project.

[(Back to top)](#neighborhood-map)

### Resources

The following resources have been used in this project:

* [React library](https://reactjs.org/)
* [Create React App](https://github.com/facebook/create-react-app)
* [Google Maps React](https://github.com/fullstackreact/google-maps-react)

API's
* [Google Maps](https://cloud.google.com/maps-platform/)
* [Foursquare](https://developer.foursquare.com/)

Icons
* [icons8](https://icons8.com/)

---
[(Back to top)](#neighborhood-map)