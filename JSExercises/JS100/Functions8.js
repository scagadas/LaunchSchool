//Internationalization 1

//Problem:
//Write a function that takes an ISO 639-1 language code
//returns: a greeting in that language

function greet(language) {
  switch (language) {
    case 'en' : return 'Hi!';
    case 'fr' : return 'Salut!';
    case 'pt' : return 'Ola!';
    case 'de' : return 'Hallo!';
    case 'sv' : return 'Hej!';
    case 'af' : return 'Haai!';
  }
}


console.log(greet('en')); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'
greet('de'); // 'Hallo!'
console.log(greet('sv')); // 'Hej!'
greet('af'); // 'Haai!'