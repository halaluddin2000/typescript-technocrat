"use strict";
var _a, _b;
{
    //
    const age = 19;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("not adult");
    }
    const user = {
        name: "Helal",
        address: {
            city: "ctg",
            road: "dc road",
            presentAddress: "ctg town",
        },
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No permanent address";
    console.log(permanentAddress);
    //
}
