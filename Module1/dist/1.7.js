"use strict";
{
    //spered operators
    const subject = {
        bangla: "yeasir",
        sosalSince: "Fahid",
        islamicHistory: "Helal",
    };
    const group = {
        since: "sayem",
        humanits: "towhid",
    };
    const allGroupAndSubject = Object.assign(Object.assign({}, subject), group);
    //rest operators
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends("abul", "babul", "tabul");
}
