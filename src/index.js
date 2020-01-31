console.log('%c HI', 'color: firebrick')

//challenge 1
document.addEventListener('DOMContentLoaded', function() {
    fetchAllDogs()
    fetchAllBreeds()
})

function fetchAllDogs() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(resp => resp.json()) //parse to JSON
        .then(data => {
            data.message.forEach(img => addDogs(img)) //passing to next function to add dog images
        });
}

function addDogs(imgURL) {
    const image = document.querySelector('#dog-image-container');
    const newDog = document.createElement('img');
    newDog.src = imgURL;
    image.appendChild(newDog); //adding dog images to page
}

//challenge 2
function fetchAllBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(resp => resp.json())
        .then(data => {
            data.message.innerHTML
        })
}


//challenge 3

//challenge 4