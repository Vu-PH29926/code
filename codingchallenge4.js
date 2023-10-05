const dogs  = [
    {wight: 22, curFood:250, others :['alice','bob']},
    {wight: 8, curFood:200, others :['Natida']},
    {wight: 13, curFood:275, others :['Sarah','John']},
    {wight: 37, curFood:340, others :['Micchael']},
];
//1
dogs.forEach(dog =>(dog.recFood = Math.trunc(dog.wight ** 0.75 *28)));
//2
const dogSarh = dog.find(dog =>dog.owners.includes('Sarah'));
console.log(dogSarh);
console.log(
    `Sarah a dog eating too ${
        dogSarh.curFood > dogSarh.recFood ? 'much' : 'little'
    }`
);
//3
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners);
//.flat();
console.log(ownersEatTooMuch);
  

const ownersEatTooLittle = dogs.filter((dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners));
console.log(ownersEatTooLittle);
//4
console.log(`${ownersEatTooMuch.join('and')} 'a dog eat to much'`);
console.log(`${ownersEatTooLittle.join('and')} 'dogs eat too little`);


//5
console.log(dogs.some(dog => dog.curFood===dog.recFood));


//6
const checkEatingOkay =  dog =>
dog.curFood > dog.recFood * 0.9 && dog.curFood < 
dog.curFood *1.1;
console.log(dogs.some(checkEatingOkay));
//7
console.log(dogs.filter(checkEatingOkay));

//8
const dogsSorted  = dogs.slice().sort((a,b) => a.recFood - b.recFood);
console.log(dogsSorted);