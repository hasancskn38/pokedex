// Global Variables, that are declared so that they can be used everywhere
let currentPokemon;
let allPokemons = [];

// Get the Data from the API with an async function what means that the function does not run synchronous like normal functions
async function loadPokedex() {
    // for loop to be able to go through every pokemon
    for (let i = 1; i < 152; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
        // fetch the data with await fetch(url), await is used to wait for a promise
        let response = await fetch(url);
        // declare a variable that stands for every pokemon
        currentPokemon = await response.json();
        // Push the Pokemons in a global Array to have Access to them all the time
        allPokemons.push(currentPokemon);
    }
    // call the renderPokemons() function to display all the pokemons
    renderPokemons();
}


// Render Pokemon Function
function renderPokemons() {
    // for loop to go through the allPokemons Array where we pushed all the pokemons that we got from the async function
    for (let i = 0; i < allPokemons.length; i++) {
        let onePokemon = allPokemons[i];
        let pokemonCards = document.getElementById('pokemon-cards');
        pokemonCards.innerHTML  += generatePokemonCards(i, onePokemon);
        changeColor(i);
    }
}


// Search Pokemon Function
function searchPokemon() {
    // get the value of the input field
    let input = document.getElementById('input').value;
    let cards = document.getElementById('pokemon-cards');
    // convert input into lowercase and the trim method removes whitespace from both sides of a string
    input = input.toLowerCase().trim();
    cards.innerHTML = '';
    for (let i = 0; i < 151; i++) {
        // declaring a variable for the pokemon names
        let pokemonName = allPokemons[i]['name'];
        /* if condition to check if the input field contains a letter that a pokemon has and if so it should run
         the generatePokemonCards Function to display the pokemon which has the letters from the input field */
        if(pokemonName.toLowerCase().includes(input)) {
            cards.innerHTML += generatePokemonCards(i, allPokemons[i]);
            // Solved the changeColor Problem by adding the changeColor Function inside the for loop
            changeColor(i); 
        } 
    }
}


// Open Pop Up Function
function openPopUp(i) {
    const onePokemon = allPokemons[i];
    let popUp = document.getElementById('pokemon-cards-popup');
    popUp.classList.remove('d-none');
    popUp.innerHTML = generatePopUpHTML(i, onePokemon);
    document.getElementById('overlay').classList.remove('d-none');
    document.getElementById('header').classList.add('d-none');
    /*Add the overflow hidden property to the body 
    so that you cant scroll if you opened a popup*/
    document.querySelector('body').classList.add('hidden');
}
    

// Close Pop Up Function
function closePopUp() {
    let popUp = document.getElementById('pokemon-cards-popup');
    popUp.classList.add('d-none');
    document.getElementById('overlay').classList.add('d-none');
    document.getElementById('header').classList.remove('d-none');
    /*change the overflow hidden property to auto again so that
    you can scroll again after closing the popup*/
    document.querySelector('body').classList.remove('hidden');
}


// Previous Pokemon Function 
function prePokemon(i) {
    if(i == 0) {
        openPopUp(150)
    } else {
    openPopUp(i-1);
    }
}

// Next Pokemon Function
function nextPokemon(i) {
    if(i == 150) {
        openPopUp(0)
    } else {
    openPopUp(i+1);
    }
}

