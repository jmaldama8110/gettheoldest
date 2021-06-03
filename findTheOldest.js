const findTheOldest = function(people) {

    const newArray = people.sort( (a, b) => 
        ( a.yearOfBirth - b.yearOfBirth )  );

    console.log(newArray);
    return newArray[0];
};

module.exports = findTheOldest;