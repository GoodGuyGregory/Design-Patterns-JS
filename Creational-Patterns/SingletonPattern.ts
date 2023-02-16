//  this is a Singleton Class
class Tree {
    public static instance: Tree;
    public tempZone: string;
    public spermatoPhyta: string;
    public quantity: number;

    constructor(tempZone: string, spermatoPhyta: string, quantity: number) {
        this.tempZone = tempZone;
        this.spermatoPhyta = spermatoPhyta;
        this.quantity = quantity;
    }

    private static createInstance(tempZone: string, spermatoPhyta: string, quantity: number): Tree {
        let tree = new Tree(tempZone, spermatoPhyta, quantity);
        return tree;
    }

    public static getInstance(tempZone: string, spermatoPhyta: string, quantity: number): Tree {
        if (!this.instance) {
            this.instance = this.createInstance(tempZone, spermatoPhyta, quantity);
        }
        return this.instance;
    }

}

//  Singleton Patterns: 

//  After the Class design and the Constructor Pattern is implemented.
//  a Singleton Pattern is different in that it only allows ONE instance of the class.


let largeForest = Tree.getInstance("4-6", "gymnosperm", 678);
let smallForest = Tree.getInstance("4-6", "gymnosperm", 34);

console.log(largeForest);
console.log("Same instance? " + (largeForest === smallForest));

