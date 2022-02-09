

function paginateUsers(users, page) {
    let newUsers = [];
    if (page > 1) {
        newUsers = users.filter(
            (user) => user.name === users[page].name || user.name === users[page + 1].name
        );
    } else {
        newUsers = users.filter(
            (user) => user.name === users[page - 1].name || user.name === users[page].name
        );
    }
    console.log(newUsers);
}
let users = [
    { name: "Daniela", email: "daniela@academlo.com" },
    { name: "Juan", email: "juan@academlo.com" },
    { name: "Luis", email: "luis@academlo.com" },
    { name: "Pedro", email: "pedro@academlo.com" },
    { name: "Luis", email: "luis@academlo.com" },
    { name: "Pedro", email: "pedro@academlo.com" },
];
let page = 3;
paginateUsers(users, page);
