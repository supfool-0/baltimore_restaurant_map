# Project Overview

## Baltimore Restaurant Map

This project maps all restaurant locations in Baltimore and allows the user the capability to search restaurants by neighborhood. Restaurant address locations are obtained from the [Baltimore Open Data API](https://data.baltimorecity.gov/Culture-Arts/Restaurants/k5ry-ef3g). These addresses are geocoded with [MapQuest Developer's Geocoding API](https://developer.mapquest.com/documentation/geocoding-api/)to latitude and longitude coordinates from their physical address, then mapped out using [Mapbox](https://www.mapbox.com/). This dataset has roughy 1,000 data points.

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
- Create a dropdown menu pulling from the Baltimore Open Data API that allows the user to select a neighboorhood
- Render page with points of every restaurant in selected neighborhood (geocoding involved)
- Zoom to location of interest
- If neighborhood doesn't have any restaurants, notifiy user

#### PostMVP  
- Add a button that takes user to another page 'Your restaurant?'
- New page allows user to add information about their restaurant. (picture, url to website...)
- Data is saved in local storage
- New data is rendered when restaurant is selected on map on home page

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Nov 9| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Nov 10| Project Approval | Complete
|Nov 12| Core Application Structure (HTML, CSS, etc.) | Complete
|Nov 13| Pseudocode / actual code | Complete
|Nov 13| MVP | Complete
|Nov 16| Post MVP | Incomplete
|Nov 17| Presentations | Incomplete

## Priority Matrix

[Time and Importance Matrix](https://wireframe.cc/pro/pp/2ae852fac392756)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| General HTML CSS | L | 2hrs| 3.5hrs | 3.5hrs |
| Loading Dropdown Menu| H | 1.5hrs| 2.5hrs | 2.5hrs |
| Learning to use MapBox and Geocodio| H | 3hrs| 2.5hrs | 2.5hrs |
| Rendering specific Neighborhood| H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 9hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
