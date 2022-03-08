const findTheOldest = function(people) {
    return people.reduce((pp, cp) => {
        ppAge = (pp.yearOfDeath||new Date().getFullYear()) - pp.yearOfBirth;
        cpAge = (cp.yearOfDeath||new Date().getFullYear()) - cp.yearOfBirth;

        return ppAge > cpAge ? pp : cp; 

    })
};

// Do not edit below this line
module.exports = findTheOldest;
