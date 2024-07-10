let x = "hello world";
let y = 69;
let z = 1 - 1;
let even = 10;
let p = "kobe ";
let p1 = "bryant ";
var arr = [];
p1 += "24";

let dice = Math.floor(Math.random() * 6) + 1;

let d = new Date();
let toto = new Date("1989-06-13");
let age = Math.floor((d - toto) / (365 * 24 * 3600000));

let phrase = "my favorite dessert is jello";
console.log(`pour l'exercice la reponse est: `, phrase.indexOf("j"));

let phraseWithSlice = phrase.slice(22, 24);
console.log(phraseWithSlice);

console.log(x);

console.log(`hello ${p + p1} \n UP \n DOWN`);

arr.push(x, y, z);

if (even % 2 == 0) {
  console.log(arr);
}

/*const reponse = prompt("quelle est ton age")

if (reponse > 18){
    console.log(`your age is ${reponse}`)
}
*/

for (let i = 1; i < 12; i++) {
  if (i % 2 != 0) {
    console.log(`i est égale à ${i}`);
  }
}
/*
for (let i = 1;i < 12; i+=2){

        console.log(`i est égale à avec l'incrémentation ${i}`)

}*/

/*
OBJECT
*/

let objP1 = {
  prenom: "kobe",
  nom: "bryant",
  number: 24,
  post: "Forward",
  nickname: "blackMamba",
  func: function hello() {
    console.log(
      "je suis la function de l'objet p1 (et je passe dans la condition if"
    );
  },
};

objP1.country = "USA";

console.log("valeur de l'objet avec la valeur de .prénom==>", objP1.prenom);
console.log("valeur de l'objet ==>", objP1);
if ("nom" in objP1) {
  objP1.func();
}

const tab = Object.keys(objP1);
const tab2 = Object.values(objP1);

for (let i = 0; i < tab.length - 2; i++) {
  console.log(`boucle for => ${tab[i]} : ${tab2[i]}`);
}
