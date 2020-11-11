const geoEndpoint = `https://data.baltimorecity.gov/resource/k5ry-ef3g.json`;



// get addresses of restaurants and put in dict format
const getAddresses = async (endp) => {

    let restaurantDict = new Object();

    await axios.get(endp)

        .then((result)=>{
            result.data.forEach( restaurant => {

                let address = JSON.parse(restaurant.location_1.human_address);
                let formattedAddy = `${address.address}, ${address.city} ${address.state}`;
                restaurantDict[restaurant.name] = formattedAddy;
            })
            
            batchCallGeocodeio(restaurantDict);
            // makeJSON(restaurantDict);

         }) .catch ((error)=>{
            console.log(`Error: ${error}`);
        })
}

getAddresses(geoEndpoint);



// batch calling geocode.io with dict obj of addresses
const batchCallGeocodeio = async (dict) => {

    const YOUR_API_KEY = `f4b4fc94749253fffff5fc9a54b44ab7a7cf777`;
    let serviceEndpoint = `https://api.geocod.io/v1.6/geocode?api_key=${YOUR_API_KEY}`;

    await axios.post(serviceEndpoint, dict)
    
        .then((response)=>{
            console.log(response.data);
        }) .catch ((error)=>{
            console.log(`Error: ${error}`);
        })
}










//---------- Was going to make a JSON file so I wouldn't have call geocode.io all the fricken time

// creating JSON formatted file per format requirements (https://www.geocod.io/docs/#geocoding)
// the resulting JSON will be the batch input file for geocod.io
// function makeJSON(dict){
//     let dictString = JSON.stringify(dict);
//     let fs = require('fs'); // node.js loading module 'fs' = file system
//     fs.writeFile("geocodeJSON_input.json", dictstring);
// }



//---------- Example curl cmd

// curl -X POST \
// -H "Content-Type: application/json" \
// -d '["1109 N Highland St, Arlington VA", "525 University Ave, Toronto, ON, Canada", "4410 S Highway 17 92, Casselberry FL", "15000 NE 24th Street, Redmond WA", "17015 Walnut Grove Drive, Morgan Hill CA"]' \
// https://api.geocod.io/v1.6/geocode?api_key=YOUR_API_KEY


