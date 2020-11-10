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














// async function getBreed(breed){
//     const url = `https://dog.ceo/api/breed/${breed}/images/random`;
//     try{
//         const response = await axios.get(url);
//         const dogBreedImg = response.data.message;
//         dogPic(dogBreedImg);
//     } catch(error){
//         console.log(error);
//     }
// }

// function dogPic(breed){
//     const img = document.createElement('img');
//     img.src = breed;
//     removePic();
//     const appendDog = document.querySelector('#append-dog');
//     appendDog.append(img);
// }

// function removePic(){
//     const oldPic = document.querySelector('#append-dog');
//     while(oldPic.lastChild){
//         oldPic.removeChild(oldPic.lastChild);
//     }
// }

// const form = document.querySelector('form');
// form.addEventListener('submit', getValue); // pass getValue by reference 'no ()' so it will only invoke when there is an event