"use strict";
var Role;
(function (Role) {
    Role[Role["admin"] = 1] = "admin";
    Role[Role["Read"] = 2] = "Read";
    Role[Role["Backup"] = 3] = "Backup";
})(Role || (Role = {})); //trabalha com listas relacionadas, auxilia em manter o codigo limpo
const user = {
    firstName: 'Eduardo',
    age: 28,
    Role: Role.Backup
};
console.log(user);
