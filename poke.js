const pokemon = [
    {name: "Salameche", 
        type: "feu", 
        pv: 60,
        attaque: function att(pokeNamAtt, pokeNamDef, pv,pp){
            return console.log(`${} attaque ${} et lui enleve ${pv - pp}`);
        },
    },
    {name: "Carapuce", type: "eau", pv: 50},
    {name: "bulbizar", type: "plante", pv: 50},
    
]


console.log(pokemon[0].name)