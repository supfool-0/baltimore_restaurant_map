# Project Overview

## Baltimore Restaurant Map

This project maps all restaurant locations in Baltimore and allows the user the capability to search restaurants by neighborhood. Restaurant address locations are obtained from the [Baltimore Open Data API](https://data.baltimorecity.gov/Culture-Arts/Restaurants/k5ry-ef3g). These addresses are geocoded with [MapQuest Developer's Geocoding API](https://developer.mapquest.com/documentation/geocoding-api/) to latitude and longitude coordinates from their physical address, then mapped out using [Mapbox](https://www.mapbox.com/). This dataset has roughy 1,000 data points.

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
| Loading Dropdown Menu with Neighborhoods| H | 1.5hrs| 2.5hrs | 2.5hrs |
| Getting all address data from Baltimore's Open Data API| H | 3hrs| 2.5hrs | 2.5hrs |
| Learning to use ~~Geocodio~~ MapQuest Developer's Geocoding API| H | 4hrs| 2.5hrs | 2.5hrs |
| Generated url's to call on MapQuest's Developer's Geocoding API| H | 4hrs| 2.5hrs | 2.5hrs |
| Used Postman to make url batch calls| H | 1 hrs| 2.5hrs | 2.5hrs |
| Wasted time generating geoJSON files and reading MapBox documentation| H | 7hrs| 2.5hrs | 2.5hrs |
| Rendering specific neighborhood with js| H | 3hrs| 2.5hrs | 2.5hrs |
| Notification if no restaurants are in the area| H | 2hrs| 2.5hrs | 2.5hrs |
| Zooming to specific selected neighborhood| H | 2 hrs| 2.5hrs | 2.5hrs |
| Labeling restaurants with Mapbox functionality| H | 2.5 hrs| 2.5hrs | 2.5hrs |
| Final styling| H | 2.5 hrs| 2.5hrs | 2.5hrs |
| Total | H | 9hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
 // looping through each batch call to get lat and lng data 
    let k = 0;
    let checker = 0;
    batchArr.forEach(batch =>{

        let limit = 100;
        const batchOBJ = JSON.parse(batch);

        if(k===9){limit = 59};

        for(let i=0;i<limit;i++){
    
            let address = `${batchOBJ.results[i].locations[0].street} BALTIMORE MD`;
            address = address.toUpperCase(); // formatting address 
            let lat = batchOBJ.results[i].locations[0].displayLatLng.lat;
            let lng = batchOBJ.results[i].locations[0].displayLatLng.lng;

            // some coming back undefined --> data cleanup needed
            if (dict[address]){ 

                let info = dict[address].split(",");
                if(info[1] === neighborhood){

                    checker = 1;

                    // setting marker
                    let marker = new mapboxgl.Marker()
                        .setLngLat([lng, lat])
                        .setPopup(new mapboxgl.Popup({offset: 50 })
                            .setText(`${info[0]}-${address}`))
                        .addTo(map);
                    currentMarkers.push(marker);
                }
            }
        }
    k++;
    });
```

## Change Log
Had to use MapQuest's Developer Geocoding API instead of Geocodio, because Geocodio isn't a free service.
