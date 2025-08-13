const logNames = users => {
    users.forEach(({ firstName, lastName }) => {
        console.log(`${firstName} ${lastName}`);
    });
}

const randomUsers = [{
    id: 1,
    firstName: "Nick",
    lastName: "Mold"
}, {
    id: 2,
    firstName: "Marta",
    lastName: "Zald"
}];

logNames(randomUsers);