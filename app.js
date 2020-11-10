const endpoint = `https://data.baltimorecity.gov/resource/k5ry-ef3g.json`;


// gets neighborhoods to populate dropdown box
const getNeighborhoods = async (endpoint) => {

    let neighborhoodList = [];

    await axios.get(endpoint)

        
        .then((result)=>{

            // get unique neighborhood names
            result.data.forEach( restaurant => {
                if(!neighborhoodList.includes(restaurant.neighborhood)){
                    neighborhoodList.push(restaurant.neighborhood);
                }
            })

            // alphabetize neighboorhoods and populate dropdown
            populateDropdown(neighborhoodList.sort());

         }) .catch ((error)=>{
            console.log(`Error: ${error}`);
        })
}

getNeighborhoods(endpoint);



// actual populating of dropdown box with neighborhood data
function populateDropdown(neighborhoodList){
    const select = document.querySelector('#neighborhoods');
    return neighborhoodList.forEach((n) => {
        const option = document.createElement('option');
        option.value = n;
        option.textContent = n;
        select.append(option);
    });
}



// grab user selected neighborhood 
function grabUserSelectedNeighborhood(event) {
    event.preventDefault(); // prevents the page from refreshing
    const optionValue = document.querySelector('select').value;
    console.log(optionValue);
}



// Event handler for the form element
const form = document.querySelector('form');
form.addEventListener('submit', grabUserSelectedNeighborhood);


