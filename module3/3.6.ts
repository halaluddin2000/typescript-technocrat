{
  //get and setter

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    set deposit(amount: number) {
      this._balance = this.balance + amount;
    }
    // addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }
    //getter
    get balance() {
      return this._balance;
    }
  }
  const goribManuserBank = new BankAccount(111, "Mr. X", 500);
  goribManuserBank.deposit = 1000;

  const myBalance = goribManuserBank.balance;
  console.log(myBalance);

  //------------------------
}
