// Write your classes here
class Tree {
  constructor(species) {
    this.species = species;
  }


  static definition() {
    return `A tree is a perennial plant with an elongated stem, or trunk, supporting
 branches and leaves.`;
  }
}

// Inherits from Pet
class  Deciduous extends Tree {
  constructor(species, name) {
    super(name);
    super(species)= species;
  }

  static definition() {
    return (
      super.definition() + ' Deciduous trees shed their leaves annually.'
    );
  }
}

let creature = new Pet('The Thing');
let dog = new Dog('Spot', 'foxhound');

Pet.definition();
Dog.definition();
