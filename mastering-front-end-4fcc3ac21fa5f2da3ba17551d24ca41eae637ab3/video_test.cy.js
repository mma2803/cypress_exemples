// cours du 16/12/2024

//pour commenter
/* bonjour
    le jour
    */

// ouvrir le fichier, clic droit, mettre le document en forme
let NewVariable; // let déclare les variables, il faut éviter d'utiliser les - et les _ et mettre à la place des majuscules

// const = valeur de la variable ne change pas
const mma = "hello"; // variable mma déclarée ayant un texte hello
const mma12 = 20; // variable mma12 déclaréee ayant la valeur 20 qui ne bougera pas
console.log(mma); // il m'affichera hello
console.log(mma12);
//si je modifie la valeur de mma, mma = "hi", il m'affichera une erreur

// let = varaible déclarée qui peut évoluer
var12 = 35;
console.log(var12); // il m'affichera 20
var12 = 22;
console.log(var12); // il m'affichera 22 sans aucun programme

// pour déclarer une chaine de caractères avec let
let chaine = "je suis myriem";
/*ou ("je suis myriem"); */
/*ou ('je m\'appelle myriem');*/
console.log("ma nouvelle chaine est :" + chaine);
// deux façons de concaténations
// concaténation avec +
let NouvelleChaine = "ancienne_chaine :" + chaine + " mise à jour";
//concaténation avec guillemets altgr+7 (utilisé qu'on a bcp de choses à mettre)
let NouvelleChaine_algtgr7 = `ancienne_chaine :${chaine} mise à jour`;
console.log(NouvelleChaine);
console.log(NouvelleChaine_algtgr7);

//** Types de données **
let string = "Je suis une chaine de caractère";
let number = 24;
let boolean = false;
let array = ["je", "suis", 47, true]; // Tableau : il y a des crochets []
let object = {
  // Objet : accolades {}
  prenom: "audrey",
  age: 33,
  ville: "bordeaux",
};

console.log(object);
//on peut créer les variables sans les déclarer (let number), et plustard dans le projet on le déclare number=20

// ** Les opérateurs **
console.log(4 + 5);
console.log(4 - 5);
console.log(4 / 5);
console.log(4 * 5);
// puissance
console.log(4 ** 5);

// ** Opérateurs d'affectations **
let total = 0;

total = total + 1;
total++; // incrémente de 1

total += 5;
total -= 4;
total *= 2;
// console.log(total);

let x = 30;
let y = 30;
if (x > y) {
  alert("x est plus grand que y");
} else if (x < y) {
  alert("x est inférieur à y");
} else {
  alert("x et y sont égaux");
}

// On teste si la variable est "true"
if (x) {
     //console.log("x existe !");
  }
  
  // === teste l'égalité en type et valeur
  if (x === y) {
     console.log("ils sont égaux");
  } else {
     console.log("pas égaux !");
  }
  
  let a = 2;
  let b = "2";
  // == teste l'égalité de valeur sans prendre en compte le type
  if (a == b) {
    console.log("ils sont égaux");
  } else {
    console.log("pas égaux !");
  }

// Soit l'un soit l'autre
if (x < y || x > 1) {
     //console.log("UI");
  }
  
  // && il faut que toutes les conditions soit réunies
  if (x < y && x > 1) {
    console.log("UI");
  }

  // ** Les fonctions **

// fonction classique (à l'ancienne)
function faireQuelqueChose() {
    console.log("je fais un truc");
    console.log(5 + 6);
    alert("Calcule terminé !");
  }
  
  // Il faut impérativement appeler la fonction pour qu'elle se joue
  // appel de la fonction : faireQuelqueChose();  

  // ** La portée des variables **

function add2() {  //num est une variable locale qui ne sera pas connue à l'extérieure
    let num = 4;
    console.log(num + 2);
  }
  
  console.log(num);
  