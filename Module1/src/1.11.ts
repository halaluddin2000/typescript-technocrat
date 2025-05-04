{
  //
  const age = 19;

  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }
  //nalish operators
  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };
  const user: User = {
    name: "Helal",
    address: {
      city: "ctg",
      road: "dc road",
      presentAddress: "ctg town",
    },
  };
  const permanentAddress =
    user?.address?.permanentAddress ?? "No permanent address";
  console.log(permanentAddress);

  //
}
