interface Instructor {
    name: string;
    age: number;
  }
  
  function infoInstructor(inst: Instructor) {
    console.log(`${inst.name} - ${inst.age} years old`);
  }
  
  const noTypeVar = {name: "Franco", age: 26};
  
  infoInstructor(noTypeVar); // "Franco - 26 years old"
  const lolito = {name: "Lolito", age: 2};

  infoInstructor(lolito); // "Lolito - 2 years old"