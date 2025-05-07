{
  //oop -class

  class Animal {
    // name: string;
    // species: string;
    // sound: string;

    //parameter properties

    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      //   this.name = name;
      //   this.species = species;
      //   this.sound = sound;
    }
    makeSound() {
      console.log(`the ${this.name} saye ${this.sound}`);
    }
  }

  const dog = new Animal("german shepard bhai", "dog", "Ghew Ghew");
  const cat = new Animal("persian bhai", "cat", "meaw meaw");
  cat.makeSound();

  //-------------
}
