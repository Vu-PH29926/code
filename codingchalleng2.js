const calAverageHumanAge =  function(ages){
    const humanAges = ages.map(age => (age<=2 ?2*
        age:16 + age * 4));
        const adult  = humanAges.filter(age =>age >=18);
        console.log(humanAges);
        console.log(adult);


        const average  =  adult.reduce(
            (acc,age,i,arr)=>acc + age /adult.length,
            0
        );
        return average;
};
const avg1  = calAverageHumanAge([5,2,4,1,15,8,3]);
const avg2  = calAverageHumanAge([16,6,10,5,6,1,4]);
console.log(avg1,avg2)

;