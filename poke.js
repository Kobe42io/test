// const pokemon = [
//   {
//     name: "Salameche",
//     type: "feu",
//     pv: 60,
//     attaque(pokemon) {
//       return console.log(
//         `${this.name} attaque ${
//           pokemon.name
//         } et lui enleve ${attAleatoir} PV :::::: ${pokemon.name} n'a plus que ${
//           pokemon.pv - attAleatoir
//         } PV`
//       );
//     },
//   },

//   { name: "Carapuce", type: "eau", pv: 50 },
//   { name: "bulbizar", type: "plante", pv: 50 },
// ];
//pokemon[0].attaque(pokemon[1]);
//console.log(pokemon[0].name);

class Pokemon {
  constructor(n, t, p) {
    this.name = n;
    this.type = t;
    this.pv = p;
  }

  attaque(pokemon) {
    return console.log(
      `${this.name} attaque ${
        pokemon.name
      } et lui enleve ${attAleatoir} PV :::::: ${pokemon.name} n'a plus que ${
        pokemon.pv - attAleatoir
      } PV`
    );
  }
}

//réutiliser le constructor parent
class bulbizar extends Pokemon {
  constructor(n, t, p, c) {
    super(n, t, p);
    this.color = c;
  }
}

const bulbizar = new Pokemon("bulbizar", "plante", 50);

let attAleatoir = Math.floor(Math.random() * 10) + 1;

console.log("classe pokemon ====>", bulbizar.name);
