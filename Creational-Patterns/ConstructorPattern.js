//  Constructor Patterns:
//  Use of a deisgned class as a base and then
//  the object is extended.

//  class design pattern turns to constructor pattern when 
//  this class is extended...
class Tree {
    //  this is very broad
    constructor(tempZone, spermatoPhyta) {
        this.tempZone = tempZone;
        this.spermatoPhyta = spermatoPhyta;
    }
}

class FirTree extends Tree {
    constructor(trueFir, commonName, scientificName) {
        //  add super class defintion variables
        super("4-6", "gymnosperm");
        this.cones = true;
        this.trueFir = trueFir;
        this.commonName = commonName;
        this.scientificName = scientificName;
    }
}


//  then the extension is used for the constructor pattern.

const douglasFir = new FirTree(false, "Douglas-Fir", "Pseudotsuga menziesii");

console.log(douglasFir);


