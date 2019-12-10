var apiUrl = "https://pokeapi.co/api/v2/pokemon/";
var input = document.querySelector(".pokemon-input");
var pokemonName = document.querySelector(".pokemon-name");
var pokemonImage = document.querySelector(".pokemon-image");
var pokemonAbility = document.querySelector(".pokemon-ability");
var pokemonType = document.querySelector(".pokemon-type");

function getPokemonData() {

//tehdään get-pyyntö apille käyttäen axiosta ja
//syötettyä id-arvoa

    axios.get(apiUrl + input.value)
    .then(function (response) {
        pokemonName.innerHTML = response.data.forms[0].name;
        pokemonAbility.innerHTML = response.data.abilities[0].ability.name;
        pokemonType.innerHTML = response.data.types[0].type.name;
        pokemonImage.src = response.data.sprites.front_default;
    })
    .catch(function (error) {

    //virheenkäsittely jos käyttäjä syöttää esim muita kuin numeroita
    
        pokemonName.innerHTML = "(An error has occurred.)";
        pokemonImage.src = "";
    });
}

var button = document.querySelector(".pokemon-button");
button.addEventListener("click", getPokemonData);