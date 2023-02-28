function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words); //bc this is after return, it doesn't get called
}

scream('Yipeee'); //this doesn't return anything
