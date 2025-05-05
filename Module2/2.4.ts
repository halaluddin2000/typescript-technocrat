{
  //interface---genetic

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type SmartWatch = {
    brand: string;
    model: string;
    display: string;
  };
  const poorDeveloper: Developer<SmartWatch> = {
    name: "Helal",
    computer: {
      brand: "asus",
      model: "x-25sur",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      display: "OLED",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }
  interface FZBike {
    brand: string;
    model: string;
    price: number;
  }
  const riceDeveloper: Developer<AppleWatch, FZBike> = {
    name: "Rich Dev",
    computer: {
      brand: "HP",
      model: "x-45sur",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "Apole watch",
      model: "something",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      brand: "FZ",
      model: "FZ-52",
      price: 250000,
    },
  };

  //
}
