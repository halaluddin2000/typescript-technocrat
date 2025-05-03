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

  const allGroupAndSubject = {
    ...subject,
    ...group,
  };

  //rest operators

  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };
  greetFriends("abul", "babul", "tabul");
}
