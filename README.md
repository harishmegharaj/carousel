# Carousel
Displays images in a carousel.

## Features
* Set static images in the Modeler
* Retrieve images from the database via XPath
* Retrieve images via a microflow
* Navigate to the next or the previous image
* Execute a microflow or open a page when an image is clicked
* Swipe through the images on mobile devices

## Dependencies
Mendix 7.1

## Demo project
http://carouselwidget.mxapps.io

## Usage
The widget requires a context.
 ### Data source: Static
 - On the Data source option of the Data source tab, select the static option if its not already selected by default.
 - On the Static images option of the same tab, click new to add static images from the modeller and also configure an onclick action.
 - For the on click options, configure only one of the two (either calling a microflow or a page).
 - Configuring both options will only trigger the microflow.
 
 ### Data source: XPath
 - On the Data source option of the Data source tab, select the XPath option.
 - Specify the image entity and the XPath constraint (if any).
 - In the Behaviour tab, you can configure on click behaviour i.e Do nothing, call microflow or show page.
 - For options call microflow and show page, a microflow or page must be specified respectively.
 
 ### Data source: Microflow
  - On the Data source option of the Data source tab, select the Microflow option.
  - Specify the image entity and the microflow to retrieve the carousel images from (both required).
  - Refer to the XPath section for configuring click behaviour.
  
  For the microflow and XPath data source options, specifying a URL attribute will make the value of the URL attribute the priority. 

## Issues
Please report issues at https://github.com/mendixlabs/carousel/issues.

## Disclaimer
Status: In development

This widget should not be used in a production environment.
No guarantees are given that this works or keeps working, until it is officially released.
