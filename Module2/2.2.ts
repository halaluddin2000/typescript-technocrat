{
  //interface

  type TUser = {
    name: string;
    age: number;
  };
  interface IUser {
    name: string;
    age: number;
  }

  type UserWithRole = TUser & { role: string };
  const user2: IUser = {
    name: "Belal",
    age: 24,
  };
  const user1: UserWithRole = {
    name: "Helal",
    age: 25,
    role: "manager",
  };

  //
}
