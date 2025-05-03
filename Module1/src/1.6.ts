{
  //

  const poorUser = {
    name: "Helal",
    balance: 0,
    addBalance(balance: number): string {
      return `my new balance is : ${this.balance + balance}`;
    },
  };

  const arr: number[] = [1, 4, 10];
  const newArray: number[] = arr.map((elem: number): number => elem * elem);

  //
}
