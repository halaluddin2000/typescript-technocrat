{
  //abstraction: 1. interface 2. abstract

  //idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //real implementation
  class Car implements Vehicle1 {
    startEngine(): void {
      console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`I am stopping the car engine`);
    }
    move(): void {
      console.log(`I am moving the car`);
    }
    test() {
      console.log(`I am just testing`);
    }
  }

  const toyotaCar = new Car();
  toyotaCar.startEngine();

  //abstract class

  //idea
  abstract class Car2 {
    abstract starEngine(): void;
    abstract stopENgine(): void;
    abstract move(): void;
    test() {
      console.log(`I am just testing`);
    }
  }

  class ToyotaCar extends Car2 {
    starEngine(): void {
      console.log("I am staring the car engine");
    }
    stopENgine(): void {
      console.log("I am stopping the car engine");
    }
    move(): void {
      console.log("i am moving the car");
    }
  }

  //--------------
}
