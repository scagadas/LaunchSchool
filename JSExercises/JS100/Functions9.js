//Locale Part 1

//Problem:
//Write a function that extractsthe language code from a locale

//split it at _ into an array and call for the first element in the array


function extractLanguage(locale) {
  return locale.split('_')[0];
}

// Examples:
console.log(extractLanguage('en_US.UTF-8'));
console.log(extractLanguage('en_GB.UTF-8'));
console.log(extractLanguage('ko_KR.UTF-16'));