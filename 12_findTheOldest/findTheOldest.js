//take the people object
//loop the items with reduce method
//calculate each items year of death - year of birth
//compare every item result
//return the item with biggest number

//function toCompare() {
//  this function compare wether Array1 has bigger age than next array
//  if yes, return Array1, if no, return next array
//  function findArrayAge() {
//    This function reduce the array into age number
//      then return array.age
//  }
//  if 
//}

const findTheOldest = function(people) {
    let findAge = function (birth, death) {
        if (death == null) {
            death = new Date().getFullYear();
        }
    return death - birth
    }

    const oldest = people.reduce((p, c) => {
        let prevAge = findAge(p.yearOfBirth, p.yearOfDeath);
        let currAge = findAge(c.yearOfBirth, c.yearOfDeath);
        return currAge > prevAge ? c : p;
})
return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
