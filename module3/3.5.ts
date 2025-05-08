{
  //access Modifiers

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }
    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }
    get_balance() {
      return this._balance;
    }
  }
  const goribManuserBank = new BankAccount(111, "Mr. X", 500);
  goribManuserBank.addDeposit(1000);

  const mybalance = goribManuserBank.get_balance();
  console.log(mybalance);
  //----------------
}
