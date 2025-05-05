"use strict";
{
    //
    const poorUser = {
        name: "Helal",
        balance: 0,
        addBalance(balance) {
            return `my new balance is : ${this.balance + balance}`;
        },
    };
    const arr = [1, 4, 10];
    const newArray = arr.map((elem) => elem * elem);
    //
}
