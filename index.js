// Write your classes here
class Tree{
  constructer(species){
    this.species=species
  }
  static drfinition(){
    return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves."
  }
}
class Deciduous extends Tree{
  constructer(species,name){
  super(species)
  this.name=name
}
static definition(){
  return `${super.definition()}+"Deciduous trees shed their leaves annually.`
}
}
Evergreen extends Tree {
  constructer(species,name){
  super(species)
  this.name=name

  }
  static definition(){
    return `${super.definition()}+"Evergreens keep their leaves all year round.`
  }
}
