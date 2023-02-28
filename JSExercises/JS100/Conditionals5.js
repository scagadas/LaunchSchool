//Switch

//Determine what will log in the console without running the code


let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
    break;
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}

//All code bellow the case 'horse' will execute
//needs a break statement to seperate each case