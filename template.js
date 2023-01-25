function generatePokemonCards(i, onePokemon) {
    return /*html*/`
       <div id="pokemon-card-${i}" onclick="openPopUp(${i})" class="pokemon-card cursor">
       <div class="pokemon-card-top">
       <h2 class="pokemon-name" id="pokemon-name-${i}">${onePokemon['name']}</h2>
       <h2 class="pokemon-id" id="pokemon-id">#${i+1}</h2>
       </div>
       <div id="pokemon-card-bottom" class="pokemon-card-bottom">
       <span class="pokemon-type" id="pokemon-type-${i}">${onePokemon['types']['0']['type']['name']}</span> <br>    
       <img src="${onePokemon['sprites']['other']['official-artwork']['front_default']}" id="pokemon-image" alt="">
       </div>
       </div>
       </div>
       `;
}


function generatePopUpHTML(i, onePokemon) {
    return /*html*/`
        <div class="popup-wrap">
        <!-- To solve the Problem with the background-color of the pop up version, the solution was to give the pop up container 
        a class name with bg and afterwards the variable of what is displayed in the innerHTML of type, so every pop up gets his exact background-color -->
        <div id="pokemon-card-${i}" class="popup-container bg-${onePokemon['types']['0']['type']['name']}">
        <button class="cursor" onclick="closePopUp()">X</button>
        <!-- PopUp Top Start -->
        <div id="popup-top" class="popup-top">
        <div class="top-info">
        <p class="pokemon-id" id="pokemon-id-${i}">#${i+1}</p>
        <h1 class="pokemon-name" id="pokemon-name-${i}">${onePokemon['name']}</h1>
        <p id="popup-type" class="pokemon-type">${onePokemon['types']['0']['type']['name']}</p> <br>

        <br>
        </div>

        <div class="image-container">
        <img src="${onePokemon['sprites']['other']['official-artwork']['front_default']}" id="pokemon-image" alt="">
        </div>

        <div class="next-image-container">
        <h3><button onclick="prePokemon(${i});"><img class="left-arrow cursor" src="img/left-arrow.png" alt=""></button></h3>
        <h3><button onclick="nextPokemon(${i});"><img class="right-arrow cursor" src="img/left-arrow.png" alt=""></button></h3>
        </div>

        <div class="height-weight-container">
        <h3>Weight:${onePokemon['weight']}</h3>
        <h3>Height:${onePokemon['height']}</h3>
        </div>

        </div>
        <!-- PopUp Top End -->

        <!-- PopUp Bottom Start -->
        <div class="popup-bottom">

        <div class="base-stats-heading">
        <h3>Base Stats</h3>
        </div>

        <hr>
        <!-- PopUp Bottom End -->
        <div class="stats-container">
            <div class="stats-left">
                <p class="stats-name"><b>HP</b></p>
                <p class="stats-name"><b>Attack</b></p>
                <p class="stats-name"><b>Defense</b></p>
                <p class="stats-name"><b>Special-Attack</b></p>
                <p class="stats-name"><b>Special-Defense</b></p>
                <p class="stats-name"><b>Speed</b></p>
            </div>

            <div class="stats-center">
                
                <p><b>${onePokemon['stats'][0]['base_stat']}</b></p>
                <p><b>${onePokemon['stats'][1]['base_stat']}</b></p>
                <p><b>${onePokemon['stats'][2]['base_stat']}</b></p>
                <p><b>${onePokemon['stats'][3]['base_stat']}</b></p>
                <p><b>${onePokemon['stats'][4]['base_stat']}</b></p>
                <p><b>${onePokemon['stats'][5]['base_stat']}</b></p>
                  
            </div>

            <div class="stats-right">
        
                <div class="progress-parent">
                <progress id="progressbar" value="${onePokemon['stats'][0]['base_stat']}" max="200"></progress>
                </div>
                <div class="progress-parent">
                <progress id="progressbar" value="${onePokemon['stats'][1]['base_stat']}" max="200"></progress>
                </div>
                <div class="progress-parent">
                <progress id="progressbar" value="${onePokemon['stats'][2]['base_stat']}" max="200"></progress>
                </div>
                <div class="progress-parent">
                <progress id="progressbar" value="${onePokemon['stats'][3]['base_stat']}" max="200"></progress>
                </div>
                <div class="progress-parent">
                <progress id="progressbar" value="${onePokemon['stats'][4]['base_stat']}" max="200"></progress>
                </div>
                <div class="progress-parent">
                <progress id="progressbar" value="${onePokemon['stats'][5]['base_stat']}" max="200"></progress>
                </div>

            </div>
        </div>
    </div>
    </div>`
}


// Change the Background-Color based on Pokemon Type
function changeColor(i) {
    let type = document.getElementById(`pokemon-type-${i}`);
    let card = document.getElementById(`pokemon-card-${i}`);
    if(type.innerHTML == 'grass') {
        card.classList.add('bg-grass');
    }
    if(type.innerHTML == 'water') {
        card.classList.add('bg-water');
    }
    if(type.innerHTML == 'bug') {
        card.classList.add('bg-bug');
    }
    if(type.innerHTML == 'normal') {
        card.classList.add('bg-normal');
    }
    if(type.innerHTML == 'grass') {
        card.classList.add('bg-grass');
    }
    if(type.innerHTML == 'fire') {
        card.classList.add('bg-fire');
    }
    if(type.innerHTML == 'electric') {
        card.classList.add('bg-electric');
    }
    if(type.innerHTML == 'poison') {
        card.classList.add('bg-poison');
    }
    if(type.innerHTML == 'fairy') {
        card.classList.add('bg-fairy');
    }
    if(type.innerHTML == 'ground') {
        card.classList.add('bg-ground');
    }
    if(type.innerHTML == 'fighting') {
        card.classList.add('bg-fighting');
    }
    if(type.innerHTML == 'psychic') {
        card.classList.add('bg-psychic');
    }
    if(type.innerHTML == 'rock') {
        card.classList.add('bg-rock');
    }
    if(type.innerHTML == 'ghost') {
        card.classList.add('bg-ghost');
    }
    if(type.innerHTML == 'ice') {
        card.classList.add('bg-ice');
    }
    if(type.innerHTML == 'rock') {
        card.classList.add('bg-rock');
    }
    if(type.innerHTML == 'dragon') {
        card.classList.add('bg-dragon');
    }
}