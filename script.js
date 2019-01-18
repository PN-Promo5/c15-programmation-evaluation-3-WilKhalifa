/*EXERCICE 1 :
1.1/ Créez une fonction permettant d’afficher l’interface suivante :*/

let container = document.createElement("div"); //creation and storage of the container
let viewMovies = document.createElement("button"); //creation and storage of the button

function print() {
  let title = document.createElement("h1"); //creation and storage of h1
  let description = document.createElement("p"); //creation and storage of p

  document.body.appendChild(container); //addition of the container to the body of the html document
  container.appendChild(title); //addition of the h1 to the container of the HTML document
  container.appendChild(description); //addition of the p to the container of the HTML document
  container.appendChild(viewMovies); //addition of the button to the container of the HTML document

  title.textContent = "Cinéma Le Dauphin" //write the content in the h1 that belongs to the HTML
  description.textContent = "Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualité. Des avant\ premières, des rencontres,  des ciné - repas, des débats, des ateliers, des ciné - goûters, de 11h30 à 23 h du mardi au\
  dimanche(jusqu’ à minuit le vendredi et le samedi)."; //write the content in the p that belongs to the html
  viewMovies.textContent = "Voir les films à l’affiche cette semaine"; //write the content in the button that belongs to the html
};

print();


/*1.2/ Créez un tableau à deux dimensions contenant les informations suivantes (ces informations sont
liées aux films diffusés dans le cinéma) :*/


let movies = [
  ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"],
  ["IN MY ROOM", "Ulrich Köhler", "Allemagne", "2019", "2h", "vf"],
  ["UN VIOLENT DÉSIR DE BONHEUR", "Clément Schneider", "France", "2018", "1h15", "vf"],
  ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE ?", "Roberto Minervini", "Etats-Unis/Italie", "2018", "2h03", "vostfr"],
  ["GRASS", "Hong Sang-Soo", "Corée du Sud", "2018", "1h06", "vostfr"]
];//creation of a two-dimensional array


/*1.3/ Créez une fonction prenant en paramètre un tableau à deux dimensions. Cette fonction doit
créer et retourner une table HTML construite à partir des données contenues dans le tableau
passé en paramètre. Notez que le 1er tableau contenu dans le tableau à deux dimensions passé en
paramètre doit correspondre à l’en-tête de la table HTML retournée.*/

let containerMovies = document.createElement("div");//creation of the container that will contain the HTML table
document.body.appendChild(containerMovies);//adding the container to the document
containerMovies.style.display = "none";//hide the container

function screenOnHtml(array) {//function that displays an HTML table
  let table = document.createElement("table");//
  let tHead = document.createElement("thead");//
  let tBody = document.createElement("tbody");//
  let currentElement;//
  let secondCurrentElement;//
  let headerElement;//
  let tRHead = document.createElement("tr");//
  let tRBody;//
  let tH;//
  let tD;//
  containerMovies.appendChild(table);//
  table.appendChild(tHead);//
  table.appendChild(tBody);//
  tHead.appendChild(tRHead);//

  for (var k = 0; k < array[0].length; k++) {//loop: condition validation
    headerElement = array[0][k];//while k is lower than the leght of the first array for the head, element header is equal to the index k of the array 0
    tH = document.createElement("th");//creation of element HTML th
    tRHead.appendChild(tH);//added html element th to tr head
    tH.textContent = headerElement;//value of th is equal to the header element
  }
  for (var i = 1; i < array.length; i++) {//loop: condition validation
    currentElement = array[i];//current element is equal to the index i of array
    tRBody = document.createElement("tr");//creation of the html element tr
    tBody.appendChild(tRBody);//added html element th to tbody
    for (var j = 0; j < currentElement.length; j++) {//second loop: condition validation
      secondCurrentElement = array[i][j]//second current element is equal to the index i and j of the array
      tD = document.createElement("td");//creation of the html element td
      tRBody.appendChild(tD);//added html element td to the tr body
      tD.textContent = secondCurrentElement;//value of td is equal to second current element
    }
  }
  return table;
};

screenOnHtml(movies);

/*1.4/ Faites en sorte que lorsque le bouton “Voir les films à l’affiche cette semaine” (exercice 1.1) est
cliqué :
- l’interface créée en 1.1 soit cachée
- la fonction créée en 1.3 soit appelée, et que la table HTML retournée par cette fonction soit
affichée à l’écran*/

viewMovies.addEventListener("click", function() {
  container.style.display = "none";
  containerMovies.style.display = "inline";
}, false)


/*EXERCICE 2 :
2.1/ Créez un tableau à deux dimensions contenant les informations suivantes :*/

let temperature = [
  ["SUBSTANCES", "Température de fusion ou solidification en °C", "Température d’ébullition en °C"],
  ["acide acétique", 17, 118],
  ["acide nitrique", -41, 86],
  ["acide sulfurique", 10, 290],
  ["alcool éthylique", -114, 78],
  ["aluminium", 660, 2450]
];//creation of a two-dimensional array


/*2.2/ Créez une fonction prenant deux paramètres :
- le tableau créé en 2.1
- un nombre
Cette fonction doit retourner un tableau de chaînes de caractères contenant le nom des substances
dont la température d’ébullition en °C est inférieure au nombre passé en paramètre.*/


function boilingTeperature(array, number) {//function that takes 2 parameters and will give the name of a value if it is lower than the one given
  let newArray = [];//creation on an other array
  let currentElement;//creation of current element
  let secondCurrentElement;//creation od the second current element
  for (var i = 0; i < array.length; i++) {//loop: validation condition
    currentElement = array[i];//assignment of the current element according to the index i of the array
    if (i > 0 && array[i][2] < number) {//conditional test
      newArray.push(array[i][0].toString());//if i is lower than 0 and ebulition temperature is lower than the number in the parameters, we push into the newArray
    }
    for (var j = 0; j < currentElement.length; j++) {//second loop: validation condition
      secondCurrentElement = array[i][j];//assignment of the second current ellement according to the index i and j of the array
    }
  }
  return newArray;//return newArray of string
}

console.log(boilingTeperature(temperature, 100));
