# Project Overview

## Baltimore Restaurant Map

This project maps all the restaurant locations in Baltimore and allows the user the capability to search restaurants by neighboorhood. Restaurant address locations are obtained from the [Baltimore Open Data API](https://data.baltimorecity.gov/Culture-Arts/Restaurants/k5ry-ef3g). These addresses will need to be geocoded with [Geocodio](https://www.geocod.io/) to latitude and longitude coordinates, then mapped out using [Mapbox](https://www.mapbox.com/). This dataset has roughy 1,000 data points.

## API and Data Sample

Specify the API you are using and include a link. Show us a snippet of JSON returned by your API so we know you can access it and get the info you need
```
{
name: "BERMUDA BAR",
zipcode: "21213",
neighborhood: "Broadway East",
councildistrict: "12",
policedistrict: "EASTERN",
location_1: {
human_address: "{"address": "1801 NORTH AVE", "city": "Baltimore", "state": "MD", "zip": ""}"
}
```

## Wireframes

[Baltimore Restaurant Website Wireframe Concept](https://wireframe.cc/pro/pp/1a29ea99d392747)

#### MVP 
- Create a dropdown menu pulling from the Baltimore Open Data api that allows the user to select a neighboorhood
- Initially render page with all restaurants on display in MapBox
	- This will include the use of geocodio to get coordinates
- Upon selection of neighboorhood render a new map with restaurants only in that neighboorhood

#### PostMVP  
- Add a button that takes user to another page 'Your restaurant?'
- New page allows user to add information about their restaurant. (picture, url to website...)
- Data is saved in local storage
- New data is rendered when restaurant is selected on map on home page

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Nov 9| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Nov 10| Project Approval | Incomplete
|Nov 12| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Nov 13| Pseudocode / actual code | Incomplete
|Nov 13| MVP | Incomplete
|Nov 16| Post MVP
|Nov 17| Presentations | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day. Students usally put in around 40+ hours into their project 1.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
