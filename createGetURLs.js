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
        batchURL += `&key=${YOUR_API_KEY}`;
        urls.push(batchURL);
    }  


    
    // take care of the straggling addresses
    let lastURL = serviceEndpoint;
    let lastSlicedArr = addressArr.slice(loopCount*100,(loopCount*100)+lastCount);
    lastSlicedArr.forEach((address)=>{
            lastURL += `&location=${address}`;
    });
    lastURL += `&key=${YOUR_API_KEY}`;
    urls.push(lastURL);
 }