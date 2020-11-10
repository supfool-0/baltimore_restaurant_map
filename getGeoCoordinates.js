// geocoding
const geocodeioAPIkey = `f4b4fc94749253fffff5fc9a54b44ab7a7cf777`;
const geoEndpoint = `https://data.baltimorecity.gov/resource/k5ry-ef3g.json`;


// get addresses of restaurants
const getAddresses = async (endp) => {

    let restaurantAddresses = [];

    await axios.get(endp)
        .then((result)=>{
            result.data.forEach( restaurant => {

                let obj = {
                    name: restaurant.name,
                    address: restaurant.location_1.human_address //weird string format
                }

                restaurantAddresses.push(obj);
            })
         }) .catch ((error)=>{
            console.log(`Error: ${error}`);
        })
}

getAddresses(geoEndpoint);