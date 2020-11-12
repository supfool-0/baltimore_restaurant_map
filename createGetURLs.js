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
    let lastCount = (len % 100); // =59
    let addressArr = Object.values(dict);
    let urls = [];


    // generating urls while taking into consideration the 100 address batch limit
    for(let i=0; i<loopCount; i++){

        let batchURL = serviceEndpoint;
        let slicedArr = addressArr.slice(i*100,(i*100)+100);

        slicedArr.forEach((address)=>{
            batchURL += `&location=${address}`;
        });
        batchURL += `&key=${YOUR_API_KEY}`; // appending key
        urls.push(batchURL);
        // would exectue API call here ... going to use POSTMAN
    }  


    // take care of last 59 address
    let lastURL = serviceEndpoint;
    let lastSlicedArr = addressArr.slice(loopCount*100,(loopCount*100)+lastCount);
    lastSlicedArr.forEach((address)=>{
            lastURL += `&location=${address}`;
    });
    lastURL += `&key=${YOUR_API_KEY}`; // appending key
    urls.push(lastURL);

    //console.log(urls[9]); -- printed urls to put into POSTMAn

 }
    

    // await axios.get(generatedURL)

    //     .then((response) =>{
    //         console.log(response.data);
    //     }) .catch ((error)=>{
    //         console.log(`Error: ${error}`);
    //     })



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
