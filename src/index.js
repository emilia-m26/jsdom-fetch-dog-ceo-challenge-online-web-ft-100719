console.log('%c HI', 'color: firebrick')

//challenge 1
document.addEventListener('DOMContentLoaded', function() {
    //startup routine
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
            breeds = Object.keys(data.message)
            addBreeds(breeds)
        })
}

function addBreeds(breeds) {
    let ul = document.querySelector('#dog-breeds');
    breeds.forEach(breed => {
        let li = document.createElement('li');
        li.innerHTML = `<p class='breed'>${breed}</p>`
        ul.appendChild(li)
    })
}

//challenge 3