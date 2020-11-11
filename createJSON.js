const baltimoreOpenDataEndpoint = `https://data.baltimorecity.gov/resource/k5ry-ef3g.json`;



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
            
            callMapQuest(restaurantDict);
            // makeJSON(restaurantDict);
            // ** note: initally created the dict for geocodio. Could reconsider this structure type

         }) .catch ((error)=>{
            console.log(`Error: ${error}`);
        })
}



getAddresses(baltimoreOpenDataEndpoint);



// mapQuest Developer's FREE forward geocoding (batch mode - limited to 100 address at a time)
const callMapQuest = async (dict) => {

    const YOUR_API_KEY = `8zBqKVlrb42b0WZ6bA1uCRPTm99oVacD`;
    let serviceEndpoint = `https://www.mapquestapi.com/geocoding/v1/batch?&inFormat=kvp&outFormat=json&thumbMaps=false&maxResults=1`;
    let len = Object.keys(dict).length; // number of address in the object dictionary =959
    let loopCount = Math.floor(len / 100); // =9
    let lastloopCount = (len % 100); // =59
    

    // Trying to figure out this loop!
    // generating urls while taking into consideration the 100 address batch limit
    Object.values(dict).forEach(function(address) {

        let i = 0;
        let batchURL = serviceEndpoint;

        while(i<100){
            batchURL += `&location=${address}`;
            i++;
        }

        batchURL += `&key=${YOUR_API_KEY}`
        // exectue API call here
        
    });



    for(let i=0; i<=loopCount; i++){
        let generatedURL = null;
    }

    // await axios.get(generatedURL)

    //     .then((response) =>{
    //         console.log(response.data);
    //     }) .catch ((error)=>{
    //         console.log(`Error: ${error}`);
    //     })
}


// I like this format
// https://www.mapquestapi.com/geocoding/v1/batch?&inFormat=kvp&outFormat=json&thumbMaps=false&maxResults=1&location=Denver, 
// CO&location=1555 Blake St, Denver, CO 80202&location=Boulder&key=KEY







//---------- Was going to make a JSON file so I wouldn't have call geocode.io all the fricken time

// creating JSON formatted file per format requirements (https://www.geocod.io/docs/#geocoding)
// the resulting JSON will be the batch input file for geocod.io
// function makeJSON(dict){
//     let dictString = JSON.stringify(dict);
//     let fs = require('fs'); // node.js loading module 'fs' = file system
//     fs.writeFile("geocodeJSON_input.json", dictstring);
// }
