const logNames = users => {
    users.forEach (element => {
        console.log(`${element.firstName} ${element.lastName}`);
    });
}

    const randomUsers = [{
        id: 1,
        firstName : "Nick",
        lastName : "Mold", }
        , {
        id: 2,
        firstName : "Marta",
        lastName : "Zald"}
    ];

    logNames (randomUsers);    