{
  //conditional type

  type a1 = number;
  type b1 = string;

  type x = a1 extends null ? true : false; //conditional type

  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    plan: string;
  };

  //keyof Sheikh "bike | 'car"| "ship"

  //car ase kina / bike ase kina / ship ace kina
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasCar = CheckVehicle<"car">;

  //------------------
}
